const wvs = 1e8

let dataJson = {
    title: 'T-Shirt with ❤, vote 1',
    couponPrice: 0.01 * wvs,
    oldPrice: 1 * wvs,
    newPrice: 0.01 * wvs,
    address: 'Universe',
    description: 'I want you to make love, not war, I know you\'ve heard it before',
    image: 'https://bit.ly/3xqwuYf',
}

const dappTestNet = "3N3NZpwQoRHs5CPa54Rvgu81uHENsH5hyZN"

const usersInitialBalance = 0.1 * wvs

const voteTypes = {
    delisted: "delisted",
    featured: "featured",
}

// item + vote + salt -> .toBytes().sha256().toBase58String()
const commits = [
    "3n9Rghb2fHXGwSYVz59aRXUKBHggY23qsWUAVybsFeMG",
    "ESYw41NA4HwXh4cDE2XT6mzPikrQ6X7qJXtxb9iVyABg",
    "82oVLMhsqBMyNeFvokdTw34vU4V3Q4Revuk15YtYfECP",
]

const reveals = [ 
    voteTypes.delisted, 
    voteTypes.featured, 
    voteTypes.featured,
]
const salts = [
    "random0", 
    "random1", 
    "random2",
]

let itemId = null // Auto set in the addItem test

describe('Coupon Bazzar test suite', async () => {

    before(async function () {
        await setupAccounts({
            user0: 0.1 * wvs,
            user1: 0.1 * wvs, 
            user2: 0.1 * wvs,
            supplier1: 0.1 * wvs,
            dApp: 0.1 * wvs,
        });
        console.log('Accounts created')

        const script = compile(file('coupon-bazaar.ride'));
        const ssTx = setScript({script}, accounts.dApp);
        await broadcast(ssTx);
        await waitForTx(ssTx.id)
        console.log('Script has been set')
    });

    it('Register supplier item', async () => {
        let ts = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'registerSupplier',
                args: [
                    { type: 'string', value: JSON.stringify({ name: "suplier name", "email": "email@suppli.er" }) },
                ],
            },
            fee: 900000,
            payment: [],
        }, accounts.supplier1)
        let tx = await broadcast(ts)
        let res = await waitForTx(tx.id)
    })

    it('Add item', async () => {
        let ts = invokeScript({
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
        let tx = await broadcast(ts)
        let res = await waitForTx(tx.id)
        itemId = res.stateChanges.data[0].key.match(/item_[^_]+/g)[0]
    })

    it ("Purchase item", async () => {
        const ts = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'purchase',
                args: [
                    { type: "string", value: itemId },
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

        const commitVote = async (vote, seed) => {
            const ts = invokeScript({
                dApp: address(accounts.dApp),
                call: {
                    function: "voteCommit",
                    args: [
                        { type: "string", value: itemId },
                        { type: "string", value: vote },
                    ]
                },
                payment: [],
            }, seed)
            let tx = await broadcast(ts)
            await waitForTx(tx.id)    
        }

        await commitVote(commits[0], accounts.user0)
        await commitVote(commits[1], accounts.user1)
        await commitVote(commits[2], accounts.user2)
    })


    it('Vote reveal', async () => {

        const revealVote = async (vote, salt, seed) => {
            const ts = invokeScript({
                dApp: address(accounts.dApp),
                call: {
                    function: "voteReveal",
                    args: [
                        { type: "string", value: itemId },
                        { type: "string", value: vote },
                        { type: "string", value: salt },
                    ]
                },
                payment: [],
            }, seed)
            let tx = await broadcast(ts)
            await waitForTx(tx.id)    
        }

        await revealVote(reveals[0], salts[0], accounts.user0)
        await revealVote(reveals[1], salts[1], accounts.user1)
        await revealVote(reveals[2], salts[2], accounts.user2)
    })

})
