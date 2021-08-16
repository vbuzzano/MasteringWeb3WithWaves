import React, { Fragment, useCallback } from 'react'
import MediaQuery from 'react-responsive'

import * as Controls from './header-controls'
import Hamburger from './Hamburger'

import { Flex, Box } from '../shared'
import BTLogin from '../custom/btLogin'

const menuIndent = {
    0: '16px',
    xl: '46px',
}

const DesktopHeader = ({
    account,
    links,
    activeUrl,
    setActiveUrl,
    userLinks,
    tabletResolution,
    mobileResolution,
    changeMobileMenuState,
    menuOpened,
    onCreateCoupon,
}) => {
    const onMenuClick = useCallback(() => changeMobileMenuState(!menuOpened), [menuOpened])
    return (
        <>
            <MediaQuery maxWidth={tabletResolution}>
                <Box
                    pr="22px"
                    position="relative"
                    top={{
                        sm: '4px',
                    }}
                >
                    <Hamburger bg="blue.0" height="100%" onClick={onMenuClick} />
                </Box>
            </MediaQuery>
            <MediaQuery minWidth={mobileResolution}>
                <Controls.Logo justifyContent="center" alignItems="center" isActive />
            </MediaQuery>
            <Flex flex={1} justifyContent={{ 0: 'flex-end', lg: 'center' }} alignItems="center">
                <Flex>
                    <MediaQuery minWidth={tabletResolution}>
                        {links.filter(({ isEnabled }) => typeof isEnabled !== 'function' || isEnabled(account)).map(({ url, title }, index) => (
                            <Box key={url}>
                                <Box as="span" pl={index !== 0 && menuIndent}>
                                    <a href={url}>
                                        <Controls.MenuItem
                                            active={activeUrl?.indexOf(url) >= 0}
                                            onClick={() => setActiveUrl(url)}
                                        >
                                            {title}
                                        </Controls.MenuItem>
                                    </a>
                                </Box>
                            </Box>
                        ))}
                    </MediaQuery>
                </Flex>
            </Flex>
            <Flex alignItems="center">
                {userLinks.filter(({ isEnabled }) => typeof isEnabled !== 'function' || isEnabled(account)).map(({ url, title }, index) => (
                    <Box key={url}>
                        <Fragment key={url}>
                            {index !== 0 && (
                                <Box width="1px" as="span" mx="6px" height="13px" bg="gray.2" />
                            )}
                            <a href={url}>
                                <Controls.MenuItem
                                    active={activeUrl?.indexOf(url) >= 0}
                                    onClick={() => setActiveUrl(url)}
                                >
                                    {title}
                                </Controls.MenuItem>
                            </a>
                        </Fragment>
                    </Box>
                ))}
                <MediaQuery minWidth={mobileResolution}>
                    <Fragment>
                        {account?.isSupplier ? (
                            <>
                                <Box as="span" className="mx-2 text-success">
                                    <Controls.AddCouponIcon onClick={onCreateCoupon} />
                                </Box>
                                <Box as="span" className="mx-2">
                                    <a href="#supplier/approve">
                                        <Controls.MenuItem
                                            onClick={() => setActiveUrl('#supplier/approve')}
                                            style={{ display: 'flex' }}
                                        >
                                            <Controls.ShopIcon />
                                            { (account?.supplier?.approvalCounter > 0) ? (
                                                <Box position="relative" top="-10px" left="-6px">
                                                    <Controls.RoundMarkIcon />
                                                </Box>
                                            )
                                                : ''
                                            }
                                        </Controls.MenuItem>
                                    </a>
                                </Box>
                            </>
                        ) : '' }
                    </Fragment>
                    <Box className="ml-2 mr-3">
                        <Controls.SearchIcon />
                    </Box>
                </MediaQuery>
                <Fragment>
                    <Controls.MenuItem>
                        <BTLogin account={account} setActiveUrl={setActiveUrl} />
                    </Controls.MenuItem>
                </Fragment>
            </Flex>
        </>
    )
}

export default DesktopHeader
