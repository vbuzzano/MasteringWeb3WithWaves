/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable no-alert */
import React from 'react'

import { Box, Flex } from '../../../shared'

const BalancePanel = ({
    amount, available, locked, onWithdraw,
}) => {
    amount ??= 0; available ??= 0; locked ??= 0; onWithdraw ??= () => {}
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
                    className={available > 0 ? 'badge badge-success' : 'badge badge-dark'}
                    style={{ margin: '10px', padding: '20px', width: '250px' }}
                >
                    <div>available balance</div><h5> { available } </h5><div>WAVES</div>
                </Box>
                <Box
                    as="big"
                    className="badge badge-dark"
                    style={{ margin: '10px', padding: '20px', width: '250px' }}
                >
                    <div>locked balance</div><h5> { locked } </h5><div>WAVES</div>
                </Box>
                <Box
                    as="big"
                    className={amount > 0 ? 'badge badge-primary' : 'badge badge-dark'}
                    style={{ margin: '10px', padding: '20px', width: '250px' }}
                >
                    <div>total balance</div><h5> { amount } </h5><div>WAVES</div>
                </Box>
                {available > 0 ? (
                    <Box
                        as="button"
                        className="btn btn-success center"
                        style={{ margin: '10px', padding: '20px', width: '250px' }}
                        type="button"
                        onClick={onWithdraw}
                    >
                                Withdraw Available
                    </Box>
                ) : '' }
            </Flex>
        </div>
    )
}
export default BalancePanel
