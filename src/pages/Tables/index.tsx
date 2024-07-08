
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import DashboardLayout from "@/Layouts/DashboardLayout"

const TablesPage = () => {
  return (
    <DashboardLayout>

      <Grid container item md={12} xs={12}>
        <div className='relative top-0 flex-1'>
          <div className='bg-blue-500 h-[80px] w-[98%] mx-auto relative top-3 z-10 rounded-lg shadow-lg'>

          </div>
          <Paper className='h-[1000px] top-10 w-full absolute rounded-lg'>
          </Paper>
        </div>

      </Grid>

    </DashboardLayout>
  )
}

export default TablesPage
