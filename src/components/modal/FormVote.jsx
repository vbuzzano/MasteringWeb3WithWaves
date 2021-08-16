/* eslint-disable max-len */
import React from 'react'
import useForm from 'react-hook-form'

import * as Controls from './controls'

import { Box } from '../shared'

const FormVote = ({
    buttons, onClose, onSubmit, item,
}) => {
    const { register, handleSubmit, errors } = useForm()
    buttons ??= ['submit', 'cancel']
    const vote = item?.isFeatured ? 'delisted' : 'featured'
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
                name="vote"
                defaultValue={vote}
                forwardRef={register({ required: false })}
            />
            <Box bg="gray.0" className="card">
                <div className="card-body">
                    <h4 className="card-title text-center">{`Voting for ${item?.name}`}</h4>
                    <div className="card-img-top" style={{ maxHeight: '200px', overflow: 'hidden' }}>
                        <img src={item?.image} className="card-img-top" alt="..." />
                    </div>
                    {item?.isFeatured ? (
                        <h4 className="card-subtitle my-2 text-muted">Delisting coupon from featured list</h4>
                    ) : (
                        <h4 className="card-subtitle my-2 text-muted">Listing coupon to featured list</h4>
                    )}

                    <p className="card-text">
                        In order to participate in adding or removing a coupon from the list of highlighted coupons, you should vote.
                    </p>
                    <div className="card-text">
                        <ul className="list-unstyled">
                            <li>Voting is done in two steps</li>
                            <ul>
                                <li>
                                    <b>Commit</b>
                                    {' your vote by using a secret phrase.'}
                                </li>
                                <li>
                                    {'Once the required number of participants is reached, you must '}
                                    <b>reveal</b>
                                    {' your vote for it to be effective.'}
                                </li>
                            </ul>
                        </ul>
                    </div>
                    <div className="card-text">

                        <Controls.Input
                            control="select"
                            title="What do you want ? Feature or Delist this coupon ?"
                            name="vote"
                            className="custom-select"
                            forwardRef={register({ required: true })}
                            error={errors.vote}
                            defaultValue={item.isFeatured ? 'delisted' : 'featured'}

                        >
                            <option value="featured">Add to featured list</option>
                            <option value="delisted">Remove from featured list</option>
                        </Controls.Input>
                    </div>
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
                        Commit
                    </Controls.Button>
                ) : '' }
            </Controls.Footer>
        </Box>
    )
}

export default FormVote
