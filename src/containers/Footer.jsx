import React from 'react'
import MediaQuery from 'react-responsive'

import { Box, Flex, Text } from '../components/shared'
import { SocialButtons, LogoCopyright } from '../components/layout'
import {
    companyLinks, supplierLinks, myLinks, mainLinks,
} from '../components/layout/links'
import theme from '../styled-components/theme'

const { breakpoints } = theme

const GroupLinks = ({
    account, setActiveUrl, title, links,
}) => (
    <Flex flexDirection="column">
        <Text as="span" fontWeight="bold" letterSpacing="0.66px" fontSize="14px">
            {title}
        </Text>
        <Box pt="10px">
            {links.filter(({ isEnabled }) => typeof isEnabled !== 'function' || isEnabled(account)).map(({ url, title: linkTitle }) => (
                <a key={url} href={url}>
                    <Text color="gray.2" lineHeight="24px" fontSize="14px" onClick={() => setActiveUrl(url)}>
                        {linkTitle}
                    </Text>
                </a>
            ))}
        </Box>
    </Flex>
)

const Footer = ({ account, setActiveUrl }) => (
    <Flex flexDirection="column" bg="gray.0" px="40px">
        <MediaQuery minWidth={breakpoints.sm}>
            <Flex
                py="48px"
                justifyContent={{
                    xl: 'center',
                }}
            >
                <MediaQuery minWidth={breakpoints.xl}>
                    <LogoCopyright />
                </MediaQuery>

                <Box
                    pl={{
                        xl: '54px',
                    }}
                >
                    <GroupLinks account={account} setActiveUrl={setActiveUrl} title="Company" links={companyLinks} />
                </Box>
                <Box pl="54px">
                    <GroupLinks account={account} setActiveUrl={setActiveUrl} title="Work with Coupon Bazaar" links={myLinks} />
                </Box>
                <Box pl="54px">
                    <GroupLinks account={account} setActiveUrl={setActiveUrl} title="Supplier" links={supplierLinks} />
                </Box>
                <Box pl="54px">
                    <GroupLinks account={account} setActiveUrl={setActiveUrl} title="Main" links={mainLinks} />
                </Box>
                <MediaQuery minWidth={breakpoints.xl}>
                    <Flex pl="54px">
                        <SocialButtons />
                    </Flex>
                </MediaQuery>
            </Flex>
        </MediaQuery>
        <MediaQuery maxWidth={breakpoints.xl}>
            <MediaQuery minWidth={breakpoints.sm}>
                <Box width="100%" height="1px" bg="gray.3" />
            </MediaQuery>
            <Flex
                pt="35px"
                pb="50px"
                flexDirection={{
                    0: 'column',
                    sm: 'row',
                }}
            >
                <MediaQuery minWidth={breakpoints.sm}>
                    <LogoCopyright />
                </MediaQuery>
                <MediaQuery maxWidth={breakpoints.sm}>
                    <LogoCopyright size="small" />
                </MediaQuery>
                <Flex
                    pl={{
                        0: '0',
                        sm: '100px',
                    }}
                    pt={{
                        0: '20px',
                        sm: '0',
                    }}
                >
                    <SocialButtons />
                </Flex>
            </Flex>
        </MediaQuery>
    </Flex>
)

export default Footer
