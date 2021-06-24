/**
 *
 * To run this test, you will need at least 3.11 Waves.
 * get it here: https://stagenet.wavesexplorer.com/faucet
 *
 * @author: vincent/code28
 *
 */

/* global before,setupAccounts, accounts,
   broadcast, waitForTx, issue, reissue,
   setAssetScript, transfer, address */
/* eslint no-undef: "error" */

const wvs = 1e8

describe('Week 5 - Task 1', () => {
    before(async () => {
        await setupAccounts({ issuer: 3.1 * wvs, bob: 0.01 * wvs })
        console.log(`Seed for account issuer is ${accounts.issuer}`)
    })

    let assetId = null

    it('Issue usual token', async () => {
        const params = {
            name: 'Usual Token 1',
            quantity: 100,
            decimals: 0,
            reissuable: true,
            fee: 1 * wvs,
            script: 'base64:AwZd0cYf',
            description: 'Simple example of \'custom token\'',
        }

        const stx = issue(params, accounts.issuer)
        const tx = await broadcast(stx)
        await waitForTx(tx.id)

        assetId = tx.id

        console.log(`Token created : ${tx.id}`)
    })

    it('Re-issue 100 more tokens', async () => {
        const params = {
            quantity: 100,
            assetId,
            reissuable: true,
        }

        const stx = reissue(params, accounts.issuer)
        const tx = await broadcast(stx)
        await waitForTx(tx.id)

        console.log(`Token re-issued successfully : ${tx.id}`)
    })

    it('Transfer 50 tokens to any address', async () => {
        const ttx = transfer({
            amount: 50,
            assetId,
            fee: 0.005 * wvs,
            recipient: address(accounts.bob),
        }, accounts.issuer)
        const tx = await broadcast(ttx)
        await waitForTx(tx.id)

        console.log(`Transfer successfull : ${tx.id}`)
    })

    it('Update asset script to allow only InvokeScript transactions with the token and deny all others', async () => {
        const params = {
            assetId,
            script: 'base64:AwQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAF0ludm9rZVNjcmlwdFRyYW5zYWN0aW9uBAAAAAFpBQAAAAckbWF0Y2gwBgccrZLH',
        }

        const stx = setAssetScript(params, accounts.issuer)
        const tx = await broadcast(stx)
        await waitForTx(tx.id)

        console.log(`Token script updated successfully : ${tx.id}`)
    })

    it('Re Transfer 50 tokens to any address Should failed', async () => {
        const ttx = transfer({
            amount: 50,
            assetId,
            fee: 0.005 * wvs,
            recipient: address(accounts.bob),
        }, accounts.issuer)
        const tx = await broadcast(ttx)
        await waitForTx(tx.id)

        console.log(`Transfer successfull : ${tx.id}`)
    })
})
