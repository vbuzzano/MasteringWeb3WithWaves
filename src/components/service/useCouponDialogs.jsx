/* eslint-disable no-nested-ternary */
/* eslint-disable no-alert */
import React, { useState } from 'react'

import useAppDialogs from './useAppDialogs'

import {
    acceptPurchase, addItem, burnCoupon, commitVote, formatNumber, purchaseCoupon,
    rejectPurchase, removeItem, revealVote, sendCouponToSupplier, shortAddress,
    updateItem, withdrawFunds,
} from '../../libs/dApp'
import {
    Dialog, ErrorDialog, Form, Result, Loading, FormVote,
} from '../modal'
import { Modal } from '../shared'
import FormReveal from '../modal/FormReveal'

function useCouponDialogs() {
    const {
        selectedItem, selectItem,
        editedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultText, resultOpened, onResultOpen, onResultClose],
        resultBuy: [resultBuyOpened, onResultBuyOpen, onResultBuyClose],
        form: [formOpened, onFormOpen, onFormClose],
    } = useAppDialogs()

    const {
        editedItem: voteItem,
        form: [voteFormOpened, onVoteFormOpened, onVoteFormClose],
    } = useAppDialogs()

    const {
        editedItem: revealItem, editedOption: revealOption,
        form: [revealFormOpened, onRevealFormOpened, onRevealFormClose],
    } = useAppDialogs()

    const [loading, setLoading] = useState(false)
    const [errorResult, setErrorResult] = useState(true)

    async function callAction(fn, loadText = '', resText = '') {
        setLoading(loadText)
        try {
            if (formOpened) onFormClose()
            if (voteFormOpened) onVoteFormClose()
            if (revealFormOpened) onRevealFormClose()
            if (dialogOpened) onDialogClose()
            await fn()
            onResultOpen(resText)
        } catch (error) {
            setErrorResult(error)
            console.error(error)
        } finally {
            setLoading(false)
        }
    }

    async function onWithdraw(item) {
        callAction(async () => {
            if (item) {
                if (item.isExpired || item.isBurned) {
                    await withdrawFunds(item)
                } else if (item.isOwned) {
                    await burnCoupon(item)
                }
            }
        },
        `<p>Withdrawing Funds for coupon <a href="${`https://testnet.wavesexplorer.com/assets/${item?.assetId}/`}" target="_blank">${shortAddress(item.assetId)}</a><p>`,
        '<p>Funds withdrawn successfully</p>')
    }

    async function onReject(item) {
        callAction(async () => {
            if (item) {
                await rejectPurchase(item)
            }
        },
        '<p>Rejecting and refund buyer</p>',
        '<p>Purchase rejected and buyer refunded</p>')
    }

    async function onAccept(item) {
        callAction(async () => {
            if (item) {
                await acceptPurchase(item)
            }
        },
        '<p>Confirming purchase</p>',
        '<p>Purchase confirmed</p>')
    }

    async function onSave(data) {
        callAction(async () => {
            if (data?.id?.length === 0) {
                await addItem(data)
            } else {
                await updateItem(data)
            }
        },
        `<p>Saving coupon</p><p><b>${data.name}</p>`,
        `<p>Coupon <b>${data.name}</b></p><p>saved successfully</p>`)
    }

    async function onRemove(item) {
        callAction(async () => {
            if (item?.id?.length > 0) {
                await removeItem(item)
            }
        },
        `<p>Removing coupon</p><p><b>${item.name}</b><p>`,
        `<p>Coupon <b>${item.name}</b></p><p>removed successfully</p>`)
    }

    async function onBurn(item) {
        alert(1)
        callAction(async () => {
            if (item?.assetId?.length > 0) {
                await burnCoupon(item)
            }
        },
        `<p>Burning coupon</p><p><b>${item.name}</b><p><p>and withdraw funds`,
        `<p>Coupon <b>${item.name}</b></p><p>burned successfully</p><p>Funds ${formatNumber(item.amount)} WAVES withdrawn successfully</p>`)
    }

    async function onUse(item) {
        callAction(async () => {
            if (item) {
                await sendCouponToSupplier(item)
            }
        },
        `<p>Using coupon</p><p><b>${item.name || item.item?.name}</b><p>`,
        '<p>Thank you for using this coupon. We hope you are happy with your discount</p>')
    }

    async function onBuy(item) {
        callAction(async () => {
            if (item) {
                await purchaseCoupon(item.item || item)
            }
        },
        `<p>Sending purchase transaction for coupon</p><p><b>${item.item?.name || item.name}</b><p>`,
        '<div class="alert alert-success">Thank you for your purchase.</div><p>The supplier will soon validate this transaction and you will receive your coupon as NFT</p>')
    }

    async function onVote(item, voting) {
        onDialogClose()
        selectItem(item)
        onVoteFormOpened(item, voting)
    }

    async function onReveal(item, voting) {
        onDialogClose()
        selectItem(item)
        onRevealFormOpened(item, voting)
    }

    async function onVoteCommit(data) {
        callAction(async () => {
            console.debug(data)
            if (data && data.vote && data.item && data.salt) {
                await commitVote(data)
            }
        },
        `<p>Sending commit transaction for coupon</p><p><b>${data.name}</b><p>`,
        '<div class="alert alert-success">Thank you for voting.</div>')
    }

    async function onVoteReveal(data) {
        callAction(async () => {
            if (data && data.commit && data.item && data.salt) {
                await revealVote(data)
            }
        },
        `<p>Sending reveal transaction for coupon</p><p><b>${data.name}</b><p>`,
        '<div class="alert alert-success">Thank you for voting.</div>')
    }

    function CouponDialogs({
        mode, enableVoting,
    }) {
        const dialogButtons = mode === 'manage' ? ['edit', 'remove']
            : mode === 'withdraw' ? ['withdraw']
                : mode === 'approval' ? ['accept', 'reject']
                    : mode === 'market' ? ['buy']
                        : mode === 'active' ? ['use']
                            : ['buy']

        if (enableVoting) dialogButtons.push('vote')

        return (
        <>
            <Modal open={dialogOpened} onClose={onDialogClose}>
                <Dialog
                    buttons={dialogButtons}
                    coupon={selectedItem}
                    onClose={onDialogClose}
                    onEdit={() => {
                        onDialogClose()
                        onFormOpen(selectedItem)
                    }}
                    onVote={onVote}
                    onReveal={onReveal}
                    onRemove={() => onRemove(selectedItem)}
                    onWithdraw={() => onWithdraw(selectedItem)}
                    onAccept={() => onAccept(selectedItem)}
                    onReject={() => onReject(selectedItem)}
                    onBurn={() => onBurn(selectedItem)}
                    onBuy={() => onBuy(selectedItem)}
                    onUse={() => onUse(selectedItem)}
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
                    onSubmit={async data => onSave(data)}
                />
            </Modal>

            <Modal
                open={voteFormOpened}
                onClose={onVoteFormClose}
                width={{
                    0: '100%',
                    lg: 'initial',
                }}
                mx="10px"
            >
                <FormVote
                    item={voteItem?.item || voteItem}
                    onClose={onVoteFormClose}
                    onSubmit={onVoteCommit}
                />
            </Modal>

            <Modal
                open={revealFormOpened}
                onClose={onRevealFormClose}
                width={{
                    0: '100%',
                    lg: 'initial',
                }}
                mx="10px"
            >
                <FormReveal
                    item={revealItem?.item || revealItem}
                    voting={revealOption}
                    onClose={onRevealFormClose}
                    onSubmit={onVoteReveal}
                />
            </Modal>

            <Modal open={resultOpened} onClose={onResultClose}>
                <Result
                    text={resultText}
                    onClose={onResultClose}
                />
            </Modal>
            <Modal open={typeof loading === 'string'} onClose={() => setLoading(false)}>
                <Loading className="bg-dark" text={loading} />
            </Modal>
            <ErrorDialog className="bg-dark" text={errorResult?.message} open={typeof errorResult === 'object'} onClose={() => setErrorResult(false)} />
        </>
        )
    }

    return {
        CouponDialogs,
        selectedItem,
        editedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
        resultBuy: [resultBuyOpened, onResultBuyOpen, onResultBuyClose],
        form: [formOpened, onFormOpen, onFormClose],
        showItem: onDialogOpen,
        onBuy,
        onVote,
        onReveal,
        onUse,
        onRemove,
        onSave,
        onReject,
        onAccept,
        onBurn,
        onWithdraw,
    }
}

export default useCouponDialogs
