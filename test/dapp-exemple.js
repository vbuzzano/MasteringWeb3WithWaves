/* global before,setupAccounts, accountData, accounts, address,
        broadcast, waitForTx,
        file, compile, setScript, invokeScript,
        data
*/
/* eslint no-undef: "error" */

const wvs = 10 ** 8

describe('dApp test suite', async () => {
    before(async () => {
        await setupAccounts({
            dApp: 0.5 * wvs,
            alice: 2 * wvs,
        })

        const ttxData = data({
            data: [
                {
                    key: 'item_A_coupon0_price',
                    type: 'integer',
                    value: 1 * wvs,
                },
                {
                    key: 'item_A_coupon1_price',
                    type: 'integer',
                    value: 0.5 * wvs,
                },
            ],
        }, accounts.dApp)

        await broadcast(ttxData)
        await waitForTx(ttxData.id)

        const script = compile(file('dapp-exemple.ride'))
        const ssTx = setScript({ script }, accounts.dApp)
        await broadcast(ssTx)
        await waitForTx(ssTx.id)

        console.log('Script has been set')
    })

    it('dApp invoke purchase', async () => {
        const txPurchase = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'purchase',
                args: [{ type: 'string', value: 'coupon1' }],
            },
            payment: [
                { amount: 0.5 * wvs, assetId: null },
            ],
        }, accounts.alice)

        await broadcast(txPurchase)
        await waitForTx(txPurchase.id)

        const data = await accountData(address(accounts.dApp))
        console.log(data)

        const txPurchase2 = invokeScript({
            dApp: address(accounts.dApp),
            call: {
                function: 'purchase',
                args: [{ type: 'string', value: 'coupon1' }],
            },
            payment: [
                { amount: 1 * wvs, assetId: null },
            ],
        }, accounts.alice)

        await broadcast(txPurchase2)
        await waitForTx(txPurchase2.id)

        const data2 = await accountData(address(accounts.dApp))
        console.log(data2)
    })
})
