/* eslint-disable no-nested-ternary */
import React from 'react'

import { currentAccount, getVoting } from '../../libs/dApp'

const BTVoting = ({
    item, voting, onCommitVote, onRevealVote, buttonClassName = 'btn btn-warning', textClassName = 'text-secondary', ...props
}) => {
    const { address: user } = currentAccount()

    if (user && !voting) {
        voting = getVoting(item, user)
    }

    const { canCommit, canReveal } = voting || {}
    console.log('canCommit', canCommit ? 'true' : 'false')

    return (
        <>
            {canCommit ? (
                <button type="button" className={buttonClassName} onClick={() => onCommitVote(item, voting)} {...props}>
                    Vote
                </button>
            ) : canReveal ? (
                <button type="button" className={buttonClassName} onClick={() => onRevealVote(item, voting)} {...props}>
                    Reveal your vote
                </button>
            ) : voting?.commit && voting?.status === 'voting' ? (
                <span className={textClassName}>Waiting end of commit step</span>
            ) : voting?.reveal && voting?.status === 'reveal' ? (
                <span className={textClassName}>Waiting end of reveal step</span>
            ) : null}
        </>
    )
}

export default BTVoting
