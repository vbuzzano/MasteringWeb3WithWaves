/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import {
    acceptPurchase,
    DATA, fetchData, fetchSupplierPurchases, rejectPurchase, subscribe,
} from '../../../../libs/dApp'

function ApprovePurchases({ account, activeUrl, setActiveUrl }) {
    const [loading, setLoading] = useState(0)
    const [items, updateItems] = useState([])

    // eslint-disable-next-line no-nested-ternary
    // const statusOrder = s => (s === 'approval' ? 1 : s === 'accepted' ? 2 : 3)
    const filter = s => s.status === 'approval'

    const refreshItems = async () => {
        let list = []
        try {
            list = await fetchSupplierPurchases(account.address)
            // list = list.sort((a, b) => statusOrder(a.status) > statusOrder(b.status))
            list = list.filter(filter)
            console.debug('[ 🔄 Purchases ] :', `${list.length} purchases to approve loaded`)
            updateItems(list)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(() => subscribe(DATA, refreshItems), [account])

    return (
        <>
            <Purchases
                isManage
                loading={loading}
                purchases={items}
                setActiveUrl={setActiveUrl}
                onAccept={async (purchase) => {
                    setLoading(true)
                    try {
                        await acceptPurchase(purchase)
                        await fetchData()
                    } catch (error) {
                        console.error(error)
                    } finally {
                        setLoading(false)
                    }
                    setLoading(false)
                }}
                onReject={async (purchase) => {
                    setLoading(true)
                    try {
                        await rejectPurchase(purchase)
                        await fetchData()
                    } catch (error) {
                        console.error(error)
                    } finally {
                        setLoading(false)
                    }
                }}
            />
        </>
    )
}

export default ApprovePurchases
