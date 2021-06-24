/* global address, broadcast, waitForTx, transfer */
/* eslint no-undef: "error" */

it('Verifier test 1', async () => {
    const ttx = transfer({
        amount: 1000, recipient: address(),
    })

    await broadcast(ttx)
    await waitForTx(ttx.id)
})

it('Verifier test 2 with other public key', async () => {
    const ttx = transfer({
        senderPublicKey: 'WrongPublicKey',
        amount: 1000,
        recipient: address(),
    })

    await broadcast(ttx)
    await waitForTx(ttx.id)
})
