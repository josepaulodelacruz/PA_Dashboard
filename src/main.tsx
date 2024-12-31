import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from 'react-query';
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route, UNSAFE_ViewTransitionContext, unstable_useViewTransitionState } from 'react-router-dom'
import App from './App.tsx'
import '@/index.css'
import { authRoutes } from '@/routes.tsx'
import AuthLayout from '@/Layouts/AuthLayout/index.tsx';
import TemplateContainer from '@/Layouts/TemplateContainer/index.tsx'

import AuthRoutes from './Components/AuthRoutes.tsx';
import DashboardPage from './Pages/Dashboard/index.tsx';
import StringRoutes from './Constants/stringRoutes.tsx';

import MapPage from '@/Pages/Map/index.jsx'
import ViewPlotPage from '@/Pages/Map/ViewPlotPage.jsx'


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

      <Route path='/' element={<AuthRoutes />}>
        <Route path={'/'} element={<TemplateContainer />}>
          <Route path={StringRoutes.dashboard} element={<DashboardPage />}/>
          <Route path={StringRoutes.map} element={<MapPage/>}/>
          <Route path={StringRoutes.view_map_plot} element={<ViewPlotPage />}/>

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
