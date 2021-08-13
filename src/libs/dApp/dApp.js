import { nodeInteraction } from '@waves/waves-transactions'

import EventEmitter from 'events'

import { getSupplierApprovalCounter } from './helper'

import config from '../../../config'

const DEFAULT_ACCOUNT = {
    isConnected: false,
    isSupplier: false,
}
const DEFAULT_NETWORK = config.defaultNetwork || {
    code: 'T',
    matcher: 'https://matcher-testnet.wavesnodes.com/',
    server: 'https://nodes-testnet.wavesnodes.com/',
}
const DEFAULT_STATE = {}

// dapp seed if needed
// hood gorilla maple tag feed make shine public cake devote grace spy neck eager solve
const DAPP_ADDRESS = config.dAppAddress
const BASE_URI = config.defaultNetwork.server
const CHAIN_ID = config.chainId
const NETWORK_ID = config.networkId

const ee = new EventEmitter()
const { WavesKeeper } = window
let WKee = null

const PUBLIC_STATE = 'publicState'
const ACCOUNT = 'account'
const NETWORK = 'network'
const DATA = 'data'

const values = {
    state: DEFAULT_STATE,
    account: DEFAULT_ACCOUNT,
    network: DEFAULT_NETWORK,
    auth: null,
    data: {},
}
const types = [PUBLIC_STATE, ACCOUNT, NETWORK, DATA]

window.dApp = {
    dAppAddress: DAPP_ADDRESS,
    baseUri: BASE_URI,
    chainId: CHAIN_ID,
    network: NETWORK_ID,
}

window.nodeInteraction = nodeInteraction

const notifyAlert = (message) => {
    console.warn(message)
    // eslint-disable-next-line no-alert
    alert(message)
}

const getSession = (address) => {
    if (localStorage) {
        const d = localStorage.getItem(`session_${address}`)
        return d ? JSON.parse(d) : null
    }
    return null
}

const setSession = (session) => {
    const address = session?.address
    if (address && localStorage) {
        localStorage.setItem(`session_${session.address}`, JSON.stringify(session))
    }
}
const delSession = (address) => {
    if (localStorage) localStorage.removeItem(`session_${address}`)
}

function subscribe(type, fn) {
    if (!types.includes(type)) {
        throw Error(`type ${type} not allowed. available types are : ${JSON.stringify(types)}`)
    }
    // console.debug(`subscribe ${type}`)
    ee.on(type, fn)
    fn(values[type])
    return () => {
        // console.debug(`unsubscribe ${type}`)
        ee.off(type, fn)
    }
}

function setValue(type, data) {
    values[type] = data
    window.dApp[type] = data
    ee.emit(type, data)
}

function currentNetwork() {
    return values[NETWORK]
}

function currentAccount() {
    return values[ACCOUNT]
}

async function fetchData() {
    const data = await nodeInteraction.accountData(DAPP_ADDRESS, BASE_URI)
    window.dAppData = data
    window.dAppDataKeys = Object.keys(data)
    console.debug('[ 🔄 dApp data ] :', `${window.dAppDataKeys?.length} keys loaded`)
    setValue(DATA, data)
    return data
}

async function disconnect() {
    delSession(values[ACCOUNT]?.address)
    // eslint-disable-next-line no-use-before-define
    updateState()
}

async function onStateChange(state) {
    console.debug('[ 🔄 Waves Keeper state ] : ', state)
    if (typeof state !== 'object' || typeof state.account !== 'object' || typeof state.network !== 'object') {
        return
    }

    setValue(PUBLIC_STATE, state)

    const account = values[ACCOUNT]
    const nwk = state.network
    let acct = state.account
    if (acct) {
        const session = getSession(acct.address)
        acct.isConnected = session?.address === acct.address

        if (acct.network !== NETWORK_ID || nwk.code !== DEFAULT_NETWORK.code) {
            notifyAlert(`Please switch WavesKeeper to ${NETWORK_ID}`)
            if (account.isConnected) {
                await disconnect()
            }
            acct = DEFAULT_ACCOUNT
        }

        const data = await nodeInteraction.accountDataByKey(`${acct.address}_account`, DAPP_ADDRESS, BASE_URI)
        if (data && data.type === 'string') {
            acct.supplier = JSON.parse(data.value)
        } else {
            delete acct.supplier
        }
        if (typeof acct.supplier === 'object') {
            acct.supplier.approvalCounter = await getSupplierApprovalCounter(acct.address)
            acct.isSupplier = true
        }

        setValue(ACCOUNT, acct)
        if (Boolean(account.isConnected) !== Boolean(acct.isConnected)) {
            await fetchData()
        }
    }
    setValue(NETWORK, nwk)
}

const onApiListener = () => {
    WKee = WavesKeeper.on('update', onStateChange)
}

const offApiListener = () => {
    WKee.off('update', onStateChange)
}

async function updateState() {
    const state = await WavesKeeper.publicState()
    await onStateChange(state)
}

async function connect() {
    if (!WavesKeeper) {
        notifyAlert('✋ WavesKeeper should be installed to sign in ❗')
        return null
    }
    offApiListener()

    const account = values[ACCOUNT]
    const session = getSession(account.address)
    if (account.isConnected && session) {
        return session
    }

    let authData = null
    try {
        authData = await WavesKeeper.auth({ data: 'Sign in - CouponBazaar' })
        console.info(`👍 Successful authentication for address ${authData.address}`)
        setSession(authData)
    } catch (error) {
        delSession(account.address)
        if (error.message) console.warn(`👎 ${error.message}`)
        else console.warn('👎 authentication was interrupted')
    } finally {
        onApiListener()
    }
    return authData
}

if (WavesKeeper) {
    // eslint-disable-next-line no-undef
    WavesKeeper.initialPromise.then(() => {
        onApiListener()
        return updateState()
    })
}

export {
    currentAccount,
    currentNetwork,
    connect,
    disconnect,
    subscribe,
    fetchData,
    DAPP_ADDRESS,
    PUBLIC_STATE,
    ACCOUNT,
    NETWORK,
    DATA,
    DEFAULT_ACCOUNT,
    DEFAULT_NETWORK,
}
