import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Two frames guarantees React has committed and painted before the boot shell
// goes, so there is no gap between the two.
requestAnimationFrame(() => {
  requestAnimationFrame(() => {
    const boot = document.getElementById('boot')
    if (!boot) return
    boot.style.opacity = '0'
    setTimeout(() => boot.remove(), 300)
  })
})
