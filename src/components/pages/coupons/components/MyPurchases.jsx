/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import Menu from './Menu'

import { Flex, Modal } from '../../../shared'
import { Purchases } from '../../../../containers'
import { Dialog, Result } from '../../../modal'
import { useAppDialogs } from '../../../service'

const MyPurchases = ({ loading, purchases }) => {
    const {
        selectedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
    } = useAppDialogs()
    return (
        <>
            <div>
                <Purchases
                    loading={loading}
                    purchases={purchases}
                />
            </div>

            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    buttons={['use']}
                    // activeUrl={activeUrl}
                    // manageMode={manageMode}
                    coupon={selectedItem}
                    onClose={onDialogClose}
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

export default MyPurchases
