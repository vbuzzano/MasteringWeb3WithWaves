/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { CouponsList } from '../../../../containers'
import {
    DATA, fetchSupplierReceivedCoupons, subscribe,
} from '../../../../libs/dApp'
import { Loading } from '../../../shared'

function BurnCoupons({ account, setActiveUrl }) {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState([])

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                // purchases to approve
                const { address } = account
                const list = await fetchSupplierReceivedCoupons(address)
                const receivedList = list.sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases ] :', `${receivedList.length} received coupons loaded`)
                updateItems(receivedList)
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
            <CouponsList
                isManager
                mode="burn"
                items={items}
                setActiveUrl={setActiveUrl}
                hideEmptyListMessage={loadingData}
            />
        </>
    )
}

export default BurnCoupons
