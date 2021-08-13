import React from 'react'

import { Box } from '../../../shared'
import { RoundMarkIcon } from '../../../layout/header-controls'

const Menu = ({ activeUrl, setActiveUrl, approvalCounter }) => (
    <>
        <Box as="ul" className="nav nav-tabs">
            <Box as="li" className="nav-item" onClick={() => setActiveUrl('#supplier/manage')}>
                <a href="#supplier/manage" className={activeUrl.match(new RegExp('.*/?(#supplier[^/]*|#supplier/manage.*)$')) ? 'nav-link active' : 'nav-link'}>
                    Manage Coupons
                </a>
            </Box>
            <Box as="li" className="nav-item" onClick={() => setActiveUrl('#supplier/withdraw')}>
                <a href="#supplier/withdraw" className={activeUrl.match(new RegExp('.*/?#supplier/withdraw.*$')) ? 'nav-link active' : 'nav-link'}>
                Withdraw Funds
                </a>
            </Box>
            <Box as="li" className="nav-item" onClick={() => setActiveUrl('#supplier/history')}>
                <a href="#supplier/history" className={activeUrl.match(new RegExp('.*/?#supplier/history.*$')) ? 'nav-link active' : 'nav-link'}>
                    Purchases History
                </a>
            </Box>
            <Box as="li" className="nav-item" onClick={() => setActiveUrl('#supplier/approve')}>
                <a href="#supplier/approve" className={activeUrl.match(new RegExp('.*/?#supplier/approve.*$')) ? 'nav-link active' : 'nav-link'}>
                    { (approvalCounter > 0) ? (
                        <RoundMarkIcon />
                    ) : '' }
                    {' Approve Purchases'}
                </a>
            </Box>
        </Box>
    </>
)
export default Menu
