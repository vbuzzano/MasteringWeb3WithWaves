/* eslint-disable react/no-danger */
import React from 'react'

import * as Controls from './controls'

import { Box, Flex, Text } from '../shared'

const Result = ({ text, onClose }) => (
    <Box width="600px">
        <Flex bg="gray.0" p="16px" flexDirection="column" alignItems="center">
            <Controls.SmallLogo />
            <Text lineHeight="22px" pt="10px" fontSize="18px">
                <div dangerouslySetInnerHTML={{ __html: text }} />
            </Text>
        </Flex>

        <Controls.Footer>
            <Controls.Button onClick={onClose}>Close</Controls.Button>
        </Controls.Footer>
    </Box>
)

export default Result
