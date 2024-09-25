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
import AuthRoutes from './Components/AuthRoutes.tsx';
import PunchlistPage from './Pages/Punchlist/index.tsx';
import ListOfUnits from './Pages/Punchlist/SubRoutes/ListOfUnits.tsx';
import OwnersPunchlist from './Pages/Punchlist/SubRoutes/OwnersPunchlist.tsx';
import ChecklistForm from './Pages/UnitAcceptance/SubRoutes/ChecklistForm.tsx';
import SetupPersonel from './Pages/SetupPersonel/index.tsx';
import AssignPersonel from './Pages/SetupPersonel/SubRoutes/AssignPersonel.tsx';


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
          <Route path={StringRoutes.dashboard} element={<SetupApplicableModels />}>
            <Route path={StringRoutes.dashboard} element={<HomePage />} />
            <Route path={StringRoutes.project_list} element={<ToggleProjectPage />} />
            <Route path={StringRoutes.view_project + "/:id" + "/:project_name"} element={<ViewProjectPage />} />
          </Route>

          <Route path={StringRoutes.punchlist} element={<PunchlistPage/>}>
            <Route path={StringRoutes.punchlist_owners} element={<OwnersPunchlist />}/>
            <Route path={StringRoutes.punclist_with_warranty} element={<ListOfUnits type={'WITHIN_WARRANTY'}/>}/>
            <Route path={StringRoutes.punchlist_beyond_warranty} element={<ListOfUnits type={'BEYOND_WARRANTY'}/>}/>
          </Route>

          <Route path={StringRoutes.setup_personel} element={<SetupPersonel />} >
            <Route path={StringRoutes.setup_personel_assign} element={<AssignPersonel />} />
          </Route>

        </Route>
      </Route>


      <Route path='/auth' element={<AuthLayout />}>
        {
          authRoutes.map((route) => {
            return <Route key={route.key} element={route.component} path={route.route} />
          })
        }

      </Route>

      {/*Unproctedted routes*/}
      <Route path={StringRoutes.unit_acceptance_checklist_print} element={<ChecklistForm/>}/>

    </Route>
  ),
  {
    basename: '/PMDMTSWebV2'
  }
)

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={client} >
      <RouterProvider future={{ v7_startTransition: true }} router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
