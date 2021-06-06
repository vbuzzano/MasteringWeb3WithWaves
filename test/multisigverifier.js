const accountCooperAddr = '3P....'
const accountAliceSeed = 'seed phrase'

it('Verifier test 1', async function(){

    const ttx = transfer({ 
        amount: 1000, recipient: address() 
        })

    await broadcast(ttx)
    await waitForTx(ttx.id)
})

it('Verifier test 2 with other public key', async function(){
    const ttx = transfer({ 
        senderPublicKey: "WrongPublicKey",
        amount: 1000, recipient: address() 
        })

    await broadcast(ttx)
    await waitForTx(ttx.id)
})