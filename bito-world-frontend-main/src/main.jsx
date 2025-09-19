/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
if (window.location.pathname.includes('join-now')) {
  import('./index.css') // Tailwind in higher layer (will override Bootstrap)
} else {
  import('./bootstrap-layered.css') // Bootstrap in lower layer
}
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App >
    <ToastContainer 
				autoClose={2000}
				pauseOnHover
			/>
  </StrictMode>,
)
