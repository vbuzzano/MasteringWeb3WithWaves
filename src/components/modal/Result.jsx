/* eslint-disable react/no-danger */
import React from 'react'

import * as Controls from './controls'

import { Box, Flex, Text } from '../shared'

const Result = ({ text, className, onClose }) => {
    className ??= 'bg-light'
    return (
        <Box width="600px" className={`${className} rounded`}>
            <Flex p="16px" flexDirection="column" alignItems="center">
                <Controls.SmallLogo />
                <Text lineHeight="22px" pt="10px" fontSize="18px">
                    <div dangerouslySetInnerHTML={{ __html: text }} />
                </Text>
            </Flex>

            <Controls.Footer>
                <Controls.Button className="text-secondary" onClick={onClose}>Close</Controls.Button>
            </Controls.Footer>
        </Box>
    )
}

export default Result
