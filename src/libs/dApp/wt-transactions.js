/* eslint-disable max-len */
/* eslint-disable no-undef */
// import { broadcast, issue, waitForTx } from '@waves/waves-transactions'
import { waitForTx } from '@waves/waves-transactions'

import { DAPP_ADDRESS } from './dApp'
import { hashVote } from './helper'

const couponNFTassetScript = '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ZEFwcAYJAAAAAAAAAggFAAAAAWUAAAAGc2VuZGVyCQAEJgAAAAEFAAAACHN1cHBsaWVyBgMJAAAAAAAAAggFAAAAAWUAAAAGc2VuZGVyCQAEJgAAAAEFAAAACHN1cHBsaWVyBgkAAAIAAAABAgAAADdZb3UgY2FuIG9ubHkgaW52b2tlIHNjcmlwdCBvZiBDb3Vwb24gQmF6YWFyIE1hcmtldCBkQXBwAwkAAAAAAAACBQAAAARpdGVtBQAAAAROT05FCQAAAgAAAAEJAAEsAAAAAgIAAAAaSXRlbSBub3QgZm91bmQgZm9yIGNvdXBvbiAFAAAABmNvdXBvbgMJAAAAAAAAAgUAAAAIc3VwcGxpZXIFAAAABE5PTkUJAAACAAAAAQkAASwAAAACCQABLAAAAAICAAAAElN1cHBsaWVyIGZvciBpdGVtIAUAAAAEaXRlbQIAAAAKIG5vdCBmb3VuZAMFAAAACWlzRXhwaXJlZAQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAGVNldEFzc2V0U2NyaXB0VHJhbnNhY3Rpb24EAAAAAWUFAAAAByRtYXRjaDAJAQAAABdjaGVja0FuZEFjY2VwdFNldFNjcmlwdAAAAAEFAAAAAWUDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAD0J1cm5UcmFuc2FjdGlvbgQAAAABZQUAAAAHJG1hdGNoMAYJAAACAAAAAQIAAABMVGhpcyBjb3Vwb24gaGFzIGV4cGlyZWQgYW5kIGNhbiBvbmx5IGJlIGJ1cm5lZCB0byByZW1vdmUgaXQgZnJvbSB5b3VyIHdhbGxldAQAAAAHJG1hdGNoMAUAAAACdHgDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAGVNldEFzc2V0U2NyaXB0VHJhbnNhY3Rpb24EAAAAAWUFAAAAByRtYXRjaDAJAQAAABdjaGVja0FuZEFjY2VwdFNldFNjcmlwdAAAAAEFAAAAAWUDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAD0J1cm5UcmFuc2FjdGlvbgQAAAABZQUAAAAHJG1hdGNoMAkBAAAAEmNoZWNrQW5kQWNjZXB0QnVybgAAAAEFAAAAAWUDCQAAAQAAAAIFAAAAByRtYXRjaDACAAAAE1RyYW5zZmVyVHJhbnNhY3Rpb24EAAAAAWUFAAAAByRtYXRjaDAJAQAAABZjaGVja0FuZEFjY2VwdFRyYW5zZmVyAAAAAQUAAAABZQMJAAABAAAAAgUAAAAHJG1hdGNoMAIAAAAXSW52b2tlU2NyaXB0VHJhbnNhY3Rpb24EAAAAAWUFAAAAByRtYXRjaDAJAQAAABpjaGVja0FuZEFjY2VwdEludm9rZVNjcmlwdAAAAAEFAAAAAWUDCQAAAAAAAAIIBQAAAAJ0eAAAAAZzZW5kZXIJAAQmAAAAAQUAAAAIc3VwcGxpZXIJAAACAAAAAQIAAABXVGhpcyBjb3Vwb24gY2FuIG9ubHkgYmUgdXNlIHRvIHN1cHBsaWVyIGluIGFuIGV4Y2hhbmdlIG9mIGdvb2Qgb3Igc2VydmljZSB3aXRoIGRpc2NvdW50CQAAAgAAAAECAAAAMlRoaXMgY291cG9uIGNhbiBiZSBidXJuZWQgdG8gZW5hYmxlIHdpdGhkcmF3IGZ1bmRzmvd1eg=='

/*
const createCoupon = async (coupon) => {
    const { title, shortDescription } = coupon
    const stx = issue({
        name: title,
        description: shortDescription,
        script: couponNFTassetScript,
        quantity: 1,
        decimals: 0,
        reissuable: false,
        fee: 500000,
        chainId: window.dApp.chainId,
    }, 'seed')
    // console.log('broadcast create coupon nft')
    const tx = await broadcast(stx, window.dApp.baseUri)
    // console.log(`waitForTx ${tx.id}`)
    await waitForTx(tx.id, { apiBase: window.dApp.baseUri })
    // console.log(`Coupon nft created${tx.id}`)
    return tx.id
}
*/

