/* eslint-disable jsx-a11y/label-has-associated-control */
import React, { useEffect, useState } from 'react'

import { Flex, Loading } from '../../../shared'
import { Coupons } from '../../../../containers'
import {
    DATA, fetchUserActiveCoupons, subscribe,
} from '../../../../libs/dApp'

const Ac = ({ account, setActiveUrl }) => {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState(false)
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                const list = await fetchUserActiveCoupons(address)
                console.debug('[ 🔄 Active Coupons ] :', `${list.length} coupons loaded`)
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
            <Flex
                justifyContent="center"
                p={{
                    0: '10px',
                    md: '0px',
                }}
                flexWrap="wrap"
            >
                <Coupons
                    items={items}
                    setActiveUrl={setActiveUrl}
                    mode="active"
                    hideEmptyListMessage={loadingData}
                    enableVoting
                />
            </Flex>
        </>

    )
}

export default Ac
