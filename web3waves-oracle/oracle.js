const fetch = require('node-fetch')
const cron = require('node-cron')
const base64 = require('js-base64')
const WT = require('@waves/waves-transactions')

// waves testnet
const nodeApiUrl = 'https://nodes-testnet.wavesnodes.com/'

// api key for https://openweathermap.org/api
const owApiKey = ''

const oracleSeed = 'gossip panda mansion decline priority anxiety gun panda pool assist debris mercy piece book canal'
const oracleAddress = '3NA4Cva8BfyU11MGCHCxEfvbFF4qTgQ2pvR'

const oracleProtocolVersion = '1'

const oracleSpecification = [
    {
        name: 'version',
        type: 1,
        required: 1,
        description: 'current version of protocol',
    },
    {
        name: 'weather',
        type: 1,
        required: 1,
        description: 'weather data',
    },
    {
        name: 'temperature',
        type: 1,
        required: 1,
        description: 'celsius',
    },
]

const oracleExample = {
    version: oracleProtocolVersion,
    weather: 'Clouds',
    temperature: '26.5',
}

const oracleTxData = [
    {
        key: 'wpo_oracle',
        type: 'string',
        value: 'oracle',
    }, {
        key: 'wpo_testnet',
        type: 'boolean',
        value: true,
    }, {
        key: 'wpo_createdate',
        type: 'integer',
        value: '0',
    }, {
        key: 'wpo_createid',
        type: 'string',
        value: 'EdfSxJwUNVEJ6HnNLHRRLcoyKQT5hCaoEV56k7GxnTfY',
    }, {
        key: 'wpo_address',
        type: 'string',
        value: oracleAddress,
    }, {
        key: 'wpo_name',
        type: 'string',
        value: 'TEST-GVA-WEATHER',
    }, {
        key: 'wpo_link',
        type: 'string',
        value: 'https://openweathermap.org',
    }, {
        key: 'wpo_protocol',
        type: 'integer',
        value: 302, // Weather
    }, {
        key: 'wpo_status',
        type: 'integer',
        value: 2, // development
    }, {
        key: 'wpo_description',
        type: 'string',
        value: 'web3waves week 6. Geneva Weather Temperature',
    }, {
        key: 'wpo_frequency',
        type: 'string',
        value: 'Information is updated every 1 minute.',
    }, {
        key: 'wpo_revisions',
        type: 'string',
        value: '',
    }, {
        key: 'wpo_specification',
        type: 'binary',
        value: `base64:${base64.encode(JSON.stringify(oracleSpecification))}`,
    }, {
        key: 'wpo_example',
        type: 'string',
        value: `base64:${base64.encode(JSON.stringify(oracleExample))}`,
    }, {
        key: 'wpo_updatedate',
        type: 'integer',
        value: Date.now(),
    },
]

const prepareOracle = async () => {
    const tx = WT.data({ data: oracleTxData }, oracleSeed)
    await WT.broadcast(tx, nodeApiUrl)
    await WT.waitForTx(tx.id, { apiBase: nodeApiUrl })
}

const fetchTemperature = async () => {
    const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Geneva,ch&units=metric&&appid=${owApiKey}`)
    if (res.status !== 200) {
        const err = await res.json()
        throw Error(JSON.stringify(err.message))
    } else return await res.json()
}

const updateTemperature = async () => {
    const temp = await fetchTemperature()
    const weatherValue = temp.weather && temp.weather.length > 0 ? String(temp.weather[0].main) : ''
    const temperatureValue = String(temp.main.temp)
    const tx = WT.data({
        data: [
            {
                key: 'version',
                type: 'string',
                value: oracleProtocolVersion,
            }, {
                key: 'weather',
                type: 'string',
                value: weatherValue,
            }, {
                key: 'temperature',
                type: 'string',
                value: temperatureValue,
            },
        ],
    }, oracleSeed)
    console.log('Updating weather')
    await WT.broadcast(tx, nodeApiUrl)
    await WT.waitForTx(tx.id, { apiBase: nodeApiUrl })
}

/**
 * Prepare (create / update ) oracle account
 * then update weather every minute
 */
prepareOracle().then(() => {
    console.log('Oracle is ready')
    cron.schedule('* * * * *', updateTemperature)
})
