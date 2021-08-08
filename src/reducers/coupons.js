import { createImmutableReducer } from '../libs/redux-actions'

const initialState = { list: [1, 2, 3, 4] }

export default createImmutableReducer(initialState, {})
