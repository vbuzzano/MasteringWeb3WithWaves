/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Purchases } from '../../../../containers'
import {
    burnCoupon,
    DATA, fetchSupplierAvailableCoupons, subscribe, withdrawFunds,
} from '../../../../libs/dApp'

function WithdrawFunds({ account, setActiveUrl }) {
    const [loading, setLoading] = useState(false)
    const [purchases, updatePurchases] = useState([])

    useEffect(() => {
        async function refreshData() {
            try {
                // purchases to approve
                const { address } = account
                const list = await fetchSupplierAvailableCoupons(address)
                const availableList = list.sort((a, b) => a.timestamp < b.timestamp)
                console.debug('[ 🔄 Purchases ] :', `${availableList.length} available coupons loaded`)

                updatePurchases(availableList)
            } catch (error) {
                console.error(error)
            }
        }
        return subscribe(DATA, refreshData)
    }, [])

    return (
        <>
            <Purchases
                isManage="withdraw"
                loading={loading}
                purchases={purchases}
                setActiveUrl={setActiveUrl}
                onWithdraw={async (purchase) => {
                    setLoading(true)
                    try {
                        if (purchase.isExpired || purchase.isBurned) {
                            await withdrawFunds(purchase)
                        } else if (purchase.isOwned) {
                            await burnCoupon(purchase)
                        }
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

export default WithdrawFunds
