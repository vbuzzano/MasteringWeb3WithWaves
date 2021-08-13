import React from 'react'

import { addItem } from '../../libs/dApp'
import { Box, Modal } from '../shared'
import { Form, Result } from '../modal'
import { useAppDialogs } from '../service'

const BTCreateCoupon = ({ setActiveUrl, text }) => {
    const {
        form: [formOpened, onFormOpen, onFormClose],
        result: [resultOpened, onResultOpen, onResultClose],
    } = useAppDialogs()

    text ??= 'Create a coupon'

    return (
        <>
            <Box
                onClick={() => {
                    setActiveUrl('#supplier/manage')
                    onFormOpen()
                }}
            >
                <a href="#supplier/manage" className="btn btn-primary">{text}</a>
            </Box>

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
                    editedItem={{}}
                    onClose={onFormClose}
                    onSubmit={async (data) => {
                        try {
                            await addItem(data)
                            onFormClose()
                            onResultOpen()
                        } catch (error) {
                            console.log(error)
                        }
                    }}
                />
            </Modal>

            <Modal open={resultOpened} onClose={onResultClose}>
                <Result
                    text="<div class='alert alert-success'>Your coupon has been created successfully</div>"
                    onClose={onResultClose}
                />
            </Modal>

        </>
    )
}

export default BTCreateCoupon
