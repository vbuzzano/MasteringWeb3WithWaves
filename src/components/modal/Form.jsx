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

const Form = ({
    editedItem, onClose, onSubmit,
}) => {
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
            <Box bg="gray.0" className="rounded">
                <Flex p="10px" justifyContent="center">
                    <Controls.SmallLogo />
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
                    <Controls.Input
                        type="hidden"
                        name="id"
                        forwardRef={register({ required: false })}
                        error={errors.id}
                        defaultValue={editedItem?.id}
                    />
                    <Box flex={1}>
                        <Box pb="8px">
                            <Controls.Input
                                name="image"
                                title="Image url"
                                forwardRef={register({ required: false })}
                                error={errors.image}
                                defaultValue={editedItem?.image}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="priceTerm"
                                title="Price term"
                                maxLength="10"
                                forwardRef={register({ required: true })}
                                error={errors.priceTerm}
                                defaultValue={editedItem?.priceTerm}
                            />
                        </Box>

                        <Box pb="8px">
                            <Controls.Input
                                type="number"
                                name="oldPrice"
                                title="Old price"
                                forwardRef={register({ required: true })}
                                error={errors.oldPrice}
                                defaultValue={editedItem?.oldPrice}
                            />
                        </Box>

                        <Box pb="8px">
                            <Controls.Input
                                type="number"
                                name="newPrice"
                                title="New price"
                                forwardRef={register({ required: true })}
                                error={errors.newPrice}
                                defaultValue={editedItem?.newPrice}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="name"
                                title="Name"
                                forwardRef={register({ required: true })}
                                error={errors.name}
                                defaultValue={editedItem?.name}
                                maxLength="25"
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="shortDescription"
                                height="150px"
                                width="100%"
                                control="textarea"
                                title="Short description"
                                forwardRef={register({ required: true })}
                                error={errors.shortDescription}
                                defaultValue={editedItem?.shortDescription}
                                maxLength="50"
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="title"
                                title="Title"
                                forwardRef={register({ required: true })}
                                error={errors.title}
                                defaultValue={editedItem?.title}
                                maxLength="12"
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                type="number"
                                name="couponPrice"
                                title="Coupon price"
                                forwardRef={register({ required: true })}
                                error={errors.couponPrice}
                                defaultValue={editedItem?.couponPrice}
                            />
                        </Box>
                    </Box>

                    <Box
                        pl={{
                            sm: '16px',
                        }}
                        flex={1}
                    >
                        <Box pb="8px">
                            <Controls.Input
                                name="longTitle"
                                title="Long title"
                                maxLength="25"
                                forwardRef={register({ required: false })}
                                error={errors.longTitle}
                                defaultValue={editedItem?.longTitle}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                name="longDescription"
                                height="150px"
                                width="100%"
                                maxLength="500"
                                control="textarea"
                                title="Long description"
                                forwardRef={register({ required: false })}
                                error={errors.longDescription}
                                defaultValue={editedItem?.longDescription}
                            />
                        </Box>
                        <Box pb="8px">
                            <Controls.Input
                                type="date"
                                name="expirationDate"
                                title="Expiration Date"
                                forwardRef={register({ required: true })}
                                error={errors.expirationDate}
                                defaultValue={editedItem?.expirationDate}
                            />
                        </Box>
                    </Box>
                </Flex>
            </Box>

            <Controls.Footer>
                <Controls.Button className="text-secondary" type="button" onClick={onClose}>
                Cancel
                </Controls.Button>
                <Controls.Button className="text-success" type="submit">
                    Save Coupon
                </Controls.Button>
            </Controls.Footer>
        </Box>
    )
}

export default Form
