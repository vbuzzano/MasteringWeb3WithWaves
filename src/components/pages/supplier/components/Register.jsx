import React, { useEffect } from 'react'

import { FormSupplierRegister, Result } from '../../../modal'
import { Modal } from '../../../shared'
import { registerSupplier } from '../../../../libs/dApp'
import { useAppDialogs } from '../../../service'

function Register({ account }) {
    const {
        result: [resultOpened, onResultOpen, onResultClose],
        form: [formOpened, onFormOpen, onFormClose],
    } = useAppDialogs()

    useEffect(() => {
        if (!account.isSupplier && !formOpened) {
            onFormOpen()
        }
    }, [account])

    return (
        <>
            {formOpened && !account.isSupplier ? (
                <FormSupplierRegister
                    as="div"
                    buttons={['submit']}
                    onClose={async () => {
                        onFormClose()
                    }}
                    onSubmit={async (data) => {
                        await registerSupplier(data)
                        // onAccountChange()
                        onFormClose()
                        onResultOpen()
                    }}
                />
            ) : '' }

            <Modal open={resultOpened} onClose={onResultClose}>
                <Result
                    text="<div class='alert alert-success'>Registration successful!</div><div>You are now a supplier.<br/><br/></div><div>Click on <b>Manage Coupons</b> to add / update / remove coupons.</div>"
                    onClose={onResultClose}
                />
            </Modal>
        </>
    )
}

export default Register
