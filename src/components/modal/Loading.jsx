/* eslint-disable react/no-danger */
import React from 'react'

import {
    Box, Flex, Text, Loading,
} from '../shared'

const ModalLoading = ({ text }) => (
    <Box width="600px">
        <Flex bg="#222" p="16px" flexDirection="column" alignItems="center" className="rounded-pill">
            <Loading />
            <Text lineHeight="22px" pt="10px" fontSize="18px" color="gray.0" className="mb-5 pb-5">
                <div dangerouslySetInnerHTML={{ __html: text }} className="text-center" />
            </Text>
        </Flex>
    </Box>
)

export default ModalLoading
