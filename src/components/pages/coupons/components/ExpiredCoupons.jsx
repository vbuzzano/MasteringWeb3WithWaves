import React, { useEffect, useState } from 'react'

import { CouponsList } from '../../../../containers'
import {
    DATA, fetchUserExpiredCoupons, subscribe,
} from '../../../../libs/dApp'
import { Loading } from '../../../shared'

const ExpiredCoupons = ({ account, setActiveUrl }) => {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState(false)
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                const list = await fetchUserExpiredCoupons(address)
                console.debug('[ 🔄 Expired Coupons ] :', `${list.length} coupons loaded`)
                updateItems(list)
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
            <CouponsList
                setActiveUrl={setActiveUrl}
                items={items}
                mode="history"
                hideEmptyListMessage={loadingData}
            />
        </>

    )
}

export default ExpiredCoupons

