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
        val = window.dAppData[key].value
    }
    return val
}

export const shortAddress = addr => `${addr?.substr(0, 4)}...${addr?.substr(addr?.length - 5, 4)}`

export const formatNumber = (amt, option = { locales: 'en-IN', decimals: 8 }) => {
    const { locales, decimals } = option
    const dc = 10 ** decimals
    return new Intl.NumberFormat(locales, {
        maximumSignificantDigits: decimals + 6,
    }).format(amt / dc)
}

const getSupplierItemIds = address => async (data = []) => {
    const ids = []
    if (typeof data === 'object') {
        Object.keys(data).forEach((key) => {
            const m = key.match(/^item_([^_]+)_owner$/)
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
            const m = key.match(/^purchase_([^_]+)_supplier$/)
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
            const m = key.match(/^purchase_([^_]+)_user$/)
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
            const m = key.match(/^item_([^_]+)_owner$/)
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
                if (key.startsWith(`item_${id}`)) {
                    if (key === `item_${id}_title`) {
                        item.title = data[key].value
                    } else if (key === `item_${id}_price`) {
                        item.couponPrice = parseInt(data[key].value, 10)
                    } else if (key === `item_${id}_expiredate`) {
                        const d = new Date(parseInt(data[key].value, 10))
                        const ye = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(d)
                        const me = new Intl.DateTimeFormat('en', { month: '2-digit' }).format(d)
                        const de = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(d)
                        item.expirationDate = `${ye}-${me}-${de}`
                    } else if (key === `item_${id}_data`) {
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
            const el = { id }
            Object.keys(data).forEach((key) => {
                if (key.startsWith(`purchase_${id}`)) {
                    if (key === `purchase_${id}_status`) {
                        el.status = data[key].value
                    } else if (key === `purchase_${id}_item`) {
                        el.item = data[key].value
                    } else if (key === `purchase_${id}_supplier`) {
                        el.supplier = data[key].value
                    } else if (key === `purchase_${id}_user`) {
                        el.user = data[key].value
                    } else if (key === `purchase_${id}_assetId`) {
                        el.assetId = data[key].value
                    } else if (key === `purchase_${id}_fundpaid`) {
                        el.isFundPaid = Boolean(data[key].value)
                    } else if (key === `purchase_${id}_amount`) {
                        el.amount = parseInt(data[key].value, 10)
                    } else if (key === `purchase_${id}_timestamp`) {
                        el.timestamp = parseInt(data[key].value, 10)
                    }
                }
            })
            list.push(el)
        })
    }
    return Promise.all(list.map(async (e) => {
        e.item = await getItemByKey(e.item)
        e.isExpired = e.item?.isExpired ?? true
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

export const fetchUserPurchases = async address =>
    await preparePurchases(getUserPurchaseIds(address))

export const fetchUserCoupons = async (address) => {
    let list = await fetchUserPurchases(address)
    list = list.filter(e => e.status === 'accepted')
    list = await Promise.all(list.map(async (e) => {
        const { assetId } = e
        if (!assetId) return false
        let url = null; let r = null; let body = null
        // is Active
        url = `https://nodes-testnet.wavesnodes.com/assets/balance/${address}/${assetId}`
        r = await fetch(url)
        body = r.ok && await r.json()
        const isOwned = r.ok && body.balance > 0

        // is Used
        url = `https://api-testnet.wavesplatform.com/v0/transactions/transfer?sender=${e.user}&assetId=${assetId}&limit=1`
        r = await fetch(url)
        body = r.ok && await r.json()
        const isUsed = r.ok && body.data.length > 0

        e.isOwned = isOwned && !isUsed
        e.isUsed = isUsed
        if (e.isUsed) e.status = 'used'

        return e
    }))
    return list
}

export const fetchUserActiveCoupons = async (address) => {
    const list = await fetchUserCoupons(address)
    return list.filter(e => e.isOwned)
/*    const activeList = await asyncFilter(list, async (e) => {
        const { assetId } = e
        if (!assetId) return false
        const url = `https://nodes-testnet.wavesnodes.com/assets/balance/${address}/${assetId}`
        const r = await fetch(url)
        const body = r.ok && await r.json()
        return r.ok && body.balance > 0
    })
*/
}

export const fetchUserUsedCoupons = async (address) => {
    const list = await fetchUserCoupons(address)
    return list.filter(e => e.isUsed)
}

export const fetchSupplierItems = async address =>
    await prepareItems(getSupplierItemIds(address))

export const fetchSupplierPurchases = async (address) => {
    const list = await preparePurchases(getSupplierPurchaseIds(address))
    return list
}
export const fetchSupplierCoupons = async (address) => {
    let list = await fetchSupplierPurchases(address)
    list = list.filter(e => e.status === 'accepted')
    list = await Promise.all(list.map(async (e) => {
        const { assetId } = e
        if (!assetId) return false
        let url = null; let r = null; let body = null
        // is Received
        url = `https://api-testnet.wavesplatform.com/v0/transactions/transfer?recipient=${e.supplier}&assetId=${assetId}&limit=1`
        r = await fetch(url)
        body = r.ok && await r.json()
        const isReceived = r.ok && body.data.length > 0

        // is Owned
        url = `https://nodes-testnet.wavesnodes.com/assets/balance/${address}/${assetId}`
        r = await fetch(url)
        body = r.ok && await r.json()
        const isOwned = r.ok && body.balance > 0
        e.isOwned = isOwned && isReceived
        e.isBurned = isReceived && !isOwned
        if (e.isOwned) e.status = 'used'
        if (e.isBurned) e.status = 'burned'

        return e
    }))
    return list
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
    let list = await fetchSupplierCoupons(address)
    list = list.filter(e => !e.isFundPaid)
    list.map(e => console.info(e.id, e.isExpired, e.isBurned, e.isOwned))
    return list.filter(e => (
        e.isExpired || e.isBurned || e.isOwned
    ))
}

export const fetchSupplierAvailableFunds = async (address) => {
    const list = await fetchSupplierAvailableCoupons(address)
    return list.reduce((a, b) => a + b.amount, 0)
}

export const getItemByKey = async (key) => {
    const items = await prepareItems(async () => [key.startsWith('item_') ? key.substr(5) : key])
    return items.length > 0 ? items[0] : null
}

export const getPurchaseByKey = async (key) => {
    const list = await preparePurchases(async () => [key.startsWith('purchase_') ? key.substr(9) : key])
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
