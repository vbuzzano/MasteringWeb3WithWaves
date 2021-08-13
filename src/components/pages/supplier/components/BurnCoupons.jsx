/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import {
    burnCoupon, DATA, fetchSupplierReceivedCoupons, subscribe,
} from '../../../../libs/dApp'

function BurnCoupons({ account, setActiveUrl }) {
    const [loading, setLoading] = useState(false)
    const [purchases, updatePurchases] = useState([])

    useEffect(() => {
        async function refreshData() {
            try {
                // purchases to approve
                const { address } = account
                const list = await fetchSupplierReceivedCoupons(address)
                const receivedList = list.sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases ] :', `${receivedList.length} received coupons loaded`)
                updatePurchases(receivedList)
            } catch (error) {
                console.error(error)
            }
        }
        return subscribe(DATA, refreshData)
    }, [])

    return (
        <>
            <Purchases
                isManage="burn"
                loading={loading}
                purchases={purchases}
                setActiveUrl={setActiveUrl}
                onBurn={async (purchase) => {
                    setLoading(true)
                    try {
                        await burnCoupon(purchase?.assetId)
                    } catch (error) {
                        alert(error.message)
                        console.error(error)
                    } finally {
                        setLoading(false)
                    }
                }}
            />
        </>
    )
}

export default BurnCoupons
