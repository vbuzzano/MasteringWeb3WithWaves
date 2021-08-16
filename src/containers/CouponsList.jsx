/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'

import BTVoting from '../components/custom/btVoting'
import { NFTIcon, UserIcon } from '../components/layout/header-controls'
import { useCouponDialogs } from '../components/service'
import { Box } from '../components/shared'
import Badge from '../components/shared/Badge'
import {
    colorStatus, formatDate, formatNumber, shortAddress,
} from '../libs/dApp'

const Card = styled(Box)`
    cursor: pointer;
    transition: box-shadow linear 200ms;
    &:hover {
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
`

const CouponsList = ({
    mode, isManager, items, setActiveUrl, hideEmptyListMessage, enableVoting,
}) => {
    const {
        CouponDialogs, showItem,
        onWithdraw, onBurn,
        onAccept, onReject,
        onVote, onReveal,
    } = useCouponDialogs()

    items ??= []

    return (
        <>
        {items.length === 0 && isManager && !hideEmptyListMessage ? (
            <div className="alert alert-dark text-center">
            No coupons yet, go to &nbsp;
                <Box as="span" onClick={() => setActiveUrl('#supplier/manage')}>
                    <a className="btn btn-primary" href="#supplier/manage">Manage Coupons</a>
                </Box>
            &nbsp; to add, update or remove coupons
            </div>
        ) : null }

        {items.length === 0 && !isManager && !hideEmptyListMessage ? (
            <div className="alert text-center">
            No coupons yet, go to &nbsp;
                <a className="btn btn-primary" href="#market" onClick={() => setActiveUrl('#market')}>Market</a>
            &nbsp; to buy coupons
            </div>
        ) : null }

        {items.length > 0 ? (
            <div className="table-responsive-sm">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Date</th>
                            <th>Coupon</th>
                            <th>NFT Address</th>
                            <th>{isManager ? 'Owned by' : 'Supplier'}</th>
                            <th>
                                {isManager ? mode === 'withdraw' ? 'Available Funds' : 'Locked Funds' : 'Paid'}
                            </th>
                            <th>Expire</th>
                            <th>Status</th>
                            <th>{isManager ? 'Actions' : 'Voting' }</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map((e) => {
                            let refAddr = ''
                            if (e.isManager && e.isOwned) refAddr = e.supplier
                            else if (e.isManager && !e.isOwned) refAddr = e.user
                            else if (e.isOwned) refAddr = e.user
                            else refAddr = e.supplier

                            const refName = refAddr === e.supplier ? e.supplierData?.name || null : refAddr

                            const status = e.couponStatus
                            const statusColor = colorStatus(status)
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
                                        <a href={`https://testnet.wavesexplorer.com/assets/${e.assetId}/`} title={e.assetId} target="_blank" rel="noreferrer">
                                            <NFTIcon />
                                            {' '}
                                            {shortAddress(e.assetId)}
                                        </a>
                                    </td>
                                    <td className="align-middle">
                                        <a href={`https://testnet.wavesexplorer.com/address/${refAddr}/`} title={refAddr} target="_blank" rel="noreferrer">
                                            <UserIcon />
                                            {' '}
                                            {e.isOwned ? ' You ' : refName || shortAddress(refAddr)}
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
                                    <td className="align-middle">
                                        <>
                                            {isManager && mode !== 'history' ? (
                                                <div>
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

                                                    { mode === 'withdraw' ? (
                                                        <button type="button" title={e.isOwned ? 'Burn + Withdraw Funds' : 'Withdraw Funds'} className="btn btn-success" onClick={() => onWithdraw(e)}>
                                                            Withdraw Funds
                                                        </button>
                                                    ) : null}

                                                    { mode === 'burn' ? (
                                                        <button type="button" className="btn btn-primary" onClick={() => onBurn(e)}>
                                                            Burn Coupon
                                                        </button>
                                                    ) : null}
                                                </div>
                                            ) : null }
                                            { !isManager && (mode === 'active' || mode === 'used' || mode === 'history') ? (
                                                <BTVoting
                                                    item={e.item || e}
                                                    voting={e.voting}
                                                    onCommitVote={onVote}
                                                    onRevealVote={onReveal}
                                                />
                                            ) : null}
                                        </>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        ) : null }

        <CouponDialogs isManager={isManager} mode={mode} enableVoting={enableVoting} />
        </>
    )
}

export default CouponsList
