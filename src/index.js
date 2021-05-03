import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import UIProvider from 'app/contexts/UI/Provider'
import App from 'app'
import theme from 'styles/theme'
import 'styles/index.less'

ReactDOM.render(
  <Router>
    <ThemeProvider theme={theme}>
      <UIProvider>
        <App />
      </UIProvider>
    </ThemeProvider>
  </Router>,
  document.getElementById('root')
)
