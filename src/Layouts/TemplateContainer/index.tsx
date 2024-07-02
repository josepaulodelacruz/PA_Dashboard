import Sidenav from "@/Components/Sidenav"
import Grid from "@mui/material/Grid"
import Navbar from '@/Components/Navbar'
import { Outlet } from 'react-router-dom'

const TemplateContainer = () => {
  return (
    <Grid container  
    >
      <Grid item md={2} xs={12} >
        <Sidenav />
      </Grid>

      <Grid item md={10} xs={12} style={{height: '100vh', overflowY: 'auto'}}>
        <Navbar />
        <Outlet />
      </Grid>

    </Grid>
  )
}

export default TemplateContainer
