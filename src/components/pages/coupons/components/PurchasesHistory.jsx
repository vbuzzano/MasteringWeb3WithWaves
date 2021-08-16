/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import { DATA, fetchUserPurchases, subscribe } from '../../../../libs/dApp'
import { Loading } from '../../../shared'

const PurchasesHistory = ({ account, setActiveUrl }) => {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState([])
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                // purchases history
                const list = await fetchUserPurchases(address)
                const historyList = list.sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases History ] :', `${historyList.length} purchases loaded`)
                updateItems(historyList)
            } catch (error) {
                console.error(error)
            } finally {
                setLoadingData(false)
            }
        }
        return subscribe(DATA, refreshData)
    }, [address])

    return (
        <>
            {loadingData ? (<Loading />) : null }
            <Purchases
                hideEmptyListMessage={loadingData}
                setActiveUrl={setActiveUrl}
                items={items}
                mode="history"
                enableVoting
            />
        </>

    )
}

export default PurchasesHistory
