/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react'
import { hot } from 'react-hot-loader/root'
import { set } from 'ramda'

import { Flex, Modal } from './components/shared'
import {
    Coupons, Purchases, Header, Footer,
} from './containers'
import {
    Dialog, Result, Form, FormSupplierRegister,
} from './components/modal'
import { useSupplierRegisterDialogs, useAppDialogs } from './components/service'
import { UserContext } from './context'
import {
    fetchItems, registerSupplier, addItem, updateItem, removeItem,
    getDataByKey, fetchSupplierItems, fetchUserPurchases, fetchSupplierPurchases,
    purchaseCoupon, rejectPurchase, acceptPurchase, sendCouponToSupplier,
    getSupplierBalance, getSupplierAvailableBalance, burnCoupon, withdrawAvailable,
    fetchSupplierReceivedCoupons, fetchUserActiveCoupons,
} from './api'
import { asyncFilter } from './api/helper'
// import PageSupplier from './components/pages/manager'
import {
    fetchData, subscribe, ACCOUNT, DEFAULT_ACCOUNT,
} from './libs/dApp'
import { PageMarket, PageCoupons } from './components/pages'

const App = () => {
    const [activeUrl, setActiveUrl] = useState('')
    const [loading, setLoading] = useState(false)

    const [items, updateItems] = useState([])
    const [account, setAccount] = useState(DEFAULT_ACCOUNT)

    /*

    const {
        manageMode,
        selectedItem,
        editedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
        resultBuy: [resultBuyOpened, onResultBuyOpen, onResultBuyClose],
        form: [formOpened, onFormOpen, onFormClose],
    } = useAppDialogs()

    const {
        resultSR: [resultSROpened, onResultSROpen, onResultSRClose],
        formSR: [formSROpened, onFormSROpen, onFormSRClose],
    } = useSupplierRegisterDialogs()

    const [supplierApprovalCounter, setSupplierApprovalCounter] = useState(0)

    const [supplierLockedBalance, setSupplierLockedBalance] = useState(0)
    const [supplierAvailableBalance, setSupplierAvailableBalance] = useState(0)

    const [userCoupons, updateUserCoupons] = useState([])
    const [supplierItems, updateSupplierItems] = useState([])
    const [supplierReceivedItems, updateSupplierReceivedItems] = useState([])
    const [purchasesUser, updatePurchasesUser] = useState([])
    const [purchasesSupplier, updatePurchasesSupplier] = useState([])
    const [acceptStepsDone, setAcceptStepsDone] = useState([false, false, false])

    const [filterActive, changeFilterState] = useState(false)
    /*
    const onClearAccount = () => {
        updateSupplierItems([])
        updatePurchasesSupplier([])
        updateSupplierReceivedItems([])
        updatePurchasesUser([])
        updateUserCoupons([])
        setSupplierLockedBalance(0)
        setSupplierAvailableBalance(0)
        setSupplierApprovalCounter(0)
        updateAccount({ isConnected: false })
    }
*/
    /*
    const updateSupplier = async (address) => {
        const [amount, available] = await Promise.all([
            getSupplierBalance(address),
            getSupplierAvailableBalance(address),
        ])
        const balance = { amount, available, locked: amount - available }
        setSupplier({ address, balance })
    }

        // eslint-disable-next-line no-nested-ternary
        const statusOrder = s => (s === 'approval' ? 1 : s === 'accepted' ? 2 : 3)

        const purchased = await fetchUserPurchases(acct.address)
        updatePurchasesUser(purchased.sort((a, b) => statusOrder(a.status) > statusOrder(b.status)))

        if (window.dAppData && acct && acct.address) {
            acct.isSupplier = !!getDataByKey(`${acct.address}_account`)
            updateSupplierItems(await fetchSupplierItems(acct.address))

            const balance = await getSupplierBalance(acct.address)
            const available = await getSupplierAvailableBalance(acct.address)
            const locked = balance - available
            setSupplierBalance(Number.parseFloat(balance / 1e8).toFixed(8))
            setSupplierAvailableBalance(Number.parseFloat(available / 1e8).toFixed(8))
            setSupplierLockedBalance(Number.parseFloat(locked / 1e8).toFixed(8))

            let purchasesSupplierList = await fetchSupplierPurchases(acct.address)
            console.log(purchasesSupplierList)
            purchasesSupplierList = await Promise.all(purchasesSupplierList.map(async (e) => {
                const url = `https://nodes-testnet.wavesnodes.com/assets/details/${e.assetId}?full=false`
                let r = await fetch(url)
                if (r.ok) {
                    r = await r.json()
                    e.isBurned = r.quantity === 0
                }
                return e
            }))
            updatePurchasesSupplier(purchasesSupplierList.sort((a, b) => statusOrder(a.status) > statusOrder(b.status)))
            setSupplierApprovalCounter(purchasesSupplierList.filter(e => e.status === 'approval').length)
            const supplierPurchasesAccepted = purchasesSupplierList.filter(e => e.status === 'accepted')
            const newSupplierReceived = await asyncFilter(supplierPurchasesAccepted, async (e) => {
                let r = await fetch(`https://nodes-testnet.wavesnodes.com/assets/balance/${e.supplier}/${e.assetId}`)
                if (r.ok) {
                    r = await r.json()
                    return r.balance > 0
                } return false
            })
            updateSupplierReceivedItems(newSupplierReceived.map((e) => { e.item.canBurn = true; return e }))
        }

        // console.log('onAccountChange:', acct)
        updateAccount(acct)
    }
    const onSupplierRegister = () => {
        onFormSROpen()
    }

    const onAcceptPurchaseStepDone = (step) => {
        acceptStepsDone[step] = true
        setAcceptStepsDone(acceptStepsDone)
        setLoading(true)
    }

    const onAcceptPurchase = async (purchase) => {
        setLoading(true)
        await acceptPurchase(purchase, onAcceptPurchaseStepDone)
        // onAccountChange()
        setLoading(false)
        alert('Coupon Accepted')
    }

    const onRejectPurchase = async (purchase) => {
        setLoading(true)
        await rejectPurchase(purchase)
        // onAccountChange()
        setLoading(false)
        alert('Coupon Refused')
    }
*/
    /*

        //        setLoading(true)
        // onAccountChange()
        updateUserCoupons(await fetchUserActiveCoupons(account.address))

        //        setLoading(false)
    }
*/
    const onAccountChange = async (acct) => {
    //        await dApp.fetchData()

        /**
        if (window.dAppData) {
            acct.isSupplier = !!getDataByKey(`${acct.address}_account`)
            console.debug(`supplier = ${getDataByKey(`${acct.address}_account`)}`)
        }

        if (acct.isSupplier) {
            // updateSupplier(acct.address)
        }
*/
        setAccount(acct)
    }

    // subscribe to account change
    useEffect(() => {
        console.debug('App: subscribe account')
        const unsubscribe = subscribe(ACCOUNT, onAccountChange)
        return () => {
            console.debug('App: unsubscribe account')
            unsubscribe()
        }
    }, [])

    // refresh data
    useEffect(() => {
        console.debug('App: refresh DATA')
        fetchData()
    }, [])

    return (
        <>
            <Header
                account={account}
                activeUrl={activeUrl}
                setActiveUrl={setActiveUrl}
                // supplierApprovalCounter={supplierApprovalCounter}
                // onAccountChange={fetchData}
                // onSupplierRegister={onSupplierRegister}
                // onCreateCoupon={onFormOpen}
                // filterActive={filterActive}
                // onChangeFilterState={changeFilterState}
            />

            { activeUrl?.indexOf('#market') >= 0
                ? (
                    <PageMarket
                        account={account}
                        setActiveUrl={setActiveUrl}
                    />
                )

                : '' }

            { activeUrl?.indexOf('#my') >= 0 && account.isConnected
                ? (
                    <PageCoupons
                        account={account}
                        activeUrl={activeUrl}
                        setActiveUrl={setActiveUrl}
                    />
                )

                : '' }

            <Modal open={loading}>
                <div style={{ height: '100%', marginTop: '100px' }}>
                    <div className="spinner-border text-primary" role="status">
                                        Loading...
                        <span className="sr-only">...</span>
                    </div>
                </div>
            </Modal>
        </>

    /*
          { activeUrl === '#market'
                    ? (
                        <>
                            <div className="alert alert-light text-center">
Find coupons in the bazaar market, and start saving money.
                                <br />
                                {' '}
Thanks to the many discount coupons from our suppliers
                                <br />
                                <small><b>click on the coupon of your choice, then on 'Buy' to buy it</b></small>
                            </div>
                            <Flex
                                justifyContent="center"
                                p={{
                                    0: '10px',
                                    md: '0px',
                                }}
                                flexWrap="wrap"
                            >
                                <Coupons
                                    setActiveUrl={setActiveUrl}
                                    isManageCoupons={false}
                                    onDialogOpen={onDialogOpen}
                                    coupons={filterActive ? userCoupons : items}
                                />
                            </Flex>
                        </>
                    )
                    : '' }

    /*
                <Manager
                    supplier={supplier}
                    activeUrl={activeUrl}
                    setActiveUrl={setActiveUrl}
                />

                {account.address}

                { activeUrl.indexOf('#coupons') >= 0
                    ? (
                        <ul className="nav nav-tabs">
                            <li className="nav-item" onClick={() => setActiveUrl('#coupons/my')}>
                                <a className={activeUrl.indexOf('#coupons/my') >= 0 ? 'nav-link active' : 'nav-link'} href="#coupons/my">My Coupons</a>
                            </li>
                            <li className="nav-item" onClick={() => setActiveUrl('#coupons/purchases')}>
                                <a className={activeUrl.indexOf('#coupons/purchases') >= 0 ? 'nav-link active' : 'nav-link'} href="#coupons/purchases">My Purchases</a>
                            </li>
                        </ul>
                    )
                    : ''
                }

                { activeUrl.indexOf('#coupons/my') >= 0
                    ? (
                        <div>
                            <div className="alert alert-light text-center">
Find here all your coupons and their validity period.
                                <br />
You can use them at any time by transferring them to the respective supplier in order to get your purchase advantage.
                                <br />
                                <small><b>click on the coupon of your choice, then on 'use' to activate the transfer to its supplier</b></small>
                            </div>
                            <Flex
                                justifyContent="center"
                                p={{
                                    0: '10px',
                                    md: '0px',
                                }}
                                flexWrap="wrap"
                            >
                                <Coupons
                                    setActiveUrl={setActiveUrl}
                                    isManageCoupons={false}
                                    onDialogOpen={onDialogOpen}
                                    coupons={userCoupons}
                                />
                            </Flex>
                        </div>
                    )
                    : ''
                }

                { activeUrl.indexOf('#coupons/purchases') >= 0
                    ? (
                        <div>
                            <div className="alert alert-light text-center">
Find here all your purchases and the supplier approval status
                                <br />
                                <small>(Waiting approval, Rejected or Accepted)</small>
                            </div>
                            <Purchases
                                isManage={false}
                                purchases={purchasesUser}
                                setActiveUrl={setActiveUrl}
                            />
                        </div>
                    )
                    : ''
                }

                { activeUrl.indexOf('#manage2') >= 0
                    ? (
                        <>
                            <div className="alert alert-light">
                                <div className="row">
                                    <div className="col-10">
                                        <big>
                                            <span className="badge badge-secondary">
        Your Balance
                                                {' '}
                                                { supplierBalance }
                                                {' '}
        WAVES
                                            </span>
                                        </big>
        &nbsp;&nbsp;
                                        <big>
                                            <span className="badge badge-secondary">
        Locked
                                                {' '}
                                                { supplierLockedBalance }
                                                {' '}
        WAVES
                                            </span>
                                        </big>
        &nbsp;&nbsp;
                                        <big>
                                            <span className="badge badge-secondary">
        Available
                                                {' '}
                                                { supplierAvailableBalance }
                                                {' '}
        WAVES
                                            </span>
                                        </big>
                                    </div>
                                    <div className="col-2 text-right">
                                        <button
                                            type="button"
                                            className="btn btn-success"
                                            onClick={async () => {
                                                await withdrawAvailable()
                                                fetchData()
                                                alert('Withdrawal successful')
                                            }}
                                        >
                                            Withdraw Available
                                        </button>
                                    </div>
                                </div>
                            </div>
                            <ul className="nav nav-tabs">
                                <li className="nav-item" onClick={() => setActiveUrl('#manage/coupons')}>
                                    <a className={activeUrl.indexOf('#manage/coupons') >= 0 ? 'nav-link active' : 'nav-link'} href="#manage/coupons">Selling Coupons</a>
                                </li>
                                <li className="nav-item" onClick={() => setActiveUrl('#manage/approve')}>
                                    <a className={activeUrl.indexOf('#manage/approve') >= 0 ? 'nav-link active' : 'nav-link'} href="#manage/approve">Approve Purchases</a>
                                </li>
                                <li className="nav-item" onClick={() => setActiveUrl('#manage/burn')}>
                                    <a className={activeUrl.indexOf('#manage/burn') >= 0 ? 'nav-link active' : 'nav-link'} href="#manage/burn">Burn Received Coupons</a>
                                </li>
                            </ul>
                        </>
                    )
                    : ''
                }
                { activeUrl.indexOf('#manage2/coupons') >= 0
                    ? (
                        <>
                            <div className="alert alert-light text-center">
Find here all coupons you have created as supplier..
                                <br />
You can add, update and remove them at any time.
                                <br />
                                <small><b>click on "Add New Coupon" to create a new coupon | click on any coupon and then on "Edit" to update it or "Remove" to remove it from Market</b></small>
                            </div>
                            <div className="alert alert-dark text-center">
                                <button type="submit" className="btn btn-primary" onClick={onFormOpen}>Add New Coupon</button>
                            </div>
                            <Flex
                                justifyContent="center"
                                p={{
                                    0: '10px',
                                    md: '0px',
                                }}
                                flexWrap="wrap"
                            >
                                <Coupons
                                    setActiveUrl={setActiveUrl}
                                    isManageCoupons
                                    onDialogOpen={onDialogOpen}
                                    coupons={supplierItems}
                                />
                            </Flex>
                        </>
                    )
                    : '' }

                { activeUrl === '#manage2/approve'
                    ? (
                        <div>
                            <div className="alert alert-light text-center">
Find here all the coupons you have sold, and choose for each one if you accept the sale or refuse it
                                <br />
                                <small><b>click on "Reject" to refuse or "Accept" to accept the sale</b></small>
                            </div>
                            <Purchases
                                isManage
                                purchases={purchasesSupplier}
                                setActiveUrl={setActiveUrl}
                                onAccept={onAcceptPurchase}
                                onReject={onRejectPurchase}
                            />
                        </div>
                    )
                    : '' }

                { activeUrl.indexOf('#manage2/burn') >= 0
                    ? (
                        <>
                            <div className="alert alert-light text-center">
Find here all the coupons you received in return from the buyers, and burn them to recover your balance.
                                <br />
                                <small><b>click on any coupon and then on "Burn" to burn it</b></small>
                            </div>
                            <Flex
                                justifyContent="center"
                                p={{
                                    0: '10px',
                                    md: '0px',
                                }}
                                flexWrap="wrap"
                            >
                                <Coupons
                                    setActiveUrl={setActiveUrl}
                                    isManageCoupons
                                    onDialogOpen={onDialogOpen}
                                    coupons={supplierReceivedItems}
                                />
                            </Flex>
                        </>
                    )
                    : '' }

                <Modal open={formSROpened} onClose={onFormSRClose}>
                    <FormSupplierRegister
                        onClose={onFormSRClose}
                        onSubmit={async (data) => {
                            await registerSupplier(data)
                            // onAccountChange()
                            onFormSRClose()
                            onResultSROpen()
                        }}
                    />
                </Modal>
                <Modal open={resultSROpened} onClose={onResultSRClose}>
                    <Result
                        text="<div class='alert alert-success'>Registration successful!</div><div>You are now a supplier.<br/><br/></div><div>Click on <b>Manage Coupons</b> to add / update / remove coupons.</div>"
                        onClose={onResultSRClose}
                    />
                </Modal>
                <Modal open={dialogOpened} onClose={onDialogClose}>
                    <Dialog
                        activeUrl={activeUrl}
                        manageMode={manageMode}
                        coupon={selectedItem}
                        onClose={onDialogClose}
                        onEdit={() => {
                            onDialogClose()
                            onFormOpen(selectedItem)
                        }}
                        onRemove={async () => {
                            if (account.isSupplier) {
                                if (selectedItem?.id?.length > 0) {
                                    await removeItem(selectedItem?.id)
                                    await fetchData()
                                }
                            }
                            onDialogClose()
                        }}
                        onBuy={async () => {
                            await purchaseCoupon(selectedItem)
                            onDialogClose()
                            onResultBuyOpen()
                            await fetchData()
                        }}
                        onUse={async () => {
                            await sendCouponToSupplier(selectedItem)
                            onDialogClose()
                            await fetchData()
                        }}
                        onBurn={async () => {
                            await burnCoupon(selectedItem.assetId)
                            onDialogClose()
                            alert('Coupon has been burned')
                            await fetchData()
                        }}
                    />
                </Modal>
                <Modal open={resultOpened} onClose={onResultClose}>
                    <Result
                        text="<div class='alert alert-success'>Your coupon as been saved successfully</div>"
                        onClose={onResultClose}
                    />
                </Modal>
                <Modal open={resultBuyOpened} onClose={onResultBuyClose}>
                    <Result
                        text="<div class='alert alert-success'>Thank you for your purchase. The supplier will soon validate this transaction and you will receive your coupon as NFT</div>"
                        onClose={onResultClose}
                    />
                </Modal>
                <Modal
                    open={formOpened}
                    onClose={onFormClose}
                    width={{
                        0: '100%',
                        lg: 'initial',
                    }}
                    mx="10px"
                >
                    <Form
                        editedItem={editedItem}
                        onClose={onFormClose}
                        onSubmit={async (data) => {
                            if (account.isSupplier) {
                                if (data.id?.length === 0) {
                                    await addItem(data)
                                    onFormClose()
                                    onResultOpen()
                                    await fetchData()
                                } else {
                                    // console.log(data)
                                    await updateItem(data)
                                    onFormClose()
                                    onResultOpen()
                                }
                                await fetchData()
                            /*
                              } else {
                                const fn = filterActive ? updateUserCoupons : updateItems
                                const entity = filterActive ? userCoupons : Items
                                fn([...entity, { ...data, id: new Date().valueOf() }])
                                onFormClose()
                                onResultOpen()
                            */
    /*                            }
                        }}
                    />
                </Modal>
                <Footer />
        </>
*/
    )
}

export default hot(App)
