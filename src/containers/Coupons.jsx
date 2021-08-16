import React from 'react'
import styled from 'styled-components'

import Coupon from '../components/coupon'
import { useCouponDialogs } from '../components/service'
import { Box } from '../components/shared'

const Card = styled(Box)`
    cursor: pointer;
    transition: box-shadow linear 200ms;
    &:hover {
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
`

const Coupons = ({
    setActiveUrl, mode, isManager, items, hideEmptyListMessage, enableVoting,
}) => {
    const { CouponDialogs, showItem } = useCouponDialogs()
    items ??= []
    return (
        <>
            {isManager && items.length === 0 && !hideEmptyListMessage ? (
                <div className="alert alert-dark text-center">
                    No coupons yet, add a coupon to start
                </div>
            ) : null }
            {!isManager && items.length === 0 && !hideEmptyListMessage ? (
                <div className="alert alert-dark text-center">
                    No coupons yet, go to &nbsp;
                    <a className="btn btn-primary" href="#market" onClick={() => setActiveUrl('#market')}>Market</a>
                    &nbsp; to buy coupons
                </div>
            ) : null }

            {items.length > 0 ? items.map(e => (
                <Box key={e.id} p="20px" width={{ 0: '100%', md: 'initial' }}>
                    <Box as={Card}>
                        <div className={e.isExpired ? 'alert alert-danger p-1 m-0' : ''}>
                            <Coupon
                                width={{ 0: '100%', md: '300px' }}
                                height="300px"
                                {...(e.item || e)}
                                onClick={() => showItem(e)}
                            />
                            {e.isExpired ? (
                                <div className="p-1 text-center" style={{ backgroundColor: 'rgba(255,255,255,0.5)' }}>This coupon has expired</div>
                            ) : null}
                        </div>
                    </Box>
                </Box>
            )) : null }

            <CouponDialogs mode={mode} enableVoting={enableVoting} isManager={isManager} />
        </>
    )
}

export default Coupons
