/* eslint-disable no-alert */
/* eslint-disable no-undef */
/* eslint-disable func-names */
import { construct } from 'ramda'
import { useState } from 'react'

export function Auth(onAccountChange) {
    this.onAccountChange = onAccountChange
}

Auth.prototype.logout = function () {
    this.onAccountChange(null)
}

Auth.prototype.login = async function () {
    const authData = { data: 'Sign in - CouponBazaar' }
    if (typeof WavesKeeper !== 'undefined') {
        WavesKeeper.auth(authData)
            .then(async (auth) => {
                console.log(`👍 Successful authentication for address ${auth.address}`)
                await this.onAccountChange(auth)
            }).catch(async (err) => {
                if (err.message) console.error(`👎 ${err.message}`)
                else console.error('👎 authentication was interrupted')
                await this.onAccountChange(null)
            })
    } else {
        alert('WavesKeeper should be installed to sign in.')
    }
}

