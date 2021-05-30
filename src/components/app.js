import ReactDOM from "react-dom"
import React from 'react'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
        this.authFunc = this.authFunc.bind(this)
    }
    authFunc() {
        const authData = { data: "Sign in - MyWebSite" }
        if (typeof Waves !== 'undefined') {
            WavesKeeper.auth( authData )
            .then(auth => {
                console.log( auth )
            }).catch(err => {
                console.error( err )
            })
        } else {
            alert("WavesKeeper should be installed to sign in.")
        }
    }
    render() {
        return (
            <div className="container">
                <input className="btn btn-primary" type="submit" value="Auth" onClick={this.authFunc}/>
            </div>
        )
    }
}

const app = document.getElementById('app')

if (app) {
    ReactDOM.render(<App/>, app)
}
