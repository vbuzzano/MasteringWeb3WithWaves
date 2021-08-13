/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import {
    acceptPurchase, DATA, fetchSupplierPurchases, rejectPurchase, subscribe,
} from '../../../../libs/dApp'

function PurchasesApprove({ account, setActiveUrl }) {
    const [loading, setLoading] = useState(false)
    const [purchases, updatePurchases] = useState([])

    useEffect(() => {
        async function refreshData() {
            try {
                // purchases to approve
                const { address } = account
                const list = await fetchSupplierPurchases(address)
                const approveList = list.filter(s => s.status === 'approval').sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases ] :', `${approveList.length} purchases to approve loaded`)
                updatePurchases(approveList)
            } catch (error) {
                console.error(error)
            }
        }
        return subscribe(DATA, refreshData)
    }, [])

    return (
        <>
            <Purchases
                isManage="approval"
                loading={loading}
                purchases={purchases}
                setActiveUrl={setActiveUrl}
                onAccept={async (purchase) => {
                    setLoading(true)
                    try {
                        await acceptPurchase(purchase)
                    } catch (error) {
                        alert(error.message)
                        console.error(error)
                    } finally {
                        setLoading(false)
                    }
                }}
                onReject={async (purchase) => {
                    setLoading(true)
                    try {
                        await rejectPurchase(purchase)
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

export default PurchasesApprove
