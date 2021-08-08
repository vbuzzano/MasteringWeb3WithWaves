import { combineReducers } from 'redux'

// import dApp from './dApp'
import coupons from './coupons'
import root from './root'

export default () =>
    combineReducers({
        // dApp,
        coupons,
        root,
    })
