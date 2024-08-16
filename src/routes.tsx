import { RouteModel } from "./Types"
import DashboardIcon from '@mui/icons-material/Settings'
//Pages
import LoginPage from "@/Pages/Login"
import StringRoutes from "@/Constants/stringRoutes"
import SetupApplicableModels from "@/Pages/SetupApplicableModels"

//authRoutes

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Setup Checklist',
    key: 'Home',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: StringRoutes.dashboard,
    component: <SetupApplicableModels /> 
  }
];

const authRoutes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Login',
    key: 'login',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: StringRoutes.login,
    component: <LoginPage />
  }
]

export { routes, authRoutes }

