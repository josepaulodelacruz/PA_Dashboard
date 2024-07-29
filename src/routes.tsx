import { RouteModel } from "./Types"
import DashboardIcon from '@mui/icons-material/Dashboard'
import TablesIcon from '@mui/icons-material/TableRows'
import PeopleIcon from '@mui/icons-material/People'

//Pages
import DashboardPage from '@/pages/Dashboard'
import TablesPage from "@/pages/Tables"
import RegisterPage from "@/pages/Register"
import LoginPage from "@/pages/Login"
import UsersPage from "@/pages/Users"
import StringRoutes from "@/Constants/stringRoutes"

//authRoutes

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: StringRoutes.dashboard,
    component: <DashboardPage />
  },
  {
    type: 'collapse',
    name: 'Tables',
    key: 'tables',
    icon: <TablesIcon fontSize='small' sx={{ marginRight: '10px', color: "#FFF" }}>Tables</TablesIcon>,
    route: StringRoutes.tables,
    component: <TablesPage />
  },
  {
    type: 'collapse',
    name: 'Users',
    key: 'user',
    icon: <PeopleIcon fontSize='small' sx={{ marginRight: '10px', color: "#FFF" }}>Tables</PeopleIcon>,
    route: StringRoutes.user_home,
    component: <UsersPage />
  },
];

const authRoutes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Login',
    key: 'login',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: StringRoutes.login,
    component: <LoginPage />
  },
  {
    type: 'collapse',
    name: 'Register',
    key: 'register',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: StringRoutes.register,
    component: <RegisterPage />
  }
]

export { routes, authRoutes }

