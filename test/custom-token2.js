/**
 *
 * To run this test, you will need at least 3.11 Waves.
 * get it here: https://stagenet.wavesexplorer.com/faucet
 *
 * @author: vincent/code28
 *
 */

const { exchange, reissue } = require('@waves/waves-transactions')

/* global before,setupAccounts, accounts, broadcast,
    waitForTx, issue, burn, order, waitNBlocks
   publicKey, file, compile, transfer, address */
/* eslint no-undef: "error" */

const expireLapsTime = 5 // 5 seconds

const wvs = 1e8
let assetId = null

describe('Week 5 - Task 3', () => {
    before(async () => {
        await setupAccounts({
            issuer: 3 * wvs,
            bob: 1 * wvs,
        })

        // Load ride file, change timestamp to now + 5 seconds
        const scriptFile = file('week5-task3.ride')
            .replace(/(let expireTimestamp = )([0-9]+)(.*\n)/, `$1${new Date().valueOf() + (expireLapsTime * 1000)}`)

        const stx = issue({
            name: 'Usual Token 2',
            quantity: 100,
            decimals: 0,
            reissuable: true,
            fee: 1 * wvs,
            script: compile(scriptFile),
            description: 'Week5/task3 Token',
        }, accounts.issuer)
        const tx = await broadcast(stx)
        await waitForTx(tx.id)

        assetId = tx.id
        console.log(`Asset Id : ${assetId}`)
    })

    it('Transaction should work for a laps time of 20 secondes', async () => {
        const params = {
            amount: 5,
            assetId,
            fee: 0.005 * wvs,
            recipient: address(accounts.bob),
        }
        let ttx = transfer(params, accounts.issuer)
        const tx = await broadcast(ttx)
        await waitForTx(tx.id)
        // console.log('Transfer before expire time successful, waiting expiration')

        await waitNBlocks(2)

        ttx = transfer(params, accounts.issuer)
        await expect(broadcast(ttx)).rejectedWith()
    })

    it('Only issuer can burn token', async () => {
        const params = {
            assetId,
            amount: 1,
            fee: 0.005 * wvs,
        }
        let ttx = burn(params, accounts.issuer)
        const tx = await broadcast(ttx)
        await waitForTx(tx.id)

        ttx = burn(params, accounts.bob)
        await expect(broadcast(ttx)).rejectedWith()
    })

/*    it('Only issuer can re-issue token', async () => {
        const params = {
            quantity: 100,
            assetId,
            reissuable: true,
        }
        let ttx = reissue(params, accounts.issuer)
        const tx = await broadcast(ttx)
        await waitForTx(tx.id)

        ttx = reissue(params, accounts.bob)
        await expect(broadcast(ttx)).rejectedWith()
    })
*/

    it('Allow Exchange transactions only with Waves token', async () => {
        const sell = order({
            matcherPublicKey: publicKey(accounts.issuer),
            price: 1500,
            amount: 5,
            orderType: 'sell',
            amountAsset: assetId,
            priceAsset: null,
        }, accounts.issuer)

        const buy = order({
            matcherPublicKey: publicKey(accounts.issuer),
            price: 1500,
            amount: 2,
            orderType: 'buy',
            amountAsset: assetId,
            priceAsset: null,
        }, accounts.bob)

        const params = {
            order1: buy,
            order2: sell,
            price: 1500,
            amount: 2,
            fee: 0.007 * wvs,
            buyMatcherFee: 100000,
            sellMatcherFee: 100000,
        }

        const stx = exchange(params, accounts.issuer)
        const tx = await broadcast(stx)
        await waitForTx(tx.id)
    })
})
