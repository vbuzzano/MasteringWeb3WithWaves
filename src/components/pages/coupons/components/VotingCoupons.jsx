import React, { useEffect, useState } from 'react'

import { VotingList } from '../../../../containers'
import {
    DATA, fetchUserCoupons, subscribe,
} from '../../../../libs/dApp'
import { Loading } from '../../../shared'

const filter = e => e.voting

const group = (gl, e) => {
    if (!gl[e.item.id]) gl[e.item.id] = []
    gl[e.item.id].push(e)
    return gl
}

const UsedCoupons = ({ account, setActiveUrl }) => {
    const [loadingData, setLoadingData] = useState(true)
    const [items, updateItems] = useState(false)
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            setLoadingData(true)
            try {
                const grouped = (await fetchUserCoupons(address)).filter(filter).reduce(group, {})
                const list = Object.keys(grouped).map((e) => {
                    const p = grouped[e][0]
                    return {
                        voting: p.voting,
                        ...p.item,
                    }
                })
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
            <VotingList
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

