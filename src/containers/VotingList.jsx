/* eslint-disable max-len */
/* eslint-disable no-nested-ternary */
import React from 'react'
import styled from 'styled-components'

import BTVoting from '../components/custom/btVoting'
import { useCouponDialogs } from '../components/service'
import { Box } from '../components/shared'
import { formatDate } from '../libs/dApp'

const Card = styled(Box)`
    cursor: pointer;
    transition: box-shadow linear 200ms;
    &:hover {
        box-shadow: 1px 2px 5px rgba(0, 0, 0, 0.5);
    }
`

const VotingList = ({
    mode, items, setActiveUrl, hideEmptyListMessage,
}) => {
    const {
        CouponDialogs, showItem,
        onVote, onReveal,
    } = useCouponDialogs()

    items ??= []

    return (
        <>
        {items.length === 0 && !hideEmptyListMessage ? (
            <div className="alert text-center">
            No coupons yet, go to &nbsp;
                <a className="btn btn-primary" href="#featured" onClick={() => setActiveUrl('#featured')}>Market</a>
            &nbsp; to buy coupons
            </div>
        ) : null }

        {items.length > 0 ? (
            <div className="table-responsive-sm">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <th>Coupon</th>
                            <th>Expire</th>
                            <th>Round</th>
                            <th>Voting</th>
                        </tr>
                    </thead>
                    <tbody>
                        {items.map(e => (
                            <tr key={e.id}>
                                <td className="align-middle">
                                    <Card className="badge badge-primary p-2" onClick={() => showItem(e)}>
                                        <div style={{ display: 'block', maxHeight: '20px', overflow: 'hidden' }}>
                                            <img src={e.image} width="150px" alt={e.name} />
                                        </div>
                                        <div className="mt-2"><b>{` ${e.name}`}</b></div>
                                    </Card>
                                </td>
                                <td className="align-middle">
                                    {formatDate(new Date(e.expirationDate))}
                                </td>
                                <td className="align-middle">
                                    <span className="badge badge-primary rounded p-3" style={{ fontSize: '18px', minWidth: '80px' }}>{e.voting.round + 1}</span>
                                </td>
                                <td className="align-middle">
                                    <BTVoting
                                        item={e}
                                        voting={e.voting}
                                        onCommitVote={onVote}
                                        onRevealVote={onReveal}
                                    />
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        ) : null }

        <CouponDialogs mode={mode} enableVoting />
        </>
    )
}

export default VotingList
