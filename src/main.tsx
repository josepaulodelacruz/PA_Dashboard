import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { routes, authRoutes } from './routes.tsx'
import TemplateContainer from './Layouts/TemplateContainer/index.tsx'
import DashboardPage from './Pages/Dashboard/index.tsx'
import TablesPage from './Pages/Tables/index.tsx'
import UsersPage from './Pages/Users/index.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >

      {
        authRoutes.map((route) => {
          return <Route key={route.key} element={route.component} path={route.route}/>
        })
        
      }

      <Route path='/dashboard' element={<TemplateContainer/>}>
        <Route path='/dashboard/home' element={<DashboardPage/>}/>
        <Route path='/dashboard/tables' element={<TablesPage />}/>
        <Route path='/dashboard/users' element={<UsersPage />}>
          <Route path='/dashboard/users' element={<div>USER</div>} />
          <Route path='/dashboard/users/add' element={<div>USER ADD</div>} />
        </Route>
      </Route>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
