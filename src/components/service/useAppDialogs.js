import { useState, useMemo } from 'react'

function useAppDialogs() {
    const [dialogOpened, changeDialogState] = useState(false)
    const [resultOpened, changeResultState] = useState(false)
    const [resultBuyOpened, changeResultBuyState] = useState(false)
    const [formOpened, changeFormState] = useState(false)
    const [selectedItem, selectItem] = useState()
    const [editedItem, selectEditedItem] = useState()
    const [editedOption, selectEditedOption] = useState()
    const [resultText, setResultText] = useState('')

    const [
        onDialogOpen,
        onDialogClose,
        onResultOpen,
        onResultClose,
        onResultBuyOpen,
        onResultBuyClose,
        onFormOpen,
        onFormClose,
    ] = useMemo(
        () => [
            (item) => {
                selectItem(item)
                changeDialogState(true)
            },
            () => changeDialogState(false),
            (text) => {
                setResultText(text)
                changeResultState(true)
            },
            () => changeResultState(false),
            () => changeResultBuyState(true),
            () => changeResultBuyState(false),
            (item = null, option = null) => {
                selectEditedItem(item)
                selectEditedOption(option)
                changeFormState(true)
            },
            () => {
                selectEditedItem(null)
                selectEditedOption(null)
                changeFormState(false)
            },
        ],
        [],
    )

    return {
        selectedItem,
        editedItem,
        editedOption,
        dialog: [dialogOpened, onDialogOpen, onDialogClose],
        result: [resultText, resultOpened, onResultOpen, onResultClose],
        resultBuy: [resultBuyOpened, onResultBuyOpen, onResultBuyClose],
        form: [formOpened, onFormOpen, onFormClose],
        selectItem,
        selectEditedItem,
        selectEditedOption,
    }
}

export default useAppDialogs
