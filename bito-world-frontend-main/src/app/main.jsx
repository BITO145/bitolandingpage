/* eslint-disable no-unused-vars */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import '../styles/index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App / >
    <ToastContainer
				autoClose={2000}
				pauseOnHover
			/>
  </StrictMode>,
)
