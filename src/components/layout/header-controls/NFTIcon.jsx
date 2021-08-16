import React from 'react'
import styled from 'styled-components'

import { iconColor } from './iconColor'

const NFTIcon = ({ isActive, ...rest }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 16 16"
        fill="none"
        className="bi bi-upc"
        {...rest}
    >
        <path d="M3 4.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7zm2 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-7zm3 0a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0v-7z" />
    </svg>
)

export default styled(NFTIcon)`
    ${iconColor}
`
