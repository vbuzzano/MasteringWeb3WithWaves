import styled from 'styled-components'

import { Flex } from '../../shared'

const Border = styled.div`
    border-top: 1px solid #000000;
`
const Footer = styled(Flex).attrs({
    as: Border,
    bg: '#111',
    justifyContent: 'flex-end',
    px: '10px',
})``

export default Footer
