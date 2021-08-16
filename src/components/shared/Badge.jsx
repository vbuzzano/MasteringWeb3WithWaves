import React from 'react'

function Badge({
    text, type = 'secondary', p = 2, m = 0,
}) {
    return (
        <span className={`badge badge-${type} ${p > 0 ? `p-${p}` : ''} ${m > 0 ? `m-${m}` : ''}`}>
            {text}
        </span>
    )
}

export default Badge
