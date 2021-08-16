/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Flex, Loading } from '../../shared'
import { Coupons } from '../../../containers'
import {
    subscribe, DATA, fetchItems,
} from '../../../libs/dApp'

const PageMarket = ({ activeUrl, setActiveUrl, filter = e => !e.isExpired }) => {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState([])

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                const list = (await fetchItems()).filter(filter)
                console.debug('[ 🔄 Market ] :', `${list.length} items loaded`)
                updateItems(list)
            } catch (error) {
                console.error(error)
            } finally {
                setLoadingData(false)
            }
        }
        return subscribe(DATA, refreshData)
    }, [activeUrl])

    return (
        <>
            <div className="alert alert-light alert-dismissible fade show text-center small" role="alert">
                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
                Find coupons in the bazaar market, and start saving money.
                <br />
                Thanks to the many discount coupons from our suppliers.
                <br />
                <small>
                    <b>click on the coupon of your choice, then on "Buy" to buy it</b>
                </small>
            </div>
            {loadingData ? (<Loading />) : null }
            <Flex
                justifyContent="center"
                px={{
                    0: '20px',
                    lg: '39px',
                    xl: '20px',
                }}
                flexWrap="wrap"
            >
                <Coupons
                    items={items}
                    setActiveUrl={setActiveUrl}
                    mode="market"
                    hideEmptyListMessage
                    enableVoting
                />
            </Flex>
        </>

    )
}

export default PageMarket
