import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Store from './Context/Store'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Store>
      <App />
    </Store>
  </React.StrictMode>,
)
