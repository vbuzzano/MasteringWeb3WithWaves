import React from 'react'

import { Box } from '../../../shared'

const Menu = ({
    activeUrl, setActiveUrl,
}) => (
        <>
            <Box type="ul" className="nav nav-tabs">
                <Box type="li" className="nav-item" onClick={() => setActiveUrl('#my/coupons')}>
                    <a className={activeUrl === ('#my/coupons') ? 'nav-link active' : 'nav-link'} href="#my/coupons">My Coupons</a>
                </Box>
                <Box type="li" className="nav-item" onClick={() => setActiveUrl('#my/purchases')}>
                    <a className={activeUrl?.indexOf('#my/purchases') >= 0 ? 'nav-link active' : 'nav-link'} href="#my/purchases">My Purchases</a>
                </Box>
            </Box>
        </>

)

export default Menu
