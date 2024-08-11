import DashboardLayout from "@/Layouts/DashboardLayout";
import { Outlet } from 'react-router-dom'

const ProfilePage = () => {
  return (
    <DashboardLayout>
      <Outlet />
    </DashboardLayout>
  )
}

export default ProfilePage
