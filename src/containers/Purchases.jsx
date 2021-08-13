/* eslint-disable no-nested-ternary */
import React from 'react'

import { Box } from '../components/shared'
import { formatNumber, shortAddress } from '../libs/dApp'

const formatDate = date => date.toLocaleDateString('en-US')

const Purchases = ({
    purchases, setActiveUrl, isManage, loading, onReject, onAccept, onBurn, onWithdraw,
}) => {
    const list = purchases || []

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
                    <Box as="span" onClick={() => setActiveUrl('#supplier/manage')}>
                        <a className="btn btn-primary" href="#supplier/manage">Manage Coupons</a>
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
    return (
        <table className="table table-striped">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Coupon</th>
                    <th>{isManage ? 'Buyer address' : 'Supplier address'}</th>
                    <th>
                        {isManage ? isManage === 'withdraw' ? 'Unlocked Funds' : 'Locked Funds' : 'Paid'}
                    </th>
                    <th>Expire</th>
                    <th>
                        {isManage && isManage !== 'history' ? 'Action' : 'Status'}
                    </th>
                </tr>
            </thead>
            <tbody>
                {purchases.map((e) => {
                    const refAddr = isManage ? e.user : e.supplier
                    const classColor = e.status === 'approval' ? 'dark'
                        : e.status === 'rejected' ? 'danger'
                            : e.status === 'accepted' ? 'success'
                                : e.status === 'used' ? 'secondary'
                                    : 'primary'
                    return (
                        <tr key={e.id}>
                            <td className="align-middle">
                                {`${formatDate(new Date(e.timestamp))}`}
                            </td>
                            <td className="align-middle">
                                <div className={`badge badge-${classColor} p-2`}>
                                    <div style={{ display: 'block', maxHeight: '20px', overflow: 'hidden' }}>
                                        <img src={e.item.image} width="150px" alt={e.item?.name} />
                                    </div>
                                    <b>{` ${e.item?.name}`}</b>
                                </div>
                            </td>
                            <td className="align-middle">
                                <a href={`https://testnet.wavesexplorer.com/address/${refAddr}/`} title={refAddr} target="_blank" rel="noreferrer">
                                    {shortAddress(refAddr)}
                                </a>
                            </td>
                            <td className="align-middle">
                                {`${formatNumber(e.amount)} WAVES`}
                            </td>
                            <td className="align-middle">
                                {e.item?.expirationDate}
                                {' '}
                                {e.isExpired ? ' true ' : ' false '}
                                {' '}
                                {e.isReceived ? ' true ' : ' false '}
                                {' '}
                                {e.isOwned ? ' true ' : ' false '}
                                {e.isFundPaid ? ' true ' : ' false '}
                            </td>
                            <td className="align-middle">
                                { isManage === 'approval' ? (
                                    <div className="btn-group mr-2" role="group" aria-label="Logout">
                                        <button type="button" title="Accept this coupon and send NFT to buyer" className="btn btn-success" onClick={() => onAccept(e)}>
                                        Confirm
                                        </button>
                                        <button type="button" title="Reject this coupon and refund buyer" className="btn btn-danger" onClick={() => onReject(e)}>
                                        Reject
                                        </button>
                                    </div>
                                ) : null}

                                { isManage === 'withdraw' ? (
                                    <button type="button" title="Withdraw Funds" className="btn btn-success" onClick={() => onWithdraw(e)}>
                                        Withdraw Funds
                                    </button>
                                ) : null}

                                { isManage === 'history' ? (
                                    <span className={`badge badge-${classColor}`}>
                                        {e.status}
                                    </span>
                                ) : null}

                                { isManage === 'burn' ? (
                                    <button type="button" className="btn btn-primary" onClick={() => onBurn(e)}>
                                        Burn Coupon
                                    </button>
                                ) : null}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Purchases
