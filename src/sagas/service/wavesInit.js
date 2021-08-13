/* eslint-disable no-alert */
import {
    invokeScript, broadcast, nodeInteraction, waitForTx,
} from '@waves/waves-transactions'
import { stringToUint8Array, sha256, base58encode } from '@waves/waves-crypto'
import { call } from 'redux-saga/effects'

import * as dApp from '../../libs/dApp'
import { fetchData } from '../../libs/dApp'

// import AuthService from './auth'

window.wc = {
    stringToUint8Array,
    sha256,
    base58encode,
}
window.wt = {
    nodeInteraction,
    invokeScript,
    broadcast,
    waitForTx,
}

window.app = dApp

export default function* wavesInit() {
    try {
        console.debug('WavesInit: fetchData')
        yield call(fetchData)
    } catch (error) {
        console.log(error)
    }

/*
    try {
        const v = yield call(nodeInteraction.accountData, dappAddress, baseUri)
        window.dAppData = v

        window.dAppDataKeys = Object.keys(v)
        // console.log('dApp Account data:')
        // console.log(v)
    } catch (error) {
        console.log(error)
        return
    }

    const { WavesKeeper } = window
    if (!WavesKeeper) {
        alert('To Auth WavesKeeper should be installed.')
        return
    }

    //    const authData = { data: 'Auth on my \'Coupon Bazaar\' site' }

    try {
        const keeperApi = yield call(() => WavesKeeper.initialPromise)
        const state = yield call(keeperApi.publicState)
        console.log('Waves Keeper data:') // displaying the result in the console
        console.log(state)
        window.account = state.account
        // console.log(state.account.network, window.dApp.network)
        if (state.account.network !== window.dApp.network) {
            alert('Please switch WavesKeeper to testnet')
        }
        return
    } catch (error) {
        console.error(error)
    }

    try {
        const auth = yield call(WavesKeeper.auth, authData)
        console.log(auth)
    } catch (error) {
        console.error(error)
    }
*/
}
