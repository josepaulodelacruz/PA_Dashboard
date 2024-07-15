import { ScrollToTop } from "@/Utils"
import { Outlet, ScrollRestoration } from "react-router-dom"

const RootLayout = () => {
  return (
    <div >
      <Outlet />
    </div>
  )
}

export default RootLayout
