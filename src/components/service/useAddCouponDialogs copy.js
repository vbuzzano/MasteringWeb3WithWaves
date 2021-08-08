import { useState, useMemo } from 'react'

function useCouponDialogs() {
    const [formCouponOpened, changeFormCouponState] = useState(false)
    //    const [selectedItem, selectCoupon] = useState()

    const [
        onFormCouponOpened,
        onFormCouponClose,
    ] = useMemo(
        () => [
            () => changeFormCouponState(true),
            () => changeFormCouponState(false),
        ],
        [],
    )

    return {
        //        selectedItem,
        formCoupon: [formCouponOpened, onFormCouponOpened, onFormCouponClose],
    }
}

export default useCouponDialogs
