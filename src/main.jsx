import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { CSSReset } from '@chakra-ui/react'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <CSSReset />
  </React.StrictMode>,
)
