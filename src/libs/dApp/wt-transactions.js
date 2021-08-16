import { broadcast, waitForTx } from '@waves/waves-transactions'

import {
    DAPP_ADDRESS, currentNetwork, fetchData, connectIfNot,
} from './dApp'
import { hashVote } from './helper'

import config from '../../../config'

const { nftScript } = config

const timeout = 300000 // 5 minutes

// eslint-disable-next-line no-undef
const signTx = async txData => JSON.parse(await WavesKeeper.signTransaction(txData))

const publishTx = async (signedTx) => {
    const { server } = currentNetwork()
    const tx = await broadcast(signedTx, server)
    return waitForTx(tx.id, { apiBase: server, timeout })
}

const signAndPublishTx = async (txData) => {
    const signedTx = await signTx(txData)
    return await publishTx(signedTx)
}

/*
const createCoupon = async (coupon) => {
    const { title, shortDescription } = coupon
    const stx = issue({
        name: title,
        description: shortDescription,
        script: nftScript,
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
    const signedTx = await signTx(txData)
    const tx = await publishTx(signedTx)
    await fetchData()
    return tx
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
                        value: `${data.id}`,
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
    const tx = await signAndPublishTx(txData)
    await fetchData()
    return tx
}

export const removeItem = async (coupon) => {
    const { id } = coupon
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'removeItem',
                args: [
                    {
                        type: 'string',
                        value: `${id}`,
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
    const tx = await signAndPublishTx(txData)
    await fetchData()
    return tx
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
    const tx = await signAndPublishTx(txData)
    await fetchData()
    return tx
}

export const purchaseCoupon = async (coupon) => {
    const { id, couponPrice } = coupon

    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'purchase',
                args: [
                    {
                        type: 'string',
                        value: `${id}`,
                    },
                ],
            },
            payment: [
                {
                    tokens: String(
                        Number.parseFloat(couponPrice / 1e8).toFixed(8),
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
    const tx = await signAndPublishTx(txData)
    await fetchData()
    connectIfNot(tx.sender)
    return tx
}

export const rejectPurchase = async (purchase) => {
    const { id } = purchase
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'rejectPurchase',
                args: [
                    {
                        type: 'string',
                        value: `${id}`,
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
    const tx = await signAndPublishTx(txData)
    await fetchData()
    return tx
}

export const sendCouponToSupplier = async (purchase) => {
    const { assetId, supplier } = purchase
    const txData = {
        type: 4,
        data: {
            amount: {
                tokens: '1',
                assetId,
            },
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
            recipient: supplier,
        },
    }
    const tx = await signAndPublishTx(txData)
    await fetchData()
    return tx
}
export const acceptPurchase = async (purchase, setStepDone) => {
    const { id, user, item } = purchase
    const { title, shortDescription } = item

    // create coupon (NFT)
    const txGenAssetData = {
        type: 3,
        data: {
            name: title,
            description: shortDescription,
            quantity: 1,
            precision: 0,
            reissuable: false,
            script: `base64:${nftScript}`,
            fee: {
                tokens: '0.001',
                assetId: 'WAVES',
            },
        },
    }
    const stx1 = await signTx(txGenAssetData)
    const assetId = stx1.id

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
                        value: `${id}`,
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

    const stx2 = await signTx(txAcceptData)

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
            recipient: user,
        },
    }

    if (setStepDone) setStepDone(1)
    const res = await Promise.all([publishTx(stx1), publishTx(stx2)])

    if (setStepDone) setStepDone(2)
    const stx3 = await signTx(txTransferData)
    const res3 = await publishTx(stx3)
    await fetchData()
    return [...res, res3]
}

export const burnCoupon = async (purchase) => {
    const { assetId } = purchase
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
    const tx = await signAndPublishTx(txData)
    await fetchData()
    return tx
}

export const withdrawFunds = async (purchase) => {
    const { assetId } = purchase
    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'withdraw',
                args: [
                    { type: 'string', value: assetId },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    const tx = await signAndPublishTx(txData)
    await fetchData()
    return tx
}

export const commitVote = async (data) => {
    const { item, vote, salt } = data

    const hash = hashVote(item, vote.toLowerCase(), salt)
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
    const tx = await signAndPublishTx(txData)
    await fetchData()
    connectIfNot(tx.sender)
    return tx
}

export const revealVote = async (data) => {
    const { item, salt, commit } = data

    const hash = hashVote(item, 'delisted', salt)
    // alert(hash + ' === ' + commit)
    const vote = hash === commit ? 'delisted' : 'featured'

    const txData = {
        type: 16,
        data: {
            dApp: DAPP_ADDRESS,
            call: {
                function: 'voteReveal',
                args: [
                    { type: 'string', value: item },
                    { type: 'string', value: vote },
                    { type: 'string', value: salt },
                ],
            },
            payment: [],
            fee: {
                tokens: '0.005',
                assetId: 'WAVES',
            },
        },
    }
    const tx = await signAndPublishTx(txData)
    await fetchData()
    connectIfNot(tx.sender)
    return tx
}
