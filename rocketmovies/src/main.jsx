import React from 'react'
import ReactDOM from 'react-dom/client'

import { ThemeProvider } from 'styled-components'
import GlobalStyle from './styles/global'

import theme from './styles/theme'

import { CreateMovie } from './pages/CreateMovie'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle/>
        <CreateMovie />
    </ThemeProvider>
  </React.StrictMode>
)
