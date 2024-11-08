import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Hero } from './Components/Hero'
import { Login } from './Components/Login'
import { Signup } from './Components/Signup'

const router = createBrowserRouter(
  [
    { path: "/", element: <Hero /> },
    { path: "/login", element: <Login /> },
    {
      path: "/signup", element: <Signup />
    }
]
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
