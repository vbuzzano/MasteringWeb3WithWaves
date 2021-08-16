/* eslint-disable jsx-a11y/accessible-emoji */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import React from 'react'
import useForm from 'react-hook-form'

import * as Controls from './controls'

import { Box } from '../shared'

const FormReveal = ({
    buttons, onClose, onSubmit, item, voting,
}) => {
    const { register, handleSubmit, errors } = useForm()
    buttons ??= ['submit', 'cancel']
    return (
        <Box
            width="80%"
            margin="auto"
            as="form"
            onSubmit={handleSubmit(onSubmit)}
        >
            <Controls.Input
                type="hidden"
                name="item"
                defaultValue={item?.id}
                forwardRef={register({ required: false })}
            />
            <Controls.Input
                type="hidden"
                name="name"
                defaultValue={item?.name}
                forwardRef={register({ required: false })}

            />

            <Controls.Input
                type="hidden"
                name="commit"
                defaultValue={voting?.commit}
                forwardRef={register({ required: false })}

            />

            <Box bg="gray.0" className="card">
                <div className="card-body">
                    <h4 className="card-title text-center">{`Voting for ${item?.name}`}</h4>
                    <div className="card-img-top" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                        <img src={item?.image} className="card-img-top" alt="..." />
                    </div>
                    <h4 className="card-subtitle my-2 text-muted">Vote for listing or delisting coupon from featured list</h4>
                    <p className="card-text">
                        It's time to reveal your vote to the world and list or delist this coupon
                        {' '}
                        <span role="img">😎</span>
                    </p>
                    <div className="card-text">
                        <Controls.Input
                            name="salt"
                            title="Secret phrase"
                            forwardRef={register({ required: true })}
                            error={errors.salt}
                        />
                        <div className="alert alert-warning">Do not lose your secret phrase, or you will not be able to reveal you vote at step 2</div>
                    </div>
                </div>
            </Box>

            <Controls.Footer>
                { buttons.includes('cancel') ? (
                    <Controls.Button className="text-secondary" type="button" onClick={onClose}>
                        Cancel
                    </Controls.Button>
                ) : '' }
                { buttons.includes('submit') ? (
                    <Controls.Button className="text-warning" type="submit">
                        Reveal
                    </Controls.Button>
                ) : '' }
            </Controls.Footer>
        </Box>
    )
}

export default FormReveal
