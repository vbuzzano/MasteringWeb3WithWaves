import React from 'react'

import { Box } from '../../../shared'

const Menu = ({ activeUrl, setActiveUrl }) => (
    <>
        <Box as="ul" className="nav nav-tabs">
            <Box as="li" className="nav-item" onClick={() => setActiveUrl('#supplier/coupons')}>
                <a href="#supplier/coupons" className={activeUrl.match(new RegExp('.*/?(#supplier[^/]*|#supplier/coupons.*)$')) ? 'nav-link active' : 'nav-link'}>Manage Coupons</a>
            </Box>
            <Box as="li" className="nav-item" onClick={() => setActiveUrl('#supplier/purchases')}>
                <a href="#supplier/purchases" className={activeUrl.match(new RegExp('.*/?#supplier/purchases.*$')) ? 'nav-link active' : 'nav-link'}>Approve purchases</a>
            </Box>
        </Box>
    </>
)
export default Menu
