import { RouteModel } from "./Types"
import DashboardIcon from '@mui/icons-material/Settings'
//Pages
import LoginPage from "@/Pages/Login"
import StringRoutes from "@/Constants/stringRoutes"
import SetupApplicableModels from "@/Pages/SetupApplicableModels"
import PunchlistPage from "@/Pages/Punchlist"
import PostAddIcon from '@mui/icons-material/PostAdd'
import CalendarWithin from '@mui/icons-material/CalendarMonth'
import CalendarBeyond from '@mui/icons-material/CalendarToday'
import './index.css'

//authRoutes
//#adb5bd

const routes: RouteModel[] = [
  {
    type: 'COLLAPSE',
    name: 'Punchlist',
    key: 'Punchlist',
    icon: <PostAddIcon fontSize="small" sx={{ marginRight: '10px', color: '#FFF' }} />,
    iconDark: <PostAddIcon fontSize="small" sx={{ marginRight: '10px', color: '#adb5bd' }} />,
    isCollapsible: false, //close by default
    route: StringRoutes.punchlist,
    items: [
      {
        name: 'With Warranty',
        key: 'with_warranty',
        icon: <CalendarWithin fontSize="small" sx={{color: '#fff', ml: 'auto'}} />,
        iconDark: <CalendarWithin fontSize="small" sx={{color: '#adb5bd', ml: 'auto'}} />,
        component: <div>With Warranty</div>,
        route: StringRoutes.punclist_with_warranty
      },
      {
        name: 'Beyond Warranty',
        key: 'beyond_warranty',
        icon: <CalendarBeyond fontSize="small" sx={{color: '#fff', ml: 'auto'}} />,
        iconDark: <CalendarBeyond fontSize="small" sx={{color: '#adb5bd', ml: 'auto'}} />,
        component: <div>Beyond warranty</div>,
        route: StringRoutes.punchlist_beyond_warranty
      }
    ],

    component: <PunchlistPage />
  },
  {
    type: 'LINK',
    name: 'Setup Checklist',
    key: 'Setup Checklist',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    iconDark: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#adb5bd' }}>dashboard</DashboardIcon>,
    route: StringRoutes.dashboard,
    component: <SetupApplicableModels />
  },

];

const authRoutes: RouteModel[] = [
  {
    type: 'LINK',
    name: 'Login',
    key: 'login',
    icon: <DashboardIcon fontSize='small' sx={{ marginRight: '10px', color: '#FFF' }}>dashboard</DashboardIcon>,
    route: StringRoutes.login,
    component: <LoginPage />
  }
]

export { routes, authRoutes }

