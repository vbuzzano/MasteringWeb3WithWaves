/* eslint-disable max-len */
import React from 'react'

import * as Controls from './controls'

import { Box, Flex, Text } from '../shared'
import Coupon from '../coupon'
import { colorStatus, connect, shortAddress } from '../../libs/dApp'
import Badge from '../shared/Badge'
import BTVoting from '../custom/btVoting'

const Dialog = ({
    buttons, coupon, onClose, onEdit, onBuy, onRemove, onUse, onBurn, onVote, onReveal, onWithdraw, onAccept, onReject,
}) => {
    buttons ??= ['cancel', 'buy']
    return (
        <>
        <Box width="600px">
            <Flex p="16px" bg="gray.0" className="rounded">
                <div className={coupon.isExpired ? 'alert alert-danger p-1 m-0' : ''}>
                    <Box flex={1}>
                        <Coupon {...(coupon.item || coupon)} />
                        {coupon.isExpired ? (
                            <div className="p-1 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>This coupon has expired</div>
                        ) : null}

                    </Box>
                </div>
                <Box pl="16px">
                    <Controls.SmallLogo />
                    <Text lineHeight="22px" fontWeight="bold" pt="10px" fontSize="22px">
                        { coupon.item?.longTitle || coupon.item?.title || coupon.longTitle || coupon.title }
                    </Text>
                    <Text lineHeight="18px" pt="10px" fontSize="14px">
                        { coupon.item?.longDescription || coupon.item?.shortDescription || coupon.longDescription || coupon.shortDescription }
                    </Text>
                    {coupon.assetId ? (
                        <>
                        <Text lineHeight="18px" pt="10px" fontSize="12px">
                            {'nft: '}
                            <a href={`https://testnet.wavesexplorer.com/assets/${coupon.assetId}/`} target="_blank" rel="noreferrer">{shortAddress(coupon.assetId)}</a>
                        </Text>
                        <Text lineHeight="18px" pt="10px" fontSize="12px">
                            {'supplier: '}
                            <a href={`https://testnet.wavesexplorer.com/address/${coupon.supplier}/`} target="_blank" rel="noreferrer">
                                {coupon.supplierData?.name || shortAddress(coupon.supplier)}
                            </a>
                        </Text>
                        <Text lineHeight="18px" pt="10px" fontSize="12px">
                            {'status: '}
                            <Badge text={coupon.couponStatus} type={colorStatus(coupon.couponStatus)} p={0} />
                        </Text>
                        </>
                    ) : null }
                </Box>
            </Flex>

            <Controls.Footer>
                <Controls.Button className="text-secondary" onClick={onClose}>Cancel</Controls.Button>
                { buttons.includes('login')
                    ? (
                        <Controls.Button className="text-primary" onClick={connect}>
                        Login
                        </Controls.Button>
                    )
                    : null
                }

                { buttons.includes('vote') && !coupon.isExpired
                    ? (
                        <BTVoting
                            item={coupon.item || coupon}
                            voting={coupon.voting}
                            onCommitVote={onVote}
                            onRevealVote={onReveal}
                            buttonClassName="text-warning font-weight-bold"
                            textClassName="text-white-50 font-weight-bold small pt-1 mt-2"
                            style={{ fontSize: '18px' }}
                        />
                    ) : null
                }

                { buttons.includes('buy') && !coupon.isExpired
                    ? (
                        <Controls.Button className="text-success" onClick={onBuy}>
                        Buy
                        </Controls.Button>
                    )
                    : null
                }

                { buttons.includes('edit') ? (
                    <Controls.Button className="text-primary" onClick={onEdit}>
                        Edit
                    </Controls.Button>
                ) : null }

                { buttons.includes('remove') ? (
                    <Controls.Button className="text-danger" onClick={onRemove}>
                        Remove
                    </Controls.Button>
                ) : null }

                { buttons.includes('use') && coupon.isOwned
                    ? (
                        <Controls.Button className="text-success" onClick={onUse}>
                        Use coupon
                        </Controls.Button>
                    )
                    : null
                }

                { buttons.includes('burn')
                    ? (
                        <Controls.Button color="text-primary" onClick={onBurn}>
                        Burn
                        </Controls.Button>
                    )
                    : null
                }
                { buttons.includes('withdraw')
                    ? (
                        <Controls.Button className="text-success" onClick={onWithdraw}>
                        Withdraw Fund
                        </Controls.Button>
                    )
                    : null
                }
                { buttons.includes('reject')
                    ? (
                        <Controls.Button className="text-danger" onClick={onReject}>
                        Reject
                        </Controls.Button>
                    )
                    : null
                }
                { buttons.includes('accept')
                    ? (
                        <Controls.Button className="text-success" onClick={onAccept}>
                        Confirm
                        </Controls.Button>
                    )
                    : null
                }
            </Controls.Footer>
        </Box>
        </>
    )
}

export default Dialog
