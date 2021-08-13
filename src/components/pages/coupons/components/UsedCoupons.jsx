import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import {
    DATA, fetchUserUsedCoupons, subscribe,
} from '../../../../libs/dApp'

const UsedCoupons = ({ account, setActiveUrl }) => {
    const [purchases, updatePurchases] = useState(false)
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            try {
                const list = await fetchUserUsedCoupons(address)
                console.debug('[ 🔄 My Used Coupons ] :', `${list.length} coupons loaded`)
                updatePurchases(list)
            } catch (error) {
                console.error(error)
            }
        }

        return subscribe(DATA, refreshData)
    }, [address])

    return (
        <>
            <Purchases
                setActiveUrl={setActiveUrl}
                purchases={purchases}
            />
        </>

    )
}

export default UsedCoupons

