import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/main.css'
import AppLayout from './components/AppLayout/AppLayout.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppLayout 
      contentType={'welcome'}
    />
  </React.StrictMode>,
)
