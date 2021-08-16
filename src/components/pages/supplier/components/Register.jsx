/* eslint-disable no-alert */
import React, { useEffect, useState } from 'react'

import {
    ErrorDialog, FormSupplierRegister, Result,
} from '../../../modal'
import { Loading, Modal } from '../../../shared'
import { registerSupplier } from '../../../../libs/dApp'

function Register({ account }) {
    const [loading, setLoading] = useState(false)
    const [loadingData, setLoadingData] = useState(true)
    const [resultOpened, setResultOpen] = useState(false)
    const [formOpened, setFormOpen] = useState(false)
    const [errorResult, setErrorResult] = useState(false)

    useEffect(() => {
        setTimeout(() => {
            setLoadingData(false)
            if (!account.isSupplier && !formOpened) {
                setFormOpen(true)
            }
        }, 500)
    }, [account])

    return (
        <>
            {loadingData ? (<Loading />) : null }
            {formOpened && !account.isSupplier ? (
                <FormSupplierRegister
                    as="div"
                    buttons={['submit']}
                    onClose={async () => {
                        setFormOpen(false)
                    }}
                    onSubmit={async (data) => {
                        setLoading('Registering as supplier ...')
                        try {
                            await registerSupplier(data)
                            setResultOpen(true)
                        } catch (error) {
                            setErrorResult(error)
                            console.error(error)
                        } finally {
                            setLoading(false)
                        }
                    }}
                />
            ) : '' }

            <Modal open={resultOpened} onClose={() => setResultOpen(false)}>
                <Result
                    text="<div class='alert alert-success'>Registration successful!</div><div>You are now a supplier.<br/><br/></div><div>Click on <b>Manage Coupons</b> to add / update / remove coupons.</div>"
                    onClose={() => setResultOpen(false)}
                />
            </Modal>
            <Modal open={typeof loading === 'string'} onClose={() => setLoading(false)}>
                <Loading className="bg-dark" text={loading} />
            </Modal>
            <ErrorDialog className="bg-dark" text={errorResult?.message} open={typeof errorResult === 'object'} onClose={() => setErrorResult(false)} />
        </>
    )
}

export default Register
