import React from 'react'
import ReactDOM from 'react-dom/client'

import { App } from './components/app'

import './styles/index.css'
import { Accessibility } from './components/accessibility'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />

    <Accessibility />
  </React.StrictMode>,
)
