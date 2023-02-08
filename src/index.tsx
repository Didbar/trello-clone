import React from 'react'
import ReactDOM from 'react-dom/client'

import { AppStateProvider } from './AppStateContext'
import App from './App'

import './index.css'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <React.StrictMode>
    <AppStateProvider>
      <App />
    </AppStateProvider>
  </React.StrictMode>
)
