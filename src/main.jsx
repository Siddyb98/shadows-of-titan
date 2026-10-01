import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import { AuthProvider } from './context/AuthContext'
import { ProgressionProvider } from './context/ProgressionContext'
import './index.css'

if ('serviceWorker' in navigator && import.meta.env.PROD) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register(`/sw.js?v=${import.meta.env.VITE_APP_VERSION || '1.0.0'}`)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <ProgressionProvider>
          <App />
        </ProgressionProvider>
      </BrowserRouter>
    </AuthProvider>
  </React.StrictMode>,
)
