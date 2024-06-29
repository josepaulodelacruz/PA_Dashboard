import { RouteModel } from "./Types"
import Icon from '@mui/material/Icon'

//Pages
import DashboardPage from '@/pages/Dashboard'

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    icon: <Icon fontSize='small'>dashboard</Icon>,
    route: '/',
    component: <DashboardPage />
  }
];

export { routes }

