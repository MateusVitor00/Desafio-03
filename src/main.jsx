import React from 'react'
import ReactDOM from 'react-dom/client'
import { GlobalStyle } from './styles/global';
import { ThemeProvider } from 'styled-components';

import App from './app/App'

import theme from './styles/theme'


// import { authProvider } from './hooks/auth';

// import { Routes } from './routes';

// import theme from './styles/theme';


ReactDOM.createRoot(document.getElementById('root')).render(
    <ThemeProvider theme={theme}>
      <GlobalStyle />
          <App/>
    </ThemeProvider>
  
)
