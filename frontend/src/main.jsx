import { createRoot } from 'react-dom/client'
import App, { Footer } from './App.jsx'

createRoot(document.getElementById('root')).render(
    <App />
)
createRoot(document.getElementById('footer-react')).render(
    <Footer />
)