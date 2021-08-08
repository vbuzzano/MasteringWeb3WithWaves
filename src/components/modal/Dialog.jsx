import React from 'react'

import * as Controls from './controls'

import { Box, Flex, Text } from '../shared'
import Coupon from '../coupon'
import { connect } from '../../libs/dApp'

const Dialog = ({
    buttons, manageMode, coupon, onClose, onEdit, onBuy, onRemove, onUse, onBurn,
    buttonEnabled,
}) => (
    <Box width="600px">
        <Flex bg={manageMode ? '#4444aa' : 'gray.0'} p="16px">
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

            { buttonEnabled
                ? (
                    <>
                    <Controls.Button color="blue.0" onClick={onEdit}>
                        Edit
                    </Controls.Button>
                    <Controls.Button color="red.0" onClick={onRemove}>
                        Remove
                    </Controls.Button>
                    </>
                )
                : ''
            }

            { buttonEnabled && (coupon.canUse || coupon.item?.canUse)
                ? (
                    <Controls.Button color="blue.0" onClick={onUse}>
                        Use coupon
                    </Controls.Button>
                )
                : ''
            }
  
            { buttonEnabled && (coupon.canBurn || coupon.item?.canBurn)
                ? (
                    <Controls.Button color="blue.0" onClick={onBurn}>
                        Burn
                    </Controls.Button>
                )
                : ''
            }

        </Controls.Footer>
    </Box>
)

export default Dialog
