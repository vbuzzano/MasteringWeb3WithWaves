import { useState, useMemo } from 'react'

function useSupplierRegisterDialogs() {
    const [resultSROpened, changeResultState] = useState(false)
    const [formSROpened, changeFormState] = useState(false)
    //    const [selectedItem, selectCoupon] = useState()

    const [
        onResultSROpen,
        onResultSRClose,
        onFormSROpened,
        onFormSRClose,
    ] = useMemo(
        () => [
            () => changeResultState(true),
            () => changeResultState(false),
            () => changeFormState(true),
            () => changeFormState(false),
        ],
        [],
    )

    return {
        //        selectedItem,
        resultSR: [resultSROpened, onResultSROpen, onResultSRClose],
        formSR: [formSROpened, onFormSROpened, onFormSRClose],
    }
}

export default useSupplierRegisterDialogs
