/* eslint-disable react/no-unescaped-entities */
import React from 'react'

import { Menu, MyCoupons, MyPurchases } from './components'
import UsedCoupons from './components/UsedCoupons'

import { connect } from '../../../libs/dApp'
import { Box } from '../../shared'

const PageCoupons = ({
    account, activeUrl, setActiveUrl,
}) => (
        <>
            {account.isConnected ? (
                <>
                    <Menu activeUrl={activeUrl} setActiveUrl={setActiveUrl} />
                    {activeUrl.match(new RegExp('.*/?(#my[^/]*|#my/coupons.*)$'))
                        ? (
                            <>
                            <Box className="alert alert-light alert-dismissible fade show text-center" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
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
                            </Box>
                            <MyCoupons account={account} setActiveUrl={setActiveUrl} />
                            </>
                        ) : ''
                    }

                    {activeUrl.match(new RegExp('.*/?#my/used.*$'))
                        ? (
                            <>
                            <Box className="alert alert-light alert-dismissible fade show text-center" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                    Find here all used coupons
                                <br />
                            </Box>
                            <UsedCoupons account={account} setActiveUrl={setActiveUrl} />
                            </>
                        ) : ''
                    }

                    {activeUrl.match(new RegExp('.*/?#my/purchases.*$'))
                        ? (
                            <>
                            <Box className="alert alert-light alert-dismissible fade show text-center" role="alert">
                                <button type="button" className="close" data-dismiss="alert" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                                    Find here all your purchases and the supplier approval status
                                <br />
                                <small>(Waiting approval, Rejected or Accepted)</small>
                            </Box>
                            <MyPurchases account={account} setActiveUrl={setActiveUrl} />
                            </>
                        ) : ''
                    }

                </>
            ) : (
                <>
                    <Box className="alert alert-warning text-center">
                        <p>To see your coupons and use them, please login</p>
                        <p><button className="btn btn-primary" type="button" onClick={connect}>Login</button></p>
                    </Box>

                </>
            )}
        </>
)

export default PageCoupons
