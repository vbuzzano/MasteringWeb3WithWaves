/* eslint-disable max-len */
/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-alert */
import React, { useState, useEffect } from 'react'

import { Box, Flex } from '../../../shared'
import {
    DATA, fetchSupplierAvailableFunds, formatNumber, getSupplierBalance, subscribe,
} from '../../../../libs/dApp'

const BalancePanel = ({ account }) => {
    const [amount, setAmount] = useState(0)
    const [available, setAvailable] = useState(0)
    const [locked, setLocked] = useState(0)
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            const amt = await getSupplierBalance(address)
            const avl = await fetchSupplierAvailableFunds(address)
            const lck = amt - avl

            setAmount(amt)
            setAvailable(avl)
            setLocked(lck)
            console.debug('[ 🔄 Supplier ] :', `Balance updated (${avl} / ${amt})`)
        }
        return subscribe(DATA, refreshData)
    }, [address])

    return (
        <div className="manager-balance-panel">
            <Flex
                justifyContent="center"
                p={{
                    0: '10px',
                    md: '0px',
                }}
                flexWrap="wrap"
                style={{ marginTop: '15px', marginBottom: '15px' }}
            >
                <Box
                    as="big"
                    className={amount > 0 ? 'badge badge-primary' : 'badge badge-dark'}
                    style={{ margin: '10px', padding: '20px', width: '250px' }}
                >
                    <div>total locked funds</div><h5> { formatNumber(amount) } </h5><div>WAVES</div>
                </Box>
                <Box
                    as="big"
                    className="badge badge-dark"
                    style={{ margin: '10px', padding: '20px', width: '250px' }}
                >
                    <div>locked funds</div><h5> { formatNumber(locked) } </h5><div>WAVES</div>
                </Box>

                <Box
                    as="big"
                    className={available > 0 ? 'badge badge-success' : 'badge badge-secondary'}
                    style={{ margin: '10px', padding: '20px', width: '250px' }}
                >
                    <div>available funds</div><h5> { formatNumber(available) } </h5><div>WAVES</div>
                </Box>
            </Flex>
        </div>
    )
}
export default BalancePanel
