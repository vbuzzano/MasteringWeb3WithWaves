/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Flex, Modal } from '../../shared'
import { Coupons } from '../../../containers'
import { Dialog, Result } from '../../modal'
import { useAppDialogs } from '../../service'
import { subscribe, DATA } from '../../../libs/dApp'
import { fetchItems, purchaseCoupon } from '../../../api'

const PageMarket = ({
    account, setActiveUrl,
}) => {
    const [loading, setLoading] = useState(false)
    const [items, updateItems] = useState([])
    const {
        selectedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
    } = useAppDialogs()

    const { isConnected } = account

    const refreshItems = async () => {
        try {
            const list = await fetchItems()
            console.debug('[ 🔄 Market ] :', `${list.length} items loaded`)
            updateItems(list)
        } catch (error) {
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    useEffect(() => subscribe(DATA, refreshItems), [])

    return (
        <>
            <div className="alert alert-light text-center">
                Find coupons in the bazaar market, and start saving money.
                <br />
                Thanks to the many discount coupons from our suppliers.
                <br />
                <small>
                    <b>click on the coupon of your choice, then on "Buy" to buy it</b>
                </small>
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
                    loading={loading}
                    setActiveUrl={setActiveUrl}
                    onDialogOpen={onDialogOpen}
                    coupons={items}
                />
            </Flex>

            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    buttons={isConnected ? ['buy'] : ['login']}
                    // activeUrl={activeUrl}
                    // manageMode={manageMode}
                    coupon={selectedItem}
                    onClose={onDialogClose}
                    onBuy={async () => {
                        await purchaseCoupon(selectedItem)
                        onDialogClose()
                        onResultOpen()
                        //                                        await fetchData()
                    }}
                />

            </Modal>
            <Modal open={resultOpened} onClose={onResultClose}>
                <Result
                    text="<div class='alert alert-success'>Thank you for your purchase.</div><div>The supplier will soon validate this transaction and you will receive your coupon as NFT</div>"
                    onClose={onResultClose}
                />
            </Modal>
        </>

    )
}

export default PageMarket
