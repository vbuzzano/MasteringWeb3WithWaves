/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import { DATA, fetchUserPurchases, subscribe } from '../../../../libs/dApp'

const MyPurchases = ({ account, setActiveUrl }) => {
    const [purchases, updatePurchases] = useState([])
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            try {
                // purchases history
                const list = await fetchUserPurchases(address)
                const historyList = list.sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases History ] :', `${historyList.length} purchases loaded`)
                updatePurchases(historyList)
            } catch (error) {
                console.error(error)
            }
        }
        return subscribe(DATA, refreshData)
    }, [address])

    return (
        <>
            <div>
                <Purchases
                    setActiveUrl={setActiveUrl}
                    purchases={purchases}
                />
            </div>
        </>

    )
}

export default MyPurchases
