/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import {
    Menu, BalancePanel, Register, PurchasesApprove, PurchasesHistory, WithdrawFunds,
} from './components'
import Manager from './components/Manager'

import { Box } from '../../shared'
import { connect } from '../../../libs/dApp'
import BTCreateCoupon from '../../custom/btCreateCoupon'

const PageSupplier = ({
    account, activeUrl, setActiveUrl,
}) => (
        <>
            {account.isSupplier && activeUrl.indexOf('#supplier/register') === -1 ? (
                <>
                <BalancePanel account={account} />

                <div className="alert alert-dark text-center">
                    <BTCreateCoupon setActiveUrl={setActiveUrl} />
                </div>

                <Menu
                    activeUrl={activeUrl}
                    setActiveUrl={setActiveUrl}
                    approvalCounter={account?.supplier?.approvalCounter}
                />

                { account.isConnected ? (
                    <>
                    {activeUrl.match(new RegExp('.*/?(#supplier[^/]*|#supplier/manage.*)$')) ? (
                        <>
                        <Box className="alert alert-light alert-dismissible fade show text-center" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
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

                    {activeUrl.match(new RegExp('.*/?#supplier/history.*$')) ? (
                        <>
                        <PurchasesHistory
                            account={account}
                            setActiveUrl={setActiveUrl}
                        />
                        </>
                    ) : '' }

                    {activeUrl.match(new RegExp('.*/?#supplier/approve.*$')) ? (
                        <>
                        <Box className="alert alert-light alert-dismissible fade show text-center" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                           Find here all the coupons you have sold, and choose for each one
                           if you accept the sale or refuse it
                            <br />
                            <small>
                                <b>
                                click on "Reject" to refuse or "Accept" to accept the sale
                                </b>
                            </small>
                        </Box>
                        <PurchasesApprove
                            account={account}
                            setActiveUrl={setActiveUrl}
                        />
                        </>
                    ) : '' }

                    {activeUrl.match(new RegExp('.*/?#supplier/withdraw.*$')) ? (
                        <>
                        <Box className="alert alert-light alert-dismissible fade show text-center" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            Withdraw available funds for expired/burned coupons.
                            <br />
                            <small>
                                <b>
                                click on "Withdraw Funds" for any coupon to received funds
                                </b>
                            </small>
                        </Box>
                        <WithdrawFunds
                            account={account}
                            setActiveUrl={setActiveUrl}
                        />
                        </>
                    ) : '' }

                    {activeUrl.match(new RegExp('.*/?#supplier/burn.*$')) ? (
                        <>
                        <Box className="alert alert-light alert-dismissible fade show text-center" role="alert">
                            <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                            Find here all the coupons you received in return from buyers,
                            and burn them to release funds.
                            <br />
                            <small>
                                <b>
                                click "Burn" button on any coupon burn it and release funds.
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

export default PageSupplier

