import { RouteModel } from "./Types"
import DashboardIcon from '@mui/icons-material/Dashboard'
import TablesIcon from '@mui/icons-material/TableRows'

//Pages
import DashboardPage from '@/pages/Dashboard'
import TablesPage from "@/pages/Tables"
import RegisterPage from "@/pages/Register"
import LoginPage from "@/pages/Login"

//authRoutes

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: '/dashboard',
    component: <DashboardPage />
  },
  {
    type: 'collapse',
    name: 'Tables',
    key: 'tables',
    icon: <TablesIcon fontSize='small' sx={{ marginRight: '10px', color: "#FFF" }}>Tables</TablesIcon>,
    route: '/dashboard/tables',
    component: <TablesPage />
  },
];

const authRoutes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Login',
    key: 'login',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: '/login',
    component: <LoginPage />
  },
  {
    type: 'collapse',
    name: 'Register',
    key: 'register',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: '/register',
    component: <RegisterPage />
  }
]

export { routes, authRoutes }

