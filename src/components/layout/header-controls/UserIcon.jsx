import React from 'react'
import styled from 'styled-components'

import { iconColor } from './iconColor'

const UserIcon = ({ isActive, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
        className="bi bi-person-fill"
        {...rest}
    >
        <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
    </svg>
)

export default styled(UserIcon)`
    ${iconColor}
`
