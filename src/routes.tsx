import { RouteModel } from "./Types"
import DashboardIcon from '@mui/icons-material/Dashboard'
import TablesIcon from '@mui/icons-material/TableRows'
 
//Pages
import DashboardPage from '@/pages/Dashboard'
import TablesPage from "@/pages/Tables"

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardIcon fontSize='small'  sx={{marginRight: '10px', color: '#FFF'}}>dashboard</DashboardIcon>,
    route: '/dashboard',
    component: <DashboardPage />
  },
  {
    type: 'collapse',
    name: 'Tables',
    key: 'tables',
    icon: <TablesIcon fontSize='small' sx={{marginRight: '10px', color: "#FFF"}}>Tables</TablesIcon>,
    route: '/dashboard/tables',
    component: <TablesPage />
  },
];

export { routes }

