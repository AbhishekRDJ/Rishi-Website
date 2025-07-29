import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import ShawarmaContact from './pages/Contact.jsx'

const router = createBrowserRouter([



  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element: <Home />
      }, {
        path: '/contact',
        element: <ShawarmaContact />
      }
    ],
  }

])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
