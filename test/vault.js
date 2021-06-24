/* global before,setupAccounts, accounts,
        broadcast, waitForTx,
        file, compile, setScript, invokeScript,
        address
*/
/* eslint no-undef: "error" */
/* eslint-disable prefer-destructuring */

const wvs = 10 ** 8

describe('Custom Wallet', async () => {
    before(async () => {
        await setupAccounts({
            dApp: 0.5 * wvs,
            alice: 0.5 * wvs,
        })

        const script = compile(file('vault.ride'))
        const ssTx = setScript({ script }, accounts.dApp)
        await broadcast(ssTx)
        await waitForTx(ssTx.id)

        console.log('Accounts and script have been set')
    })

    const assetId = null

    it('Wallet Deposit ', async () => {
        const params = {
            dApp: address(accounts.dApp),
            call: {
                function: 'deposit',
            },
            payment: [{
                amount: 10, assetId,
            }],
        }
        const stx = invokeScript(params, accounts.alice)
        const tx = await broadcast(stx)
        await waitForTx(tx.id)
        console.log(`Deposit done -> ${tx.id}`)
    })
})
