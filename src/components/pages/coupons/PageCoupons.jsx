/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Menu, MyCoupons, MyPurchases } from './components'

import { Flex } from '../../shared'
import { subscribe, DATA } from '../../../libs/dApp'
import { fetchUserPurchases, fetchUserActiveCoupons } from '../../../api'

const PageCoupons = ({
    account, activeUrl, setActiveUrl,
}) => {
    const [loading, setLoading] = useState(false)
    const [coupons, updateCoupons] = useState([])
    const [purchases, updatePurchases] = useState([])

    const refreshCoupons = async () => {
        let list = []
        setLoading(true)
        try {
            list = await fetchUserActiveCoupons(account.address)
            console.debug('[ 🔄 Coupons ] :', `${list.length} coupons loaded`)
            updateCoupons(list)

            list = await fetchUserPurchases(account.address)
            console.debug('[ 🔄 Coupons ] :', `${list.length} purchased loaded`)
            updatePurchases(list)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => subscribe(DATA, refreshCoupons), [])

    return (
        <>
            <Menu activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
            {activeUrl.match(new RegExp('.*/?(#my[^/]*|#my/coupons.*)$'))
                ? (
                    <>
                    <div className="alert alert-light text-center">
                        Find here all your coupons and their validity period.
                        <br />
                        You can use them at any time by transferring them to
                        the respective supplier in order to get your purchase advantage.
                        <br />
                        <small>
                            <b>
                            click on the coupon of your choice,
                            then on "use" to activate the transfer to its supplier
                            </b>
                        </small>
                    </div>
                    <MyCoupons
                        loading={loading}
                        coupons={coupons}
                    />
                    </>
                ) : ''
            }

            {activeUrl.match(new RegExp('.*/?#my/purchases.*$'))
                ? (
                    <>
                    <div className="alert alert-light text-center">
                            Find here all your purchases and the supplier approval status
                        <br />
                        <small>(Waiting approval, Rejected or Accepted)</small>
                    </div>
                    <MyPurchases
                        loading={loading}
                        purchases={purchases}
                    />
                    </>
                ) : ''
            }
        </>
    )
}

export default PageCoupons
