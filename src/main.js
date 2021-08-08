import React from 'react'
import ReactDOM from "react-dom"
import App from './components/app'

const main = document.getElementById('main')
if (main) {
    ReactDOM.render(<App />, main)
}

