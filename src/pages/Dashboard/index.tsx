import DashboardLayout from "@/Layouts/DashboardLayout"
import Grid from '@mui/material/Grid'
import CountCard from './Components/CountCard'

const DashboardPage = () => {
  return (
    <DashboardLayout>
      <Grid container spacing={2}>
        <Grid container item md={12} direction="row" spacing={2}>
          <Grid item md={3}>
            <CountCard />
          </Grid>
          <Grid item md={3}>
            <CountCard />
          </Grid>
          <Grid item md={3}>
            <CountCard />
          </Grid>
          <Grid item md={3}>
            <CountCard />
          </Grid>
        </Grid>
      </Grid>
    </DashboardLayout>
  )
}

export default DashboardPage
