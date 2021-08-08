/* global before,setupAccounts, accounts,
        broadcast, waitForTx,
        file, compile, setScript, invokeScript,
        address
*/
/* eslint no-undef: "error" */
/* eslint-disable prefer-destructuring */

const crypto = require('crypto')
const bs58 = require('bs58')

const wvs = 1e8

const dataJson = {
    title: 'T-Shirt with ❤, vote 1',
    couponPrice: 0.01 * wvs,
    oldPrice: 1 * wvs,
    newPrice: 0.01 * wvs,
    address: 'Universe',
    description: 'I want you to make love, not war, I know you\'ve heard it before',
    image: 'https://bit.ly/3xqwuYf',
}

// const dappTestNet = '3N3NZpwQoRHs5CPa54Rvgu81uHENsH5hyZN';

// const usersInitialBalance = 0.1 * wvs;

const voteTypes = {
    delisted: 'delisted',
    featured: 'featured',
}

const votes = [
    voteTypes.delisted,
    voteTypes.featured,
    voteTypes.featured,
]

const salts = [
    'random0',
    'random1',
    'random2',
]

function bufferToArrayBuffer(buffer) {
    var ab = new ArrayBuffer(buffer.length);
    var view = new Uint8Array(ab);
    for (var i = 0; i < buffer.length; ++i) {
        view[i] = buffer[i];
    }
    return ab;
}

const toBytes = (text)  => Buffer.from(new TextEncoder().encode(text))
const sha256 = (buffer) => crypto.createHash('sha256').update(buffer).digest()
const toBase58String = (buffer)  => bs58.encode(buffer)

const encodeVote = (item, vote, salt) => toBase58String(sha256(toBytes(item + vote + salt)))

describe('Coupon Bazzar test suite', async () => {
    before(async () => {
        await setupAccounts({
            user0: 0.1 * wvs,
            user1: 0.1 * wvs,
            user2: 0.1 * wvs,
            supplier1: 0.1 * wvs,
            dApp: 0.1 * wvs,
        })
        console.log('Accounts created')

        const script = compile(file('coupon-bazaar.ride'))
        const ssTx = setScript({ script }, accounts.dApp)
        await broadcast(ssTx)
        await waitForTx(ssTx.id)
        console.log('Script has been set')
    })

    it('Register supplier item', async () => {
        const ts = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'registerSupplier',
                args: [
                    { type: 'string', value: JSON.stringify({ name: 'supplier name', email: 'email@suppli.er' }) },
                ],
            },
            fee: 900000,
            payment: [],
        }, accounts.supplier1)
        const tx = await broadcast(ts)
        await waitForTx(tx.id)
    })

    it('Add item', async () => {
        const ts = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'addItem',
                args: [
                    { type: 'string', value: dataJson.title },
                    { type: 'integer', value: dataJson.couponPrice },
                    { type: 'string', value: JSON.stringify(dataJson) },
                ],
            },
            fee: 900000,
            payment: [],
        }, accounts.supplier1)
        const tx = await broadcast(ts)
        const res = await waitForTx(tx.id)
        itemId = res.stateChanges.data[0].key.match(/item_[^_]+/g)[0]
    })

    it('Purchase item', async () => {
        const ts = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'purchase',
                args: [
                    { type: 'string', value: itemId },
                ],
            },
            fee: 900000,
            payment: [{
                amount: dataJson.couponPrice,
                assetId: null,
            }],
        }, accounts.user2)

        const tx = await broadcast(ts)
        await waitForTx(tx.id)
    })

    it('Vote commit', async () => {
        const commitVote = async (item, vote, salt, seed) => {
            const secret = encodeVote(item, vote, salt)
            const tx = invokeScript({
                dApp: address(accounts.dApp),
                call: {
                    function: 'voteCommit',
                    args: [
                        { type: 'string', value: item },
                        { type: 'string', value: secret },
                    ],
                },
                payment: [],
            }, seed)
            await broadcast(tx)
            await waitForTx(tx.id)
        }

        await commitVote(itemId, votes[0], salts[0], accounts.user0)
        await commitVote(itemId, votes[1], salts[1], accounts.user1)
        await commitVote(itemId, votes[2], salts[2], accounts.user2)
    })

    it('Vote reveal', async () => {
        const revealVote = async (item, vote, salt, seed) => {
            const ts = invokeScript({
                dApp: address(accounts.dApp),
                call: {
                    function: 'voteReveal',
                    args: [
                        { type: 'string', value: item },
                        { type: 'string', value: vote },
                        { type: 'string', value: salt },
                    ],
                },
                payment: [],
            }, seed)
            const tx = await broadcast(ts)
            await waitForTx(tx.id)
        }
        await revealVote(itemId, votes[0], salts[0], accounts.user0)
        await revealVote(itemId, votes[1], salts[1], accounts.user1)
        await revealVote(itemId, votes[2], salts[2], accounts.user2)
    })
})

