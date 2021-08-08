import React from 'react'

import { Box } from '../../../shared'

const Menu = ({ activeUrl, setActiveUrl }) => (
    <div className="manager-container container">
        { activeUrl?.indexOf('#manage') >= 0
            ? (
                <Box as="ul" className="nav nav-tabs">
                    <Box
                        as="li"
                        className="nav-item"
                        onClick={() =>
                            setActiveUrl('#manage/coupons')
                        }
                    >
                        <a href="#manage/coupons" className={activeUrl?.indexOf('#manage/coupons') >= 0 ? 'nav-link active' : 'nav-link'}>Manage Coupons</a>
                    </Box>
                    <Box
                        as="li"
                        className="nav-item"
                        onClick={() =>
                            setActiveUrl('#manage/purchases')
                        }
                    >
                        <a href="#manage/purchases" className={activeUrl?.indexOf('#manage/purchases') >= 0 ? 'nav-link active' : 'nav-link'}>Purchases</a>
                    </Box>
                    <Box
                        as="li"
                        className="nav-item"
                        onClick={() =>
                            setActiveUrl('#manage/burn')
                        }
                    >
                        <a href="#manage/burn" className={activeUrl?.indexOf('#manage/burn') >= 0 ? 'nav-link active' : 'nav-link'}>Burn Received Coupons</a>
                    </Box>
                </Box>
            )
            : ''
        }
    </div>
)
export default Menu
