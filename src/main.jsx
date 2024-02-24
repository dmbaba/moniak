import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import About from './Pages/About/About.jsx'
import Contact from './Pages/Contact/Contact.jsx'
import Services from './Pages/Services/Services.jsx'
import Projects from './Pages/Projects/Projects.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/about",
    element: <About />
  },
  {
    path: "/contact",
    element: <Contact />
  },
  {
    path: "/services",
    element: <Services />
  },
  {
    path: "/projects",
    element: <Projects />
  }
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router} />
  </React.StrictMode>,
)
