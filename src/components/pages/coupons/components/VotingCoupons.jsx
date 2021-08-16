import React, { useEffect, useState } from 'react'

import { CouponsList } from '../../../../containers'
import {
    DATA, fetchUserUsedCoupons, subscribe,
} from '../../../../libs/dApp'
import { Loading } from '../../../shared'

const UsedCoupons = ({ account, setActiveUrl }) => {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState(false)
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                const list = await fetchUserUsedCoupons(address)
                console.debug('[ 🔄 Used Coupons ] :', `${list.length} coupons loaded`)
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
                mode="used"
                hideEmptyListMessage={loadingData}
                enableVoting
            />
        </>

    )
}

export default UsedCoupons

