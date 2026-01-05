import App from './App'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { RouterProvider } from '@tanstack/react-router'
import './index.css'
import { router } from './router'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App>
      <RouterProvider router={router}/>
    </App>
  </StrictMode>,
)
