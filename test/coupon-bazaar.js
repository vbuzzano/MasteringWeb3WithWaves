/* global before, setupAccounts, accounts,
        broadcast, waitForTx, accountDataByKey
        file, compile, setScript, invokeScript,
        address, issue, transfer, burn, publicKey
*/
/* eslint no-undef: "error" */
/* eslint-disable prefer-destructuring */

const bs58 = require('bs58')

const crypto = require('crypto')
const assert = require('assert')

const wvs = 1e8

const dataJson = {
    couponPrice: 5,
    couponTerm: 'WAVES',
    discount: 100,
    image: '',
    title: 'COUPONTEST',
    longDescription: 'long desc',
    longTitle: 'long title',
    name: 'After Drinks Reduction',
    newPrice: 0,
    oldPrice: 20,
    priceTerm: '$',
    shortDescription: 'free drinks after work',
}

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

const itemIds = []
const purchaseIds = []
const nftIds = []

let couponNFTassetScript = null

const getAddItemTxData = (title, price) => {
    assert(title)
    return {
        dApp: address(accounts.dApp),
        call: {
            function: 'addItem',
            args: [
                { type: 'string', value: title },
                { type: 'integer', value: price || dataJson.couponPrice },
                { type: 'string', value: JSON.stringify(dataJson) },
                { type: 'integer', value: Date.parse('2025-12-31') },
            ],
        },
        fee: 900000,
        payment: [],
    }
}

const getUpdateTxData = (itemId, title, price, expire) => ({
    dApp: address(accounts.dApp),
    call: {
        function: 'updateItem',
        args: [
            { type: 'string', value: itemId },
            { type: 'string', value: title },
            { type: 'integer', value: price },
            { type: 'string', value: JSON.stringify(dataJson) },
            { type: 'integer', value: Date.parse(expire) },
        ],
    },
    fee: 900000,
    payment: [],
})

const getItemPurchaseData = (itemId, amount) => ({
    dApp: address(accounts.dApp),
    call: {
        function: 'purchase',
        args: [
            { type: 'string', value: itemId },
        ],
    },
    fee: 900000,
    payment: [{
        amount,
        assetId: null,
    }],
})

const getAcceptTxData = (purchaseId, nftId) => ({
    dApp: address(accounts.dApp),
    call: {
        function: 'acceptPurchase',
        args: [
            { type: 'string', value: purchaseId },
            { type: 'string', value: nftId },
        ],
    },
    fee: 900000,
    payment: [{
        amount: dataJson.couponPrice,
        assetId: null,
    }],
})

const getTransferTxData = (recipient, amount, assetId, fee) => ({
    amount,
    assetId,
    fee,
    recipient,
})

const toBytes = text => Buffer.from(new TextEncoder().encode(text))
const sha256 = buffer => crypto.createHash('sha256').update(buffer).digest()
const toBase58String = buffer => bs58.encode(buffer)

const encodeVote = (item, vote, salt) => toBase58String(sha256(toBytes(item + vote + salt)))

