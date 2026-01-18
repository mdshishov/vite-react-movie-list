import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import './utils/i18n'
import './css/index.css'
import App from './App.jsx'

const themePref = window.matchMedia('(prefers-color-scheme: dark)').matches
const stored = localStorage.getItem('isDark')
const isDark = stored ? JSON.parse(stored) : themePref
root.setAttribute('data-theme', isDark ? 'dark' : 'light')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>,
)
