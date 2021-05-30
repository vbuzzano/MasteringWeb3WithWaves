import ReactDOM from "react-dom"
import React from 'react'

//import { libs } from '@waves/waves-transactions'
//import { ProviderSeed } from '@waves/provider-seed'
//import { ProviderCloud } from '@waves.exchange/provider-cloud'

import { ProviderWeb } from '@waves.exchange/provider-web'
import { Signer } from '@waves/signer'

class App extends React.Component {
    constructor( props ) {
        super( props )


//        const seed = libs.crypto.randomSeed( 15 )
//        const providerSeed = new ProviderSeed( seed )
//        const providerCloud = new ProviderCloud( 'https://testnet.waves.exchange/signer/' )

        const providerWeb = new ProviderWeb( 'https://testnet.waves.exchange/signer/' )
        this.signer = new Signer({
            NODE_URL: 'https://nodes-testnet.wavesnodes.com'
        })
        this.signer.setProvider( providerWeb )
        
        this.state = { address: null }
        this.authFunc = this.authFunc.bind( this )
    }
    async authFunc() {
        try {
            const user = await this.signer.login()
            console.log( JSON.stringify( user ) )
            this.setState( { address: user.address } )
        } catch( error ) {
            console.error( error )
        }
    }
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
                <div class="bd-callout bd-callout-info">
                    <strong>Address</strong> {this.state.address}
                </div>
            </div>
        )
    }
}

const app = document.getElementById( 'app' )

if ( app ) {
    ReactDOM.render( <App/>, app )
}
