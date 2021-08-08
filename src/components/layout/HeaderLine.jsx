import React, { Fragment, useCallback } from 'react'
import MediaQuery from 'react-responsive'

import * as Controls from './header-controls'
import Hamburger from './Hamburger'

import { Flex, Box } from '../shared'
import BTLogin from '../custom/btLogin'
import BTSupplierRegister from '../custom/btRegisterSupplier'

const menuIndent = {
    0: '16px',
    xl: '46px',
}

const DesktopHeader = ({
    supplierApprovalCounter,
    account,
    onSupplierRegister,
    links,
    activeUrl,
    setActiveUrl,
    userLinks,
    tabletResolution,
    mobileResolution,
    changeMobileMenuState,
    menuOpened,
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
                        {links.map(({ url, title }, index) => (
                            <Box key={url} as="span" pl={index !== 0 && menuIndent}>
                                <a href={url}>
                                    <Controls.MenuItem
                                        active={activeUrl?.indexOf(url) >= 0}
                                        onClick={() => setActiveUrl(url)}
                                    >
                                        {title}
                                    </Controls.MenuItem>
                                </a>
                            </Box>
                        ))}
                        { account.isConnected && !account.isSupplier
                            ? (
                                <Box key="#/register" as="span" pl={menuIndent}>
                                    <Controls.MenuItem active={activeUrl?.indexOf('#register') >= 0}>
                                        <BTSupplierRegister
                                            onSupplierRegister={onSupplierRegister}
                                        />
                                    </Controls.MenuItem>
                                </Box>
                            )
                            : ''
                        }
                        { account.isConnected && account.isSupplier
                            ? (
                                <>
                                <Box key="#manage" as="span" pl={menuIndent}>
                                    <a href="#manage/coupons">
                                        <Controls.MenuItem
                                            active={activeUrl?.indexOf('#manage') >= 0}
                                            onClick={() => setActiveUrl('#manage/coupons')}
                                        >
                                            Supplier
                                        </Controls.MenuItem>
                                    </a>
                                </Box>
                                </>
                            )
                            : ''
                        }

                    </MediaQuery>
                </Flex>
            </Flex>
            <Flex alignItems="center">
                {userLinks.map(({ url, title }, index) => (
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
                ))}
                <Fragment>
                    <Box width="1px" as="span" mx="6px" height="13px" bg="gray.2" />
                    <Controls.MenuItem>
                        <BTLogin account={account} />
                    </Controls.MenuItem>
                </Fragment>
                <Fragment>
                    <Box width="1px" as="span" mx="6px" height="13px" bg="gray.2" />
                    <Box as="span">
                        <a href="#manage/approve">
                            <Controls.MenuItem
                                onClick={() => setActiveUrl('#manage/approve')}
                                style={{ display: 'flex' }}
                            >
                                <Controls.ShopIcon />
                                { (supplierApprovalCounter > 0) ? (
                                    <Box position="relative" top="-10px" left="-6px">
                                        <Controls.RoundMarkIcon />
                                    </Box>
                                )
                                    : ''
                                }
                            </Controls.MenuItem>
                        </a>
                    </Box>
                </Fragment>
                <MediaQuery minWidth={mobileResolution}>
                    <Box pl="20px">
                        <Controls.SearchIcon />
                    </Box>
                </MediaQuery>
            </Flex>
        </>
    )
}

export default DesktopHeader
