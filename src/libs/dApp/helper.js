/* eslint-disable no-nested-ternary */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import { sha256, base58encode } from '@waves/waves-crypto'

import config from '../../../config'

const DAPP_ADDRESS = config.dAppAddress

const dataListToObj = (list) => {
    const rv = {}
    for (let i = 0; i < list.length; i += 1) rv[list[i].key] = list[i]
    return rv
}

export const asyncFilter = async (arr, fn) => {
    const results = await Promise.all(arr.map(fn))
    return arr.filter((_v, index) => results[index])
}

export const getDataByKey = (key) => {
    let val = null
    if (window.dAppData && window.dAppData[key]) {
        switch (window.dAppData[key].type) {
        case 'integer':
            val = parseInt(window.dAppData[key].value, 10)
            break

        case 'boolean':
            val = Boolean(window.dAppData[key].value)
            break

        default:
            val = window.dAppData[key].value
            break
        }
    }
    return val
}

export const shortAddress = addr => `${addr?.substr(0, 6)}...${addr?.substr(addr?.length - 5, 4)}`

export const formatDate = (date, option = { locales: 'en-IN' }) => date.toLocaleDateString(option.locales)

export const colorStatus = status => (
    status === 'approval' ? 'dark'
        : status === 'rejected' ? 'danger'
            : status === 'accepted' ? 'success'
                : status === 'active' ? 'success'
                    : status === 'used' ? 'secondary'
                        : status === 'burned' ? 'dark'
                            : status === 'expired' ? 'warning'
                                : 'primary')

export const getSupplierData = (address) => {
    let supplier = null
    try {
        supplier = JSON.parse(getDataByKey(`${address}_account`))
    } catch (error) {
        console.warn(error.message)
    }
    return supplier
}

export const formatNumber = (amt, option = { locales: 'en-IN', decimals: 8 }) => {
    const { locales, decimals } = option
    const dc = 10 ** decimals
    return new Intl.NumberFormat(locales, {
        maximumSignificantDigits: decimals + 6,
    }).format(amt / dc)
}

export const getVoting = (item, user) => {
    const voteRound = getDataByKey(`${item.id}_voteround`) || 0
    const voteKey = `vote${item.id}[${voteRound}]`
    const hasPurchased = user && getDataByKey(`${user}_${item.id}_purchased`)

    const voting = {
        round: voteRound,
        status: getDataByKey(`${voteKey}_status`) || 'voting',
        commit: hasPurchased ? getDataByKey(`${voteKey}_${user}_commit`) : null,
        reveal: hasPurchased ? getDataByKey(`${voteKey}_${user}_reveal`) : null,
    }

    return {
        ...voting,
        canCommit: hasPurchased && !voting?.commit && voting?.status === 'voting',
        canReveal: voting?.commit && !voting?.reveal && voting?.status === 'reveal',
    }
}

const getSupplierItemIds = address => async (data = []) => {
    const ids = []
    if (typeof data === 'object') {
        Object.keys(data).forEach((key) => {
            const m = key.match(/^(item_[^_]+)_owner$/)
            if (m && m.length === 2 && data[key].value === address) {
                ids.push(m[1])
            }
        })
    }
    return ids
}

const getSupplierPurchaseIds = address => async (data = []) => {
    const ids = []
    if (typeof data === 'object') {
        Object.keys(data).forEach((key) => {
            const m = key.match(/^(purchase_[^_]+)_supplier$/)
            if (m && m.length === 2 && data[key].value === address) {
                ids.push(m[1])
            }
        })
    }
    return ids
}

const getUserPurchaseIds = address => async (data = []) => {
    const ids = []
    if (typeof data === 'object') {
        Object.keys(data).forEach((key) => {
            const m = key.match(/^(purchase_[^_]+)_user$/)
            if (m && m.length === 2 && data[key].value === address) {
                ids.push(m[1])
            }
        })
    }
    return ids
}

const getItemIds = async (data = []) => {
    const ids = []
    if (typeof data === 'object') {
        Object.keys(data).forEach((key) => {
            const m = key.match(/^(item_[^_]+)_owner$/)
            if (m && m.length === 2) {
                ids.push(m[1])
            }
        })
    }
    return ids
}

