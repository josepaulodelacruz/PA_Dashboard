import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { routes, authRoutes } from './routes.tsx'
import TemplateContainer from './Layouts/TemplateContainer/index.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >

      {
        authRoutes.map((route) => {
          return <Route key={route.key} element={route.component} path={route.route}/>
        })
        
      }

      <Route path='/dashboard' element={<TemplateContainer/>}>
        {
          routes.map((route) => {
            return <Route key={route.key} element={route.component} path={route.route} />
          })
        }
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
