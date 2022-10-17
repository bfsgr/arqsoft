import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import 'styles/index.css'

const el = document.getElementById('root') as Element

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
