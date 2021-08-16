import React from 'react'

function Badge({ text, type = 'secondary', p = 2 }) {
    return (
        <span className={`badge badge-${type} ${p > 0 ? `p-${p}` : ''}`}>
            {text}
        </span>
    )
}

export default Badge
