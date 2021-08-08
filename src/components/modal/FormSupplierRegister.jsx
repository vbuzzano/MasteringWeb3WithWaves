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

const FormSupplierRegister = ({ onClose, onSubmit }) => {
    const { register, handleSubmit, errors } = useForm()

    return (
        <Box
            width={{
                0: '100%',
                lg: '800px',
            }}
            as="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Box bg="gray.0">
                <Flex p="10px" justifyContent="center">
                    Register as supplier
                </Flex>

                <Flex
                    bg="gray.0"
                    p="16px"
                    flexDirection={{
                        0: 'column',
                        sm: 'row',
                    }}
                    as={HeightProps}
                >
                    <Box flex={1}>
                        <Box pb="8px">
                            <Controls.Input
                                name="name"
                                title="Name"
                                forwardRef={register({ required: true })}
                                error={errors.name}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                type="email"
                                name="email"
                                title="Email"
                                forwardRef={register({ required: true })}
                                error={errors.email}
                            />
                        </Box>

                        <Box pb="8px">
                            <Controls.Input
                                name="description"
                                title="About you"
                                height="150px"
                                width="100%"
                                control="textarea"
                                forwardRef={register({ required: false })}
                                error={errors.description}
                            />
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Controls.Footer>
                <button type="button" onClick={onClose}>Cancel</button>
                <Controls.Button color="blue.0" type="submit">
                    Register
                </Controls.Button>
            </Controls.Footer>
        </Box>
    )
}

export default FormSupplierRegister
