const { invokeScript, broadcast, waitForTx } = require("@waves/waves-transactions")

const accountCooperAddr = '3P....'
const accountAliceSeed = 'seed phrase'

it ('dApp invoke purchase', async () => {
    let txObjSigned  = invokeScript({
        dApp: accountCooperAddr,
        call: {
            "function": "purchase",
            "args": [],
        },
        payment: [
            { amount: 500000, assetId: null }
        ],    
    }, accountAliceSeed)

    let tx = await broadcast(txObjSigned)
    await waitForTx(tx)
}) 