/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'

import { Box } from '../components/shared'
import {
    colorStatus, formatDate, formatNumber, shortAddress,
} from '../libs/dApp'
import { useCouponDialogs } from '../components/service'
import Badge from '../components/shared/Badge'
import { NFTIcon, UserIcon } from '../components/layout/header-controls'

const Card = styled(Box)`
    cursor: pointer;
    transition: box-shadow linear 200ms;
    &:hover {
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
`

const Purchases = ({
    items, setActiveUrl, mode, isManager, hideEmptyListMessage, enableVoting,
}) => {
    const {
        CouponDialogs, showItem,
        onAccept, onReject,
    } = useCouponDialogs()

    items ??= []

    return (
        <>
        {items.length === 0 && isManager && !hideEmptyListMessage ? (
            <div className="alert alert-dark text-center">
                No purchases yet, go to &nbsp;
                <Box as="span" onClick={() => setActiveUrl('#supplier/manage')}>
                    <a className="btn btn-primary" href="#supplier/manage">Manage Coupons</a>
                </Box>
                &nbsp; to add, update or remove coupons
            </div>
        ) : null }

        {items.length === 0 && !isManager && !hideEmptyListMessage ? (
            <div className="alert text-center">
            No purchases yet, go to &nbsp;
                <a className="btn btn-primary" href="#market" onClick={() => setActiveUrl('#market')}>Market</a>
            &nbsp; to buy coupons
            </div>
        ) : null }

        {items.length > 0 ? (
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Coupon</th>
                        <th>&nbsp;</th>
                        <th>{isManager ? 'Buyer' : 'Supplier'}</th>
                        <th>Price</th>
                        <th>Expire</th>
                        <th>Status</th>
                        {isManager && mode !== 'history' ? (<th>Actions</th>) : null}
                    </tr>
                </thead>
                <tbody>
                    {items.map((e) => {
                        const refAddr = isManager ? e.user : e.supplier
                        const supplierName = !isManager ? e.supplierData?.name : null
                        const status = mode === 'history' ? e.status : e.couponStatus
                        const statusColor = colorStatus(status)
                        const couponStatusColor = colorStatus(e.couponStatus)

                        return (
                            <tr key={e.id}>
                                <td className="align-middle">
                                    {`${formatDate(new Date(e.timestamp))}`}
                                </td>
                                <td className="align-middle">
                                    <Card className={`badge badge-${statusColor} p-2`} onClick={() => showItem(e)}>
                                        <div style={{ display: 'block', maxHeight: '20px', overflow: 'hidden' }}>
                                            <img src={e.item.image} width="150px" alt={e.item?.name} />
                                        </div>
                                        <div className="mt-2"><b>{` ${e.item?.name}`}</b></div>
                                    </Card>
                                </td>
                                <td className="align-middle">
                                    { mode === 'history' && typeof e.assetId === 'string' ? (
                                        <ul>
                                            <li className="small">
                                                {'nft: '}
                                                <NFTIcon />
                                                {' '}
                                                <a href={`https://testnet.wavesexplorer.com/assets/${e.assetId}`} target="_blank" rel="noreferrer">{shortAddress(e.assetId)}</a>
                                            </li>
                                            <li className="small">
                                                {'status: '}
                                                <Badge text={e.couponStatus} type={couponStatusColor} p={0} />
                                            </li>
                                        </ul>
                                    ) : null }
                                </td>
                                <td className="align-middle">
                                    <a href={`https://testnet.wavesexplorer.com/address/${refAddr}/`} title={refAddr} target="_blank" rel="noreferrer">
                                        <UserIcon />
                                        { ` ${supplierName || shortAddress(refAddr)}`}
                                    </a>
                                </td>
                                <td className="align-middle">
                                    {`${formatNumber(e.amount)} `}
                                    <span className="small">WAVES</span>
                                </td>
                                <td className="align-middle">
                                    {formatDate(new Date(e.item?.expirationDate))}
                                </td>
                                <td className="align-middle">
                                    <Badge text={status} type={statusColor} />
                                </td>
                                {isManager && mode !== 'history' ? (
                                    <td className="align-middle">
                                        { mode === 'approval' ? (
                                            <div className="btn-group mr-2" role="group" aria-label="Logout">
                                                <button type="button" title="Accept this coupon and send NFT to buyer" className="btn btn-success" onClick={() => onAccept(e)}>
                                                Confirm
                                                </button>
                                                <button type="button" title="Reject this coupon and refund buyer" className="btn btn-danger" onClick={() => onReject(e)}>
                                                Reject
                                                </button>
                                            </div>
                                        ) : null}
                                    </td>
                                ) : null }
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        ) : null }

        <CouponDialogs isManager={isManager} mode={mode} enableVoting={enableVoting} />
        </>
    )
}

export default Purchases
