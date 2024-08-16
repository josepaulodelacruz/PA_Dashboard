import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom'
import App from './App.tsx'
import '@/index.css'
import { authRoutes } from '@/routes.tsx'
import AuthLayout from '@/Layouts/AuthLayout/index.tsx';
import TemplateContainer from '@/Layouts/TemplateContainer/index.tsx'

import StringRoutes from '@/Constants/stringRoutes.tsx'
import SetupApplicableModels from './Pages/SetupApplicableModels/index.tsx';
import HomePage from './Pages/SetupApplicableModels/SubRoutes/HomePage.tsx';
import ToggleProjectPage from './Pages/SetupApplicableModels/SubRoutes/ToggleProjectPage.tsx';
import ViewProjectPage from './Pages/SetupApplicableModels/SubRoutes/ViewProject.tsx';


const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10 * (60 * 1000), // 10 mins
      cacheTime: 15 * (60 * 1000), // 15 mins
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<App />} >

      <Route path={'/'} element={<TemplateContainer />}>
        <Route path={StringRoutes.dashboard} element={<SetupApplicableModels/>}>
          <Route path={StringRoutes.dashboard} element={<HomePage/>}/>
          <Route path={StringRoutes.project_list} element={<ToggleProjectPage/>}/>
          <Route path={StringRoutes.view_project + "/:id"} element={<ViewProjectPage />}/>
          
        </Route>
      </Route>

      <Route path='/auth' element={<AuthLayout />}>
        {
          authRoutes.map((route) => {
            return <Route key={route.key} element={route.component} path={route.route} />
          })
        }

      </Route>

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client} >
      <RouterProvider future={{ v7_startTransition: true }} router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
