import React, { useEffect, useState } from 'react'

import { Flex, Modal } from '../../../shared'
import { Coupons } from '../../../../containers'
import { Dialog, Result } from '../../../modal'
import { useAppDialogs } from '../../../service'
import {
    DATA, fetchUserActiveCoupons, sendCouponToSupplier, subscribe,
} from '../../../../libs/dApp'

const MyCoupons = ({ account, setActiveUrl }) => {
    const {
        selectedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
    } = useAppDialogs()
    const [loading, setLoading] = useState(false)
    const [coupons, updateCoupons] = useState(false)
    const { address } = account

    useEffect(() => {
        async function refreshData() {
            try {
                const list = await fetchUserActiveCoupons(address)
                console.debug('[ 🔄 My Coupons ] :', `${list.length} coupons loaded`)
                updateCoupons(list)
            } catch (error) {
                console.error(error)
            }
        }

        return subscribe(DATA, refreshData)
    }, [address])

    return (
        <>
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
                    coupons={coupons}
                    onDialogOpen={onDialogOpen}
                    setActiveUrl={setActiveUrl}
                />
            </Flex>

            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    buttons={['buymore', 'use']}
                    coupon={selectedItem}
                    onClose={onDialogClose}
                    onResultOpen={onResultOpen}
                    onUse={async () => {
                        setLoading(true)
                        try {
                            await sendCouponToSupplier(selectedItem)
                            onDialogClose()
                            onResultOpen()
                        } catch (error) {
                            alert(error.message)
                            console.log(error)
                        } finally {
                            setLoading(false)
                        }
                    }}
                />
            </Modal>

            <Modal open={resultOpened} onClose={onResultClose}>
                <Result
                    text="<div class='alert alert-success'>Thank you for using this coupon. We hope you are happy with your discount</div>"
                    onClose={onResultClose}
                />
            </Modal>
        </>

    )
}

export default MyCoupons
