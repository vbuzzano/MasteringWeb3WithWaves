/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Coupons } from '../../../../containers'
import {
    DATA, fetchSupplierItems, subscribe,
} from '../../../../libs/dApp'
import { Flex, Loading } from '../../../shared'

function Manager({ account, setActiveUrl }) {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState([])
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            let list = []
            setLoadingData(true)
            try {
                list = await fetchSupplierItems(address)
                console.debug('[ 🔄 Manager ] :', `${list.length} items loaded`)
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
                px={{
                    0: '20px',
                    lg: '39px',
                    xl: '20px',
                }}
                flexWrap="wrap"
            >
                <Coupons
                    isManager
                    mode="manage"
                    setActiveUrl={setActiveUrl}
                    items={items}
                    hideEmptyListMessage={loadingData}
                />
            </Flex>
        </>
    )
}

export default Manager
