import { RouteModel } from "./Types"
import Icon from '@mui/material/Icon'
import DashboardIcon from '@mui/icons-material/Dashboard'
import TablesIcon from '@mui/icons-material/TableRows'
 
//Pages
import DashboardPage from '@/Pages/Dashboard'

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardIcon fontSize='small' color='white' sx={{marginRight: '10px'}}>dashboard</DashboardIcon>,
    route: '/',
    component: <DashboardPage />
  },
  {
    type: 'collapse',
    name: 'Tables',
    key: 'tables',
    icon: <TablesIcon fontSize='small' color='white' sx={{marginRight: '10px'}}>Tables</TablesIcon>,
    route: '/tables',
    component: <div>Tables</div>
  },
];

export { routes }

