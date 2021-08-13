/* eslint-disable max-len */
import React from 'react'

import * as Controls from './controls'

import { Box, Flex, Text } from '../shared'
import Coupon from '../coupon'
import { connect } from '../../libs/dApp'

const Dialog = ({
    buttons, coupon, onClose, onEdit, onBuy, onRemove, onUse, onBurn, onVote,
}) => {
    buttons ??= ['cancel', 'buy']
console.info(buttons)
    return (
        <>
        <Box width="600px">
            <Flex bg="gray.0" p="16px">
                <Box flex={1}>
                    <Coupon {...(coupon.item || coupon)} />
                </Box>

                <Box pl="16px">
                    <Controls.SmallLogo />
                    <Text lineHeight="22px" fontWeight="bold" pt="10px" fontSize="22px">
                        { coupon.item?.longTitle || coupon.item?.title || coupon.longTitle || coupon.title }
                    </Text>
                    <Text lineHeight="18px" pt="10px" fontSize="14px">
                        { coupon.item?.longDescription || coupon.item?.shortDescription || coupon.longDescription || coupon.shortDescription }
                    </Text>
                </Box>
            </Flex>

            <Controls.Footer>
                <Controls.Button onClick={onClose}>Cancel</Controls.Button>
                { buttons.includes('login')
                    ? (
                        <Controls.Button color="blue.0" onClick={connect}>
                        Login
                        </Controls.Button>
                    )
                    : ''
                }
                { buttons.includes('buy')
                    ? (
                        <Controls.Button color="blue.0" onClick={onBuy}>
                        Buy
                        </Controls.Button>
                    )
                    : ''
                }

                { buttons.includes('edit') ? (
                    <Controls.Button color="blue.0" onClick={onEdit}>
                        Edit
                    </Controls.Button>
                ) : '' }

                { buttons.includes('remove') ? (
                    <Controls.Button color="red.0" onClick={onRemove}>
                        Remove
                    </Controls.Button>
                ) : '' }

                { buttons.includes('use')
                    ? (
                        <Controls.Button color="blue.0" onClick={onUse}>
                        Use coupon
                        </Controls.Button>
                    )
                    : ''
                }

                { buttons.includes('vote')
                    ? (
                        <Controls.Button color="blue.0" onClick={onVote}>
                        Vote
                        </Controls.Button>
                    )
                    : ''
                }

                { buttons.includes('burn') && (coupon.canBurn || coupon.item?.canBurn)
                    ? (
                        <Controls.Button color="blue.0" onClick={onBurn}>
                        Burn
                        </Controls.Button>
                    )
                    : ''
                }
            </Controls.Footer>
        </Box>
        </>
    )
}

export default Dialog
