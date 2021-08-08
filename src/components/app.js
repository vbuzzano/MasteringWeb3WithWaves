import React from 'react'

import { UserContext } from './context'
import Header from './header'

const App = () => {
    const user = { address: 'test' }
    return (
        <UserContext.Provider value={user}>
            <div className="container">
                <div className="container p-2">
                    <Header />
                </div>
            </div>
        </UserContext.Provider>
    )
}

/*

import Header from './header'

*/

/* import React, { useContext } from 'react';
import UserContext from './User';
import Header from './header'

const user = {}

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            user: null
        }
        this.user = "helo"
        this.authFunc = this.authFunc.bind(this)
    }
    authFunc() {
        const authData = { data: "Sign in - MyWebSite" }
        if (typeof Waves !== 'undefined') {
            WavesKeeper.auth(authData)
                .then(auth => {
                    this.state.user = auth
                    console.log("👍 Successful authentication for address " + auth.address)
                }).catch(err => {
                    console.error(err)
                })
        } else {
            alert("WavesKeeper should be installed to sign in.")
        }
    }
    render() {
        return (
            <UserContext.Provider value={user}>
                <div className="container">
                    <Header />
                    <div className="container p-2">
                        <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc} />
                        <div class="p-2 bd-highlight border border-success">{this.user}</div>
                        <hr />

                    </div>
                </div>
            </UserContext.Provider>
        )
    }
}
*/

export default App
