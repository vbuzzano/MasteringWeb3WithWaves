/* eslint-disable react/no-danger */
import React from 'react'

import {
    Box, Flex, Modal, Text,
} from '../shared'

const ErrorDialog = ({ text, open, onClose }) => (
    <Modal open={open} onClose={onClose} zIndex="99">
        <Box width="600px" bg="#220000" color="gray.0" className="rounded-pill text-center">
            <Flex p="16px" flexDirection="column" alignItems="center">
                <div className="text-center my-3 py-3">
                    <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="currentColor" className="bi bi-exclamation-triangle-fill" viewBox="0 0 16 16">
                        <path d="M8.982 1.566a1.13 1.13 0 0 0-1.96 0L.165 13.233c-.457.778.091 1.767.98 1.767h13.713c.889 0 1.438-.99.98-1.767L8.982 1.566zM8 5c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 5.995A.905.905 0 0 1 8 5zm.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                </div>

                <Text lineHeight="22px" pt="10px" fontSize="18px" className="my-1">
                    <div>{ (typeof text === 'string') && text.length > 0 ? text : '' }</div>
                </Text>
            </Flex>
            <button type="button" className="btn btn-danger text-center mt-3 mb-4" onClick={onClose}>close</button>
        </Box>
    </Modal>
)

export default ErrorDialog
