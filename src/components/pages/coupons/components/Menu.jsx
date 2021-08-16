import React from 'react'

import { Box } from '../../../shared'

const Menu = ({
    activeUrl, setActiveUrl,
}) => (
        <>
            <Box type="ul" className="nav nav-tabs">
                <Box type="li" className="nav-item" onClick={() => setActiveUrl('#my/coupons')}>
                    <a className={activeUrl?.match(new RegExp('.*/?(#my[^/]*|#my/coupons.*)$')) ? 'nav-link active' : 'nav-link'} href="#my/coupons">Active Coupons</a>
                </Box>
                <Box type="li" className="nav-item" onClick={() => setActiveUrl('#my/used')}>
                    <a className={activeUrl?.match(new RegExp('.*/?(#my/used.*)$')) ? 'nav-link active' : 'nav-link'} href="#my/used">Used Coupons</a>
                </Box>
                <Box type="li" className="nav-item" onClick={() => setActiveUrl('#my/expired')}>
                    <a className={activeUrl?.match(new RegExp('.*/?(#my/expired.*)$')) ? 'nav-link active' : 'nav-link'} href="#my/expired">Expired Coupons</a>
                </Box>
                <Box type="li" className="nav-item" onClick={() => setActiveUrl('#my/voting')}>
                    <a className={activeUrl?.match(new RegExp('.*/?(#my/voting.*)$')) ? 'nav-link active' : 'nav-link'} href="#my/voting">Voting</a>
                </Box>
                <Box type="li" className="nav-item" onClick={() => setActiveUrl('#my/purchases')}>
                    <a className={activeUrl?.match(new RegExp('.*/?(#my/purchases.*)$')) ? 'nav-link active' : 'nav-link'} href="#my/purchases">Purchases history</a>
                </Box>
            </Box>
        </>

)

export default Menu