const prepareItems = async (fnGetIds, data = null) => {
    const list = []
    data ??= window.dAppData
    if (data) {
        const ids = await fnGetIds(data)
        ids.forEach((id) => {
            let item = { id, couponTerm: 'WAVES' }
            Object.keys(data).forEach((key) => {
                if (key.startsWith(id)) {
                    if (key === `${id}_title`) {
                        item.title = data[key].value
                    } else if (key === `${id}_price`) {
                        item.couponPrice = parseInt(data[key].value, 10)
                    } else if (key === `${id}_featured`) {
                        item.isFeatured = Boolean(data[key].value)
                    } else if (key === `${id}_expiredate`) {
                        const d = new Date(parseInt(data[key].value, 10))
                        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
                        const me = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
                        const de = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
                        item.expirationDate = `${ye}-${me}-${de}`
                    } else if (key === `${id}_data`) {
                        const itemData = JSON.parse(data[key].value)
                        itemData.image = itemData.image ? itemData.image : 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'
                        itemData.newPrice = parseInt(itemData.newPrice, 10)
                        itemData.oldPrice = parseInt(itemData.oldPrice, 10)
                        itemData.discount = itemData.oldPrice > 0 ? parseInt(100 - (itemData.newPrice * 100 / itemData.oldPrice), 10) : 0
                        item = { ...itemData, ...item }
                    }
                }
            })
            list.push(item)
        })
    }
    return Promise.all(list.map(async (e) => {
        e.isExpired = e.expirationDate ? Date.parse(e.expirationDate) <= Date.now() : false
        return e
    }))
}

const preparePurchases = async (fnGetIds) => {
    const list = []
    const data = window.dAppData
    if (data) {
        const ids = await fnGetIds(data)
        ids.forEach((id) => {
            const el = { id, voting: {} }
            Object.keys(data).forEach((key) => {
                if (key.startsWith(id)) {
                    if (key === `${id}_status`) {
                        el.status = data[key].value
                    } else if (key === `${id}_item`) {
                        el.item = data[key].value
                    } else if (key === `${id}_supplier`) {
                        el.supplier = data[key].value
                        el.supplierData = getSupplierData(el.supplier)
                    } else if (key === `${id}_user`) {
                        el.user = data[key].value
                    } else if (key === `${id}_assetId`) {
                        el.assetId = data[key].value
                    } else if (key === `${id}_fundpaid`) {
                        el.isFundPaid = Boolean(data[key].value)
                    } else if (key === `${id}_amount`) {
                        el.amount = parseInt(data[key].value, 10)
                    } else if (key === `${id}_timestamp`) {
                        el.timestamp = parseInt(data[key].value, 10)
                    }
                }
            })
            list.push(el)
        })
    }
    return Promise.all(list.map(async (e) => {
        // set item
        e.item = await getItemByKey(e.item)

        // set default coupon status
        e.couponStatus = 'active'

        // is expired
        e.isExpired = e.item?.isExpired ?? false
        e.couponStatus = e.isExpired ? 'expired' : e.couponStatus

        // is Burned
        if (e.assetId) {
            const url = `https://api-testnet.wavesplatform.com/v0/assets/${e.assetId}`
            const r = await fetch(url)
            const body = r.ok && await r.json()
            e.isBurned = r.ok && body.quantity === 0
            e.couponStatus = e.isBurned ? 'burned' : e.couponStatus
        }

        e.isOwned = false
        return e
    }))
}

export const fetchItems = async () => {
    if (window.dAppData) {
        return await prepareItems(getItemIds)
    }
    return await apiFetchItems()
}

const apiFetchItems = async () => {
    const res = await fetch(`https://nodes-testnet.wavesnodes.com/addresses/data/${DAPP_ADDRESS}?matches=item_.%2A`)
    const data = res.ok ? await res.json() : []
    return await prepareItems(getItemIds, dataListToObj(data))
}

export const fetchUserPurchases = async (address) => {
    let list = await preparePurchases(getUserPurchaseIds(address))
    list = await Promise.all(list.map(async (e) => {
        const { assetId } = e
        if (typeof assetId === 'string') {
            let url = null; let r = null; let body = null

            // is owned by user
            if (!e.isBurned) {
                url = `https://nodes-testnet.wavesnodes.com/assets/balance/${address}/${assetId}`
                r = await fetch(url)
                body = r.ok && await r.json()
                e.isOwned = r.ok && body.balance > 0

                // status is active if owned
                e.couponStatus = e.isOwned && !e.isExpired ? 'active' : e.couponStatus
            }

            // is Used
            url = `https://api-testnet.wavesplatform.com/v0/transactions/transfer?sender=${e.user}&assetId=${assetId}&limit=1`
            r = await fetch(url)
            body = r.ok && await r.json()
            e.isUsed = r.ok && body.data.length > 0
            e.isOwned = e.isOwned && !e.isUsed

            // status is use if used
            e.couponStatus = e.isUsed ? 'used' : e.couponStatus
        }
        return e
    }))

    return list
}

