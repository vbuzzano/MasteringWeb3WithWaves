import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'

import { GlobalStyle } from './styled-components/global'
import App from './App'
import theme from './styled-components/theme'
import configureStore from './store'
import * as dApp from './libs/dApp'

const store = configureStore()

window.app = dApp

ReactDOM.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                <App />
            </>
        </ThemeProvider>
    </Provider>,
    document.getElementById('root'),
)
