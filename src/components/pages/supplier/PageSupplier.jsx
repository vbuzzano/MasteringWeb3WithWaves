/* eslint-disable react/no-unescaped-entities */
import { accountData } from '@waves/waves-transactions/dist/nodeInteraction'
import React, { useEffect } from 'react'

import {
    Menu, BalancePanel, Register, ApprovePurchases,
} from './components'
import Manager from './components/Manager'

import { FormSupplierRegister, Result } from '../../modal'
import { Box, Flex, Modal } from '../../shared'
import { connect } from '../../../libs/dApp'

// import { getSupplierAvailableBalance, getSupplierBalance } from '../../../api/helper'
// import dApp from '../../../libs/dApp'

const PageSupplier = ({
    account, activeUrl, setActiveUrl,
}) => {
    useEffect(() => {
    }, [account])

    return (
        <>
            {account.isSupplier ? (
                <>
                <Menu activeUrl={activeUrl} setActiveUrl={setActiveUrl} />

                { account.isConnected ? (
                    <>
                    {activeUrl.match(new RegExp('.*/?(#supplier[^/]*|#supplier/coupons.*)$')) ? (
                        <>
                        <Box className="alert alert-light text-center">
                            Find here all coupons you have created as supplier..
                            <br />
                            You can add, update and remove them at any time.
                            <br />
                            <small>
                                <b>
                                click on "Add New Coupon" to create a new coupon |
                                click on any coupon and then on "Edit" to update it
                                or "Remove" to remove it from Market
                                </b>
                            </small>
                        </Box>
                        <Manager
                            account={account}
                        />
                        </>
                    ) : '' }

                    {activeUrl.match(new RegExp('.*/?#supplier/purchases.*$')) ? (
                        <>
                        <Box className="alert alert-light text-center">
                           Find here all the coupons you have sold, and choose for each one if you accept the sale or refuse it
                            <br />
                            <small>
                                <b>
                                click on "Reject" to refuse or "Accept" to accept the sale
                                </b>
                            </small>
                        </Box>
                        <ApprovePurchases
                            account={account}
                            setActiveUrl={setActiveUrl}
                        />
                        </>
                    ) : '' }

                    {activeUrl.match(new RegExp('.*/?#supplier/burn.*$')) ? (
                        <>
                        <Box className="alert alert-light text-center">
                            Find here all the coupons you received in return from the buyers,
                            and burn them to recover your balance.
                            <br />
                            <small>
                                <b>
                                click on any coupon and then on "Burn" to burn it
                                </b>
                            </small>
                        </Box>
                        </>
                    ) : '' }
                    </>
                ) : (
                    <div className="alert alert-warning text-center">
                        <p>To use Supplier Manager, please login</p>
                        <p><button className="btn btn-primary" type="button" onClick={connect}>Login</button></p>
                    </div>
                )}
                </>
            ) : ' '}

            <Register account={account} />
        </>
    )
}

export default PageSupplier

