import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'virtual:windi.css'
import { BrowserRouter } from 'react-router-dom'
import "./i18n/i18n"  

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter >,
)
