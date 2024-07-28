
import DashboardLayout from '@/Layouts/DashboardLayout'
import { Outlet } from 'react-router-dom'


const UsersPage = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}


export default UsersPage
