/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { CouponsList } from '../../../../containers'
import { DATA, fetchSupplierAvailableCoupons, subscribe } from '../../../../libs/dApp'
import { Loading } from '../../../shared'

function WithdrawFunds({ account, setActiveUrl }) {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState([])

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                // purchases to approve
                const { address } = account
                const list = await fetchSupplierAvailableCoupons(address)
                const availableList = list.sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases ] :', `${availableList.length} available coupons loaded`)

                updateItems(availableList)
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
                items={items}
                isManager
                mode="withdraw"
                setActiveUrl={setActiveUrl}
                hideEmptyListMessage={loadingData}
            />
        </>
    )
}

export default WithdrawFunds
