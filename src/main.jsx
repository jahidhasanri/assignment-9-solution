import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'
import AuthLayout from './authLayout/AuthLayout.jsx'
import { HelmetProvider } from 'react-helmet-async'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
    <AuthLayout>
    <RouterProvider router={router}></RouterProvider>
    </AuthLayout>
    </HelmetProvider>
  </StrictMode>,
)
