import { RouteModel } from "./Types"
import DashboardIcon from '@mui/icons-material/Dashboard'
import TablesIcon from '@mui/icons-material/TableRows'

//Pages
import DashboardPage from '@/Pages/Dashboard'
import TablesPage from "@/Pages/Tables"
import RegisterPage from "@/Pages/Register"
import LoginPage from "@/Pages/Login"
import UsersPage from "./Pages/Users"

//authRoutes

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: '/dashboard/home',
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
  {
    type: 'collapse',
    name: 'Users',
    key: 'tables',
    icon: <TablesIcon fontSize='small' sx={{ marginRight: '10px', color: "#FFF" }}>Tables</TablesIcon>,
    route: '/dashboard/users',
    component: <UsersPage />
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

