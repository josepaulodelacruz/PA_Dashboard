import { RouteModel } from "./Types";
import Icon from '@mui/material/Icon';
import DashboardPage from './pages/Dashboard'; // Ensure the correct path to your DashboardPage component

const routes: RouteModel[] = [
  {
    type: 'collapse',
    name: 'Dashboard',
    key: 'dashboard',
    route: '/dashboard',
    icon: <Icon fontSize="small">dashboard</Icon>,
    component: <DashboardPage />
  }
];


export default routes;
