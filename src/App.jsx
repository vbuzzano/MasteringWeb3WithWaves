/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
// import { set } from 'ramda'
/*
import {
    Dialog, Result, Form, FormSupplierRegister,
} from './components/modal'

 import {
    fetchItems, registerSupplier, addItem, updateItem, removeItem,
    getDataByKey, fetchSupplierItems, fetchUserPurchases, fetchSupplierPurchases,
    purchaseCoupon, rejectPurchase, acceptPurchase, sendCouponToSupplier,
    getSupplierBalance, getSupplierAvailableBalance, burnCoupon, withdrawAvailable,
    fetchSupplierReceivedCoupons, fetchUserActiveCoupons,
} from './api'
*/
// import { asyncFilter } from './api/helper'
// import PageSupplier from './components/pages/manager'
import { Footer, Header } from './containers'
import {
    subscribe, ACCOUNT, DEFAULT_ACCOUNT,
} from './libs/dApp'
import { PageMarket, PageCoupons, PageSupplier } from './components/pages'

const App = () => {
    const [activeUrl, setActiveUrl] = useState('')
    const [account, setAccount] = useState({ ...DEFAULT_ACCOUNT, loading: true })

    // subscribe to account change
    useEffect(() => {
        const onAccountChange = async (acct) => {
            console.debug('[ 🔄 Account ] : account change')
            setAccount(acct)
        }
        return subscribe(ACCOUNT, onAccountChange)
    }, [])

    return (
        <>
        {account.loading}
            <Header
                account={account}
                activeUrl={activeUrl}
                setActiveUrl={setActiveUrl}
                // onAccountChange={fetchData}
                // onSupplierRegister={onSupplierRegister}
                // onCreateCoupon={onFormOpen}
                // filterActive={filterActive}
                // onChangeFilterState={changeFilterState}
            />
            <div className="container-fluid mt-md-3">
                { activeUrl?.indexOf('#featured') >= 0
                    ? (
                        <PageMarket
                            activeUrl={activeUrl}
                            setActiveUrl={setActiveUrl}
                            filter={e => e.isFeatured && !e.isExpired}
                        />
                    ) : '' }

                { activeUrl?.indexOf('#delisted') >= 0
                    ? (
                        <PageMarket
                            activeUrl={activeUrl}
                            setActiveUrl={setActiveUrl}
                            filter={e => !e.isFeatured && !e.isExpired}
                        />
                    ) : '' }

                { activeUrl?.indexOf('#expired') >= 0
                    ? (
                        <PageMarket
                            activeUrl={activeUrl}
                            setActiveUrl={setActiveUrl}
                            filter={e => e.isExpired}
                        />
                    ) : '' }

                { activeUrl?.indexOf('#market') >= 0
                    ? (
                        <PageMarket
                            activeUrl={activeUrl}
                            setActiveUrl={setActiveUrl}
                        />
                    ) : '' }

                { activeUrl?.indexOf('#my') >= 0
                    ? (
                        <PageCoupons
                            account={account}
                            activeUrl={activeUrl}
                            setActiveUrl={setActiveUrl}
                        />
                    ) : '' }

                { activeUrl?.indexOf('#supplier') >= 0
                    ? (
                        <PageSupplier
                            account={account}
                            activeUrl={activeUrl}
                            setActiveUrl={setActiveUrl}
                        />
                    ) : '' }
            </div>
            <Footer account={account} setActiveUrl={setActiveUrl} />
        </>
    )
}

export default hot(App)