const couponData = (data) => {
    const newPrice = parseInt(data.newPrice, 10)
    const oldPrice = parseInt(data.oldPrice, 10)
    const discount = oldPrice > 0 ? parseInt(100 - (newPrice * 100) / oldPrice, 10) : 0

    return {
        name: data.name,
        title: data.title,
        longTitle: data.longTitle,
        image: data.image,
        rating: 0,
        ratings: 0,
        shortDescription: data.shortDescription,
        longDescription: data.longDescription,
        priceTerm: data.priceTerm,
        newPrice,
        oldPrice,
        discount,
    }
}

export const addItem = async (data) => {
    const couponPrice = parseInt(data.couponPrice, 10)
    const couponExpire = Date.parse(data.expirationDate)
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'addItem',
                args: [
                    {
                        type: 'string',
                        value: data.title,
                    },
                    {
                        type: 'integer',
                        value: couponPrice,
                    },
                    {
                        type: 'string',
                        value: JSON.stringify(couponData(data)),
                    },
                    {
                        type: 'integer',
                        value: couponExpire,
                    },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}

export const updateItem = async (data) => {
    const couponPrice = parseInt(data.couponPrice, 10)
    const couponExpire = Date.parse(data.expirationDate)
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'updateItem',
                args: [
                    {
                        type: 'string',
                        value: `item_${data.id}`,
                    },
                    {
                        type: 'string',
                        value: data.title,
                    },
                    {
                        type: 'integer',
                        value: couponPrice,
                    },
                    {
                        type: 'string',
                        value: JSON.stringify(couponData(data)),
                    },
                    {
                        type: 'integer',
                        value: couponExpire,
                    },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}

export const removeItem = async (id) => {
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'removeItem',
                args: [
                    {
                        type: 'string',
                        value: `item_${id}`,
                    },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}

export const registerSupplier = async (data) => {
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'registerSupplier',
                args: [
                    {
                        type: 'string',
                        value: JSON.stringify(data),
                    },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}

export const purchaseCoupon = async (coupon) => {
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'purchase',
                args: [
                    {
                        type: 'string',
                        value: `item_${coupon.id}`,
                    },
                ],
            },
            payment: [
                {
                    tokens: String(
                        Number.parseFloat(coupon.couponPrice / 1e8).toFixed(8),
                    ),
                    assetId: 'WAVES',
                },
            ],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}

export const rejectPurchase = async (purchase) => {
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'rejectPurchase',
                args: [
                    {
                        type: 'string',
                        value: `purchase_${purchase.id}`,
                    },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}

export const sendCouponToSupplier = async (purchase) => {
    const txTransferData = {
        type: 4,
        data: {
            amount: {
                tokens: '1',
                assetId: `${purchase.assetId}`,
            },
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
            recipient: purchase.supplier,
        },
    }
    const res3 = JSON.parse(await WavesKeeper.signAndPublishTransaction(txTransferData))
    await waitForTx(res3.id, { apiBase: window.dApp.baseUri })
}

export const acceptPurchase = async (purchase, setStepDone) => {
    // create coupon (NFT)
    const coupon = purchase.item // await getItemByKey(purchase.item)
    // const assetId = await createCoupon(coupon)
    const txGenAssetData = {
        type: 3,
        data: {
            name: coupon.title,
            description: coupon.shortDescription,
            quantity: 1,
            precision: 0,
            reissuable: false,
            script: `base64:${couponNFTassetScript}`,
            fee: {
                tokens: '0.001',
                assetId: 'WAVES',
            },
        },
    }
    const res1 = JSON.parse(await WavesKeeper.signAndPublishTransaction(txGenAssetData))
    const assetId = res1.id
    await waitForTx(res1.id, { apiBase: window.dApp.baseUri })
    if (setStepDone) setStepDone(1)

    // accept purchase and transfer coupon
    const txAcceptData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'acceptPurchase',
                args: [
                    {
                        type: 'string',
                        value: `purchase_${purchase.id}`,
                    },
                    {
                        type: 'string',
                        value: assetId,
                    },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    const res2 = JSON.parse(await WavesKeeper.signAndPublishTransaction(txAcceptData))
    await waitForTx(res2.id, { apiBase: window.dApp.baseUri })
    if (setStepDone) setStepDone(2)

    // accept purchase and transfer coupon
    const txTransferData = {
        type: 4,
        data: {
            amount: {
                tokens: '1',
                assetId: `${assetId}`,
            },
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
            recipient: purchase.user,
        },
    }
    const res3 = JSON.parse(await WavesKeeper.signAndPublishTransaction(txTransferData))
    await waitForTx(res3.id, { apiBase: window.dApp.baseUri })
    if (setStepDone) setStepDone(3)

    return [res1, res2, res3]
}

export const burnCoupon = async (assetId) => {
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'burn',
                args: [],
            },
            payment: [
                { tokens: '1', assetId },
            ],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}

export const withdrawAvailable = async () => {
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'withdrawAvailable',
                args: [],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}

export const commitVote = async (item, vote, salt) => {
    const hash = hashVote(item.id || item, vote, salt)
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'voteCommit',
                args: [
                    { type: 'string', value: item },
                    { type: 'string', value: hash },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    return await WavesKeeper.signAndPublishTransaction(txData)
}
