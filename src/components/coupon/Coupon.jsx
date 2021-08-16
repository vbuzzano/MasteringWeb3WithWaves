import React, { memo } from 'react'
import LinesEllipsis from 'react-lines-ellipsis'
import memoizeOne from 'memoize-one'

import { Rating, Price, Discount } from './coupon-controls'

import {
    Badge, Box, Flex, Text,
} from '../shared'
import { formatDate, formatNumber } from '../../libs/dApp'

const isEmpty = memoizeOne(val => val === undefined || val === 0)

const Coupon = ({
    isManageCoupons,
    name,
    title,
    image,
    rating,
    ratings,
    shortDescription,
    longDescription,
    couponTerm,
    priceTerm,
    oldPrice,
    newPrice,
    discount,
    isExpired,
    onClick,
    couponPrice,
    expirationDate,
    ...rest
}) => (
    <Box width="300px" height="300px" position="relative" onClick={onClick} {...rest}>
        <Box position="relative">
            <Box
                height="117px"
                style={{ backgroundImage: `url(${image?.length > 0 ? image : 'https://cdn1.savepice.ru/uploads/2019/6/5/3eaf1f99a32f8045847ac9f02eb81344-full.png'})`, backgroundSize: 'cover' }}
            />
            {!isEmpty(expirationDate) && (
                <Box position="absolute" bottom="0px" left="0px">
                    <Text>
                        {isExpired ? (
                            <Badge type="danger" p={1} m={1} text="expired" />
                        ) : (
                            <Badge type="light" p={1} m={1} text={`expire ${formatDate(new Date(expirationDate))}`} />
                        )}
                    </Text>
                </Box>
            )}
            {!isEmpty(discount) && (
                <Box position="absolute" top="20px" right="10px">
                    <Discount>{`${discount}%`}</Discount>
                </Box>
            )}
        </Box>
        <Box px="20px" pt="10px">
            {!isEmpty(rating) && <Rating value={rating}>{`${rating} (${ratings} ratings)`}</Rating>}
            <Text
                letterSpacing="0.4375px"
                lineHeight="22px"
                fontWeight="bold"
                pt="10px"
                fontSize="14px"
            >
                {name}
            </Text>
            <Text lineHeight="18px" fontWeight="200" pt="8px" fontSize="12px">
                <LinesEllipsis
                    text={shortDescription}
                    maxLine="2"
                    ellipsis="..."
                    trimRight
                    basedOn="letters"
                />
            </Text>
            <Text lineHeight="18px" fontWeight="normal" pt="8px" fontSize="12px">
                {title}
            </Text>
            <Flex position="absolute" bottom="20px" width="100%" pr="40px">
                <Text
                    color="blue.0"
                    letterSpacing="0.4375px"
                    lineHeight="22px"
                    fontWeight="bold"
                    fontSize="14px"
                    flex={1}
                >
                    {`${formatNumber(couponPrice)} ${couponTerm}`}
                </Text>
                {oldPrice !== newPrice && (
                    <Price term={priceTerm} isOld>
                        {oldPrice}
                    </Price>
                )}
                <Price term={priceTerm}>{newPrice}</Price>
            </Flex>
        </Box>
    </Box>
)

Coupon.defaultProps = { priceTerm: '$' }

export default memo(Coupon)
