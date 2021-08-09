import React from 'react'
import styled from 'styled-components'

import Coupon from '../components/coupon'
import { Box } from '../components/shared'

const Card = styled(Box)`
    cursor: pointer;
    transition: box-shadow linear 200ms;
    &:hover {
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
`

const Coupons = ({
    loading, setActiveUrl, isManageCoupons, onDialogOpen, coupons,
}) => {
    const list = coupons || []
    if (loading) {
        return (
            <div className="text-center">
                <div className="spinner-border text-primary" role="status">
                    <span className="sr-only">...</span>
                </div>
            </div>
        )
    }
    if (list.length === 0) {
        if (isManageCoupons) {
            return (
                <div className="alert alert-dark text-center">
                    No coupons yet, add a coupon to start
                </div>
            )
        }
        return (
            <div className="alert alert-dark text-center">
                No coupons yet, go to &nbsp;
                <a className="btn btn-primary" href="#market" onClick={() => setActiveUrl('#market')}>Market</a>
                &nbsp; to buy coupons
            </div>
        )
    }

    return list.map(coupon => (
        <Box key={coupon.id} p="20px" width={{ 0: '100%', md: 'initial' }}>
            <Box as={Card}>
                <Coupon
                    width={{ 0: '100%', md: '300px' }}
                    height="300px"
                    {...(coupon.item || coupon)}
                    onClick={() => onDialogOpen(coupon, isManageCoupons)}
                />
            </Box>
        </Box>
    ))
}

export default Coupons
