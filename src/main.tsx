import React from 'react'
import ReactDOM from 'react-dom/client'
import { Home, Livros } from './pages'
import 'styles/index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const el = document.getElementById('root') as Element

const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />
  },
  {
    path: '/livros',
    element: <Livros />
  }
])

ReactDOM.createRoot(el).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)

postMessage({ payload: 'removeLoading' }, '*')
