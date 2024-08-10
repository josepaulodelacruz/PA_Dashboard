import { Outlet } from "react-router-dom"
import '@/index.css'


const RootLayout = () => {
  return (
    <div >
      <Outlet />
    </div>
  )
}

export default RootLayout
