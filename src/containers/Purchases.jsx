/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'

import { Box } from '../components/shared'

const Card = styled(Box)`
    cursor: pointer;
    transition: box-shadow linear 200ms;
    &:hover {
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
`

const Purchases = ({
    loading, isManage, onReject, onAccept, purchases, setActiveUrl,
}) => {
    const list = purchases || []
    console.debug(purchases)

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
        if (isManage) {
            return (
                <div className="alert alert-dark text-center">
                No purchases yet, go to &nbsp;
                    <Box as="span" onClick={() => setActiveUrl('#supplier/coupons')}>
                        <a className="btn btn-primary" href="#supplier/coupons">Manage Coupons</a>
                    </Box>
                &nbsp; to add, update or remove coupons
                </div>
            )
        }
        return (
            <div className="alert text-center">
                No purchases yet, go to &nbsp;
                <a className="btn btn-primary" href="#market" onClick={() => setActiveUrl('#market')}>Market</a>
                &nbsp; to buy coupons
            </div>
        )
    }
    return list.map(purchase => (
        <Box key={purchase.id} p="20px" width={{ 0: '100%', md: 'initial' }}>
            <Box as={Card} className={purchase.status === 'approval' ? 'alert alert-primary' : purchase.status === 'rejected' ? 'alert alert-dark' : 'alert alert-success'}>
                <div>
                    <div className="float-right">
                        <div style={{
                            maxWidth: '200px', width: '200px', maxHeight: '60px', overflow: 'hidden',
                        }}
                        >
                            <img src={purchase.item.image} style={{ maxWidth: '200px', width: '200px' }} alt="" />
                        </div>
                        <ul>
                            <li>{`isBurned: ${purchase.isBurned}`}</li>
                            <li>{`isExpired: ${purchase.isExpired}`}</li>
                            <li>{`isFundPaid: ${(purchase.isFundPaid)}`}</li>
                        </ul>
                    </div>
                    {' '}
                    {purchase.status === 'approval' && !isManage ? 'Waiting Supplier Approval' : ''}
                    {purchase.status === 'rejected' && !isManage ? 'You purchase has been rejected and refunded by supplier' : ''}
                    {purchase.status === 'accepted' && !isManage ? 'You purchase has been accepted by supplier, and the coupon has been sent to you' : ''}
                    {isManage ? purchase.status : ''}
                    <br />
                    <br />
                    <ul>
                        <li>
                            Item:&nbsp;
                            {purchase.item.name}
                        </li>
                        { isManage ? (
                            <li>
                                Customer:&nbsp;
                                {purchase.user}
                            </li>
                        ) : (
                            <li>
                                Supplier:&nbsp;
                                {purchase.supplier}
                            </li>
                        )
                        }
                        <li>
                            Amount:&nbsp;
                            {purchase.amount}
                            &nbsp;WAVES
                        </li>
                        <li>
                            Timestamp:&nbsp;
                            {purchase.timestamp}
                        </li>
                    </ul>
                    <br />
                    <br />
                    {purchase.status === 'approval' && isManage
                        ? (
                            <>
                                <button type="button" className="btn btn-primary" onClick={() => onAccept(purchase)}>
                                    Accept
                                </button>
                                &nbsp;
                                <button type="button" className="btn btn-warning" onClick={() => onReject(purchase)}>
                                    Reject
                                </button>
                            </>
                        )
                        : ''
                    }
                </div>
            </Box>
        </Box>
    ))
}

export default Purchases
