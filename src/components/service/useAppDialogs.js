import { useState, useMemo } from 'react'

function useAppDialogs() {
    const [dialogOpened, changeDialogState] = useState(false)
    const [resultOpened, changeResultState] = useState(false)
    const [resultBuyOpened, changeResultBuyState] = useState(false)
    const [formOpened, changeFormState] = useState(false)
    const [selectedItem, selectCoupon] = useState()
    const [editedItem, selectEditedCoupon] = useState()
    const [manageMode, setManageMode] = useState(false)

    const [
        onDialogOpen,
        onDialogClose,
        onResultOpen,
        onResultClose,
        onResultBuyOpen,
        onResultBuyClose,
        onFormOpened,
        onFormClose,
    ] = useMemo(
        () => [
            (coupon, isManageMode = false) => {
                setManageMode(isManageMode)
                selectCoupon(coupon)
                changeDialogState(true)
            },
            () => changeDialogState(false),
            () => changeResultState(true),
            () => changeResultState(false),
            () => changeResultBuyState(true),
            () => changeResultBuyState(false),
            (coupon = null) => {
                selectEditedCoupon(coupon)
                changeFormState(true)
            },
            () => {
                selectEditedCoupon(null)
                changeFormState(false)
            },
        ],
        [],
    )

    return {
        manageMode,
        selectedItem,
        editedItem,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultOpened, onResultOpen, onResultClose],
        resultBuy: [resultBuyOpened, onResultBuyOpen, onResultBuyClose],
        form: [formOpened, onFormOpened, onFormClose],
    }
}

export default useAppDialogs
