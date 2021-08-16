/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import {
    DATA, fetchSupplierPurchases, subscribe,
} from '../../../../libs/dApp'
import { Loading } from '../../../shared'

function PurchasesHistory({ account, setActiveUrl }) {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState([])

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                // purchases history
                const { address } = account
                const list = await fetchSupplierPurchases(address)
                const historyList = list.filter(s => s.status !== 'approval').sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases History ] :', `${historyList.length} purchases loaded`)
                updateItems(historyList)
            } catch (error) {
                console.error(error)
            } finally {
                setLoadingData(false)
            }
        }
        return subscribe(DATA, refreshData)
    }, [])

    return (
        <>
            {loadingData ? (<Loading />) : null }
            <Purchases
                isManager
                mode="history"
                items={items}
                setActiveUrl={setActiveUrl}
                hideEmptyListMessage={loadingData}
            />
        </>
    )
}

export default PurchasesHistory
