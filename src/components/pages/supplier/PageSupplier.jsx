import React, { useEffect } from 'react'

import { Menu, BalancePanel } from './components'

// import { getSupplierAvailableBalance, getSupplierBalance } from '../../../api/helper'
// import dApp from '../../../libs/dApp'

const PageSupplier = ({
    supplier, activeUrl, setActiveUrl,
}) => {
    supplier ??= {}

    useEffect(() => {
    })

    return (
        <>
            { activeUrl?.indexOf('#manage') >= 0
                ? (
                        <>
                            <BalancePanel
                                onWithdraw={() => {}}
                                {...supplier?.balance}
                            />
                            <Menu
                                activeUrl={activeUrl}
                                setActiveUrl={setActiveUrl}
                            />
                        </>
                )
                : ''
            }
        </>
    )
}

export default PageSupplier

