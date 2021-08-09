import React from 'react'
import useForm from 'react-hook-form'
import styled from 'styled-components'

import * as Controls from './controls'

import { Box, Flex } from '../shared'

const HEIGHTS = [300, 400, 500, 600, 700]
const FORM_PARAMETER = 150

const HeightProps = styled.div`
    overflow-y: auto;
    ${HEIGHTS.reduce(
        (accum, val) =>
            `${accum}
        @media (min-height: ${val}px) {
            height: ${val - FORM_PARAMETER}px;
        }
    `,
        '',
    )}
    @media (min-height: 800px) {
        height: initial;
        @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
            height: 700px;
        }
    }
`

const FormVote = ({
    as, buttons, onClose, onSubmit, coupon,
}) => {
    const { register, handleSubmit, errors } = useForm()
    buttons ??= ['submit', 'cancel']
    return (
        <Box
            width="100%"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Box bg="gray.0">
                <Flex p="10px" justifyContent="center">
                    <h2>{`Vote for ${coupon.name}`}</h2>
                </Flex>

                <Flex
                    bg="gray.0"
                    p="16px"
                    flexDirection={{
                        0: 'column',
                        sm: 'row',
                    }}
                    as={(as || HeightProps)}
                >
                    <Box flex={1}>
                        <Box pb="8px">
                            <Controls.Input
                                name="salt"
                                title="Secret words"
                                forwardRef={register({ required: true })}
                                error={errors.salt}
                            />
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Controls.Footer>
                { buttons.includes('cancel') ? (
                    <Controls.Button color="white.0" type="button" onClick={onClose}>
                        Cancel
                    </Controls.Button>
                ) : '' }
                { buttons.includes('submit') ? (
                    <Controls.Button color="blue.0" type="submit">
                        Vote
                    </Controls.Button>
                ) : '' }
            </Controls.Footer>
        </Box>
    )
}

export default FormVote
