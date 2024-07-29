import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App.tsx'
import './index.css'
import { authRoutes } from '@/routes.tsx'
import TemplateContainer from '@/Layouts/TemplateContainer/index.tsx'
import DashboardPage from '@/pages/Dashboard/index.tsx'
import TablesPage from '@/pages/Tables/index.tsx'
import UsersPage from '@/pages/Users/index.tsx'
import UserHome from '@/pages/Users/SubRoutes/UserHome'

import StringRoutes from '@/Constants/stringRoutes.tsx'
import UserFormPage from './pages/Users/SubRoutes/UserFormPage.tsx'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >

      {
        authRoutes.map((route) => {
          return <Route key={route.key} element={route.component} path={route.route}/>
        })
        
      }

      <Route path={StringRoutes.dashboard} element={<TemplateContainer/>}>
        <Route path={StringRoutes.dashboard} element={<DashboardPage/>}/>
        <Route path={StringRoutes.tables} element={<TablesPage />}/>
        <Route path={StringRoutes.user_home} element={<UsersPage />}>
          <Route path={StringRoutes.user_home} element={<UserHome/>} />
          <Route path={`${StringRoutes.user_home_add}`} element={<UserFormPage />}/>
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