export const fetchUserCoupons = async (address) => {
    let list = await fetchUserPurchases(address)
    list = await Promise.all(list.map(async (e) => {
        if (!e.isExpired) {
            const { item, user } = e
            e.voting = getVoting(item, user)
        }
        return e
    }))
    return list.filter(e => typeof e.assetId === 'string')
}

export const fetchUserActiveCoupons = async (address) => {
    const list = await fetchUserCoupons(address)
    return list.filter(e => e.isOwned && !e.isExpired)
}

export const fetchUserUsedCoupons = async (address) => {
    const list = await fetchUserCoupons(address)
    return list.filter(e => e.isUsed)
}

export const fetchUserExpiredCoupons = async (address) => {
    const list = await fetchUserCoupons(address)
    return list.filter(e => e.isOwned && e.isExpired)
}

export const fetchSupplierItems = async address =>
    await prepareItems(getSupplierItemIds(address))

export const fetchSupplierPurchases = async (address) => {
    let list = await preparePurchases(getSupplierPurchaseIds(address))
    list = await Promise.all(list.map(async (e) => {
        const { assetId } = e
        if (assetId) {
            let url = null; let r = null; let body = null

            // is Received
            url = `https://api-testnet.wavesplatform.com/v0/transactions/transfer?recipient=${e.supplier}&assetId=${assetId}&limit=1`
            r = await fetch(url)
            body = r.ok && await r.json()
            e.isReceived = r.ok && body.data.length > 0
            e.couponStatus = e.isReceived ? 'used' : e.couponStatus

            // is Owned
            if (e.isReceived && !e.isBurned) {
                url = `https://nodes-testnet.wavesnodes.com/assets/balance/${address}/${assetId}`
                r = await fetch(url)
                body = r.ok && await r.json()
                e.isOwned = r.ok && body.balance > 0
            }

            e.couponStatus = e.isFundPaid ? 'paid' : e.couponStatus
        }

        return e
    }))

    return list
}
export const fetchSupplierCoupons = async (address) => {
    const list = await fetchSupplierPurchases(address)
    return list.filter(e => typeof e.assetId === 'string')
}

export const fetchSupplierActiveCoupons = async (address) => {
    const list = await fetchSupplierCoupons(address)
    return list.filter(e => !e.isFundPaid && !e.isBurned)
}

export const fetchSupplierReceivedCoupons = async (address) => {
    const list = await fetchSupplierActiveCoupons(address)
    return list.filter(e => e.isOwned)
}

export const fetchSupplierAvailableCoupons = async (address) => {
    const list = await fetchSupplierCoupons(address)
    return list.filter(e => !e.isFundPaid).filter(e => (
        e.isExpired || e.isBurned || e.isOwned
    ))
}

export const fetchSupplierAvailableFunds = async (address) => {
    const list = await fetchSupplierAvailableCoupons(address)
    return list.reduce((a, b) => a + b.amount, 0)
}

export const getItemByKey = async (key) => {
    const items = await prepareItems(async () => [key])
    return items.length > 0 ? items[0] : null
}

export const getPurchaseByKey = async (key) => {
    const list = await preparePurchases(async () => [key])
    return list.length > 0 ? list[0] : null
}

export const getSupplierBalance = async (address) => {
    const data = window.dAppData || []
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
        if (key === `${address}_balance`) {
            return parseInt(data[key].value, 10)
        }
    }
    return 0
}

export const getSupplierAvailableBalance = async (address) => {
    const data = window.dAppData || []
    // eslint-disable-next-line no-restricted-syntax
    for (const key in data) {
        if (key === `${address}_available`) {
            return parseInt(data[key].value, 10)
        }
    }
    return 0
}

export const getSupplierApprovalCounter = async (address) => {
    const list = await fetchSupplierPurchases(address)
    return list.filter(e => e.status === 'approval').length
}

export const hashVote = (item, vote, salt) => {
    const value = `${item}${vote}${salt}`
    const bytes = new TextEncoder().encode(value)
    return base58encode(sha256(bytes))
}