describe('Coupon Bazaar test suite', async () => {
    before(async () => {
        await setupAccounts({
            user0: 0.3 * wvs,
            user1: 0.3 * wvs,
            user2: 0.3 * wvs,
            supplier1: 1 * wvs,
            dApp: 0.3 * wvs,
        })
        console.log('Accounts created')

        const couponNFTassetScriptFile = file('coupon-asset.ride')
            .replace(/(let dAppPubKey = base58')([^']+)('.*)/, `$1${publicKey(accounts.dApp)}$3`)
        couponNFTassetScript = compile(couponNFTassetScriptFile)
        const script = compile(file('coupon-bazaar.ride'))
        const tx = setScript({ script }, accounts.dApp)
        await broadcast(tx) && await waitForTx(tx.id)
        console.log('Script has been set')

        console.log('dApp Public Key', publicKey(accounts.dApp))
    })

    it('User can register as Supplier', async () => {
        const tx = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'registerSupplier',
                args: [
                    { type: 'string', value: JSON.stringify({ name: 'suplier name', email: 'email@suppli.er' }) },
                ],
            },
            fee: 900000,
            payment: [],
        }, accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
    })

    it('Supplier can add items', async () => {
        let tx = null; let res = null
        // coupon 1
        tx = invokeScript(getAddItemTxData('Coupon 01', 2000), accounts.supplier1)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        itemIds.push(res.stateChanges.data[0].key.match(/item_[^_]+/g)[0])

        tx = invokeScript(getAddItemTxData('Coupon 2', 2000), accounts.supplier1)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        itemIds.push(res.stateChanges.data[0].key.match(/item_[^_]+/g)[0])

        tx = invokeScript(getAddItemTxData('Coupon 3', 3000), accounts.supplier1)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        itemIds.push(res.stateChanges.data[0].key.match(/item_[^_]+/g)[0])

        tx = invokeScript(getAddItemTxData('Test Remove', 4000), accounts.supplier1)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        itemIds.push(res.stateChanges.data[0].key.match(/item_[^_]+/g)[0])
    })

    it('Supplier can update items', async () => {
        let title = null; let price = null
        title = await accountDataByKey(`${itemIds[0]}_title`, address(accounts.dApp))
        assert(title)
        assert(title.value === 'Coupon 01')
        price = await accountDataByKey(`${itemIds[0]}_price`, address(accounts.dApp))
        assert(price)
        assert(price.value === 2000)
        const tx = invokeScript(getUpdateTxData(itemIds[0], 'Coupon 1', 1000, '2019-12-31'), accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
        title = await accountDataByKey(`${itemIds[0]}_title`, address(accounts.dApp))
        assert(title)
        assert(title.value === 'Coupon 1')
        price = await accountDataByKey(`${itemIds[0]}_price`, address(accounts.dApp))
        assert(price)
        assert(price.value === 1000)
    })

    it('Supplier can remove items (and their data)', async () => {
        let title = await accountDataByKey(`${itemIds[3]}_title`, address(accounts.dApp))
        assert(title)
        assert(title.value === 'Test Remove')
        const tx = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'removeItem',
                args: [
                    { type: 'string', value: itemIds[3] },
                ],
            },
            fee: 900000,
            payment: [],
        }, accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
        title = await accountDataByKey(`${itemIds[3]}_title`, address(accounts.dApp))
        assert(!title)
    })

    it('Users can purchase coupons', async () => {
        let tx = null; let res = null
        try {
            tx = invokeScript(getItemPurchaseData(itemIds[0], 10000), accounts.user0)
            await broadcast(tx)
            res = await waitForTx(tx.id)
            throw Error('User cannot purchase expired coupon')
        } catch (err) { true }

        // purchases 1
        tx = invokeScript(getItemPurchaseData(itemIds[1], 2000), accounts.user0)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        purchaseIds.push(res.stateChanges.data[1].key.match(/purchase_[^_]+/g)[0])

        // purchase 2
        tx = invokeScript(getItemPurchaseData(itemIds[1], 2000), accounts.user1)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        purchaseIds.push(res.stateChanges.data[1].key.match(/purchase_[^_]+/g)[0])

        // purchase  3
        tx = invokeScript(getItemPurchaseData(itemIds[2], 3000), accounts.user2)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        purchaseIds.push(res.stateChanges.data[1].key.match(/purchase_[^_]+/g)[0])

        // purchase 4
        tx = invokeScript(getItemPurchaseData(itemIds[1], 2000), accounts.user0)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        purchaseIds.push(res.stateChanges.data[1].key.match(/purchase_[^_]+/g)[0])

        // purchase 5
        tx = invokeScript(getItemPurchaseData(itemIds[2], 3000), accounts.user0)
        await broadcast(tx)
        res = await waitForTx(tx.id)
        purchaseIds.push(res.stateChanges.data[1].key.match(/purchase_[^_]+/g)[0])
    })

    it('Supplier can reject purchase, user are automatically refund', async () => {
        const tx = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'rejectPurchase',
                args: [
                    { type: 'string', value: purchaseIds[4] },
                ],
            },
            fee: 900000,
            payment: [{
                amount: dataJson.couponPrice,
                assetId: null,
            }],
        }, accounts.supplier1)

        await broadcast(tx) && await waitForTx(tx.id)
    })

    it('Supplier can accept purchases and transfer coupon to Users', async () => {
        const issueNFT = (title) => {
            assert(title)
            return {
                name: title,
                description: dataJson.shortDescription,
                script: couponNFTassetScript,
                quantity: 1,
                decimals: 0,
                reissuable: false,
                fee: 500000,
            }
        }
        let tx = null; let res = null; let balance = 0
        // gen nft for purchase 1
        tx = issue(issueNFT('Coupon 1'), accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
        nftIds.push(tx.id)
        // accept purchase 1
        tx = invokeScript(getAcceptTxData(purchaseIds[0], nftIds[0]), accounts.supplier1)
        res = await broadcast(tx) && await waitForTx(tx.id)
        balance = parseInt(res.stateChanges.data[4].value, 10)
        assert(balance === 2000)
        // and transfer nft 1 to user 0
        tx = transfer(
            getTransferTxData(address(accounts.user0), 1, nftIds[0], 0.05 * 1e8),
            accounts.supplier1,
        )
        await broadcast(tx) && await waitForTx(tx.id)

        // gen nft for purchase 2
        tx = issue(issueNFT('Coupon 1'), accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
        nftIds.push(tx.id)
        // accept purchase 2
        tx = invokeScript(getAcceptTxData(purchaseIds[1], nftIds[1]), accounts.supplier1)
        res = await broadcast(tx) && await waitForTx(tx.id)
        balance = parseInt(res.stateChanges.data[4].value, 10)
        assert(balance === 4000)
        // and transfer nft 2 to user 1
        tx = transfer(
            getTransferTxData(address(accounts.user1), 1, nftIds[1], 0.05 * 1e8),
            accounts.supplier1,
        )
        await broadcast(tx) && await waitForTx(tx.id)

        // gen nft for purchase 3
        tx = issue(issueNFT('Coupon 1'), accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
        nftIds.push(tx.id)
        // accept purchase 2
        tx = invokeScript(getAcceptTxData(purchaseIds[2], nftIds[2]), accounts.supplier1)
        res = await broadcast(tx) && await waitForTx(tx.id)
        balance = parseInt(res.stateChanges.data[4].value, 10)
        assert(balance === 7000)
        // and transfer nft 2 to user 1
        tx = transfer(
            getTransferTxData(address(accounts.user2), 1, nftIds[2], 0.05 * 1e8),
            accounts.supplier1,
        )
        await broadcast(tx) && await waitForTx(tx.id)

        // gen nft for purchase 4
        tx = issue(issueNFT('Coupon 1'), accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
        nftIds.push(tx.id)
        // accept purchase 4
        tx = invokeScript(getAcceptTxData(purchaseIds[3], nftIds[3]), accounts.supplier1)
        res = await broadcast(tx) && await waitForTx(tx.id)
        balance = parseInt(res.stateChanges.data[4].value, 10)
        assert(balance === 9000)
        // and transfer nft 4 to user 0
        tx = transfer(
            getTransferTxData(address(accounts.user0), 1, nftIds[3], 0.05 * 1e8),
            accounts.supplier1,
        )
        await broadcast(tx) && await waitForTx(tx.id)
    })

    it('User should be able to transfer coupon to supplier', async () => {
        let tx = transfer(
            getTransferTxData(address(accounts.supplier1), 1, nftIds[0], 0.005 * wvs),
            accounts.user0,
        )
        await broadcast(tx) && await waitForTx(tx.id)

        tx = transfer(
            getTransferTxData(address(accounts.supplier1), 1, nftIds[1], 0.005 * wvs),
            accounts.user1,
        )
        await broadcast(tx) && await waitForTx(tx.id)

        tx = transfer(
            getTransferTxData(address(accounts.supplier1), 1, nftIds[2], 0.005 * wvs),
            accounts.user2,
        )
        await broadcast(tx) && await waitForTx(tx.id)
    })

    it('Supplier can burn received coupon', async () => {
        const ts = burn({
            assetId: nftIds[0],
            amount: 1,
            fee: 500000,
        }, accounts.supplier1)
        const tx = await broadcast(ts)
        await waitForTx(tx.id)
    })

    it('Supplier can withdraw funds (price amount) from burned coupon', async () => {
        const tx = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'withdraw',
                args: [
                    { type: 'string', value: nftIds[0] },
                ],
            },
            fee: 500000,
            payment: [],
        }, accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
    })

    it('Supplier can withdraw funds (price amount) from expired coupon', async () => {
        let tx = null
        // expire item 1
        tx = invokeScript(getUpdateTxData(itemIds[1], 'Coupon 2', 2000, '2019-12-31'), accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)

        // withdraw nft 1 funds
        tx = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'withdraw',
                args: [
                    { type: 'string', value: nftIds[1] },
                ],
            },
            fee: 500000,
            payment: [],
        }, accounts.supplier1)
        await broadcast(tx) && await waitForTx(tx.id)
    })

    it('Supplier can burn coupon via dApp and to withdraw available funds', async () => {
        const ts = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'burn',
                args: [],
            },
            fee: 500000,
            payment: [{
                amount: 1,
                assetId: nftIds[2],
            }],
        }, accounts.supplier1)
        const tx = await broadcast(ts)
        await waitForTx(tx.id)
    })

    it('User can vote for coupon', async () => {
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
            return await waitForTx(tx.id)
        }

        let res = null
        res = await commitVote(itemIds[2], votes[0], salts[0], accounts.user0)
        res = await commitVote(itemIds[2], votes[1], salts[1], accounts.user1)
        res = await commitVote(itemIds[2], votes[2], salts[2], accounts.user2)
    })

    it('User can reveal votes', async () => {
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
            return await waitForTx(tx.id)
        }
        let res = null
        res = await revealVote(itemIds[2], votes[0], salts[0], accounts.user0)
        res = await revealVote(itemIds[2], votes[1], salts[1], accounts.user1)
        res = await revealVote(itemIds[2], votes[2], salts[2], accounts.user2)

    })

    it('Supplier can remove coupon by setting it as removed when purchased or used ', async () => {
        const tx = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'removeItem',
                args: [
                    { type: 'string', value: itemIds[2] },
                ],
            },
            fee: 900000,
            payment: [],
        }, accounts.supplier1)
        await broadcast(tx)
        await waitForTx(tx.id)
        const isRemoved = await accountDataByKey(`${itemIds[2]}_removed`, address(accounts.dApp))
        assert(isRemoved)
    })
})
