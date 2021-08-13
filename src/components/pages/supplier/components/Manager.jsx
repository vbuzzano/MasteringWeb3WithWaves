/* eslint-disable no-alert */
/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useState } from 'react'

import { Coupons } from '../../../../containers'
import {
    addItem,
    DATA, fetchSupplierItems, removeItem, subscribe, updateItem,
} from '../../../../libs/dApp'
import { Dialog, Form, Result } from '../../../modal'
import { useAppDialogs } from '../../../service'
import { Flex, Modal } from '../../../shared'

function Manager({ account, activeUrl, setActiveUrl }) {
    const [loading, setLoading] = useState(0)
    const [items, updateItems] = useState([])
    const {
        selectedItem, editedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        form: [formOpened, onFormOpen, onFormClose],
        result: [resultOpened, onResultOpen, onResultClose],
    } = useAppDialogs()

    const { address } = account

    useEffect(() => {
        async function refreshData() {
            let list = []
            try {
                list = await fetchSupplierItems(address)
                console.debug('[ 🔄 Manager ] :', `${list.length} items loaded`)
                updateItems(list)
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
                px={{
                    0: '20px',
                    lg: '39px',
                    xl: '20px',
                }}
                flexWrap="wrap"
            >
                <Coupons
                    loading={loading}
                    setActiveUrl={setActiveUrl}
                    onDialogOpen={onDialogOpen}
                    coupons={items}
                    isManageCoupons
                />
            </Flex>
            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    buttons={['edit', 'remove']}
                    activeUrl={activeUrl}
                    manageMode
                    coupon={selectedItem}
                    onClose={onDialogClose}
                    onEdit={() => {
                        onDialogClose()
                        onFormOpen(selectedItem)
                    }}
                    onRemove={async () => {
                        setLoading(true)
                        try {
                            if (selectedItem?.id?.length > 0) {
                                await removeItem(selectedItem?.id)
                            }
                            onDialogClose()
                        } catch (error) {
                            alert(error.message)
                            console.log(error)
                        } finally {
                            setLoading(false)
                        }
                    }}
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
                        setLoading(true)
                        try {
                            if (data.id?.length === 0) {
                                onFormClose()
                                await addItem(data)
                                onResultOpen()
                                setLoading(false)
                            } else {
                                onFormClose()
                                await updateItem(data)
                                onResultOpen()
                            }
                        } catch (error) {
                            console.log(error)
                        } finally {
                            setLoading(false)
                        }
                    }}
                />
            </Modal>

            <Modal open={resultOpened} onClose={onResultClose}>
                <Result
                    text="<div class='alert alert-success'>Your coupon has been updated successfully</div>"
                    onClose={onResultClose}
                />
            </Modal>

        </>
    )
}

export default Manager
