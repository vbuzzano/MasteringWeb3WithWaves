/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import {
    DATA, fetchSupplierPurchases, subscribe,
} from '../../../../libs/dApp'

function PurchasesHistory({ account, setActiveUrl }) {
    const [purchases, updatePurchases] = useState([])

    useEffect(() => {
        async function refreshData() {
            try {
                // purchases history
                const { address } = account
                console.log(address)
                const list = await fetchSupplierPurchases(address)
                const historyList = list.filter(s => s.status !== 'approval').sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases History ] :', `${historyList.length} purchases loaded`)
                updatePurchases(historyList)
            } catch (error) {
                console.error(error)
            }
        }
        return subscribe(DATA, refreshData)
    }, [])

    return (
        <>
            <Purchases
                isManage="history"
                purchases={purchases}
                setActiveUrl={setActiveUrl}
            />
        </>
    )
}

export default PurchasesHistory
