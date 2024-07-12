import DashboardLayout from "@/Layouts/DashboardLayout"
import Grid from '@mui/material/Grid'
import CountCard from './Components/CountCard'
import WeekendIcon from '@mui/icons-material/Weekend'
import LeaderBoardIcon from '@mui/icons-material/Leaderboard'
import StoreIcon from '@mui/icons-material/Store'
import PersonAddIcon from '@mui/icons-material/PersonAdd'
import linearGradient from "@/assets/theme/functions/linearGradient"
import { useTheme } from "@mui/material/styles"
import CardWithTable from "./Components/CardWithTable"
import DataTable from './Components/DataTable'
import Stepper from "@/Components/Stepper"
import ChartCard from "./Components/ChartCard"


const DashboardPage = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any };

  const cards = [
    {
      md: 3,
      xs: 12,
      icon: <WeekendIcon fontSize="medium" sx={{ color: '#fff' }} />,
      title: "Bookings",
      gradientColor: linearGradient(gradients.dark.main, gradients.dark.state),
      total: '281',
    },
    {
      md: 3,
      xs: 12,
      icon: <LeaderBoardIcon fontSize="medium" sx={{ color: '#fff' }} />,
      title: "Today's Users",
      gradientColor: linearGradient(gradients.info.main, gradients.info.state),
      total: '2,300',
    },
    {
      md: 3,
      xs: 12,
      icon: <StoreIcon fontSize="medium" sx={{ color: '#fff' }} />,
      title: "Today's Users",
      gradientColor: linearGradient(gradients.success.main, gradients.success.state),
      total: '34k',
    },
    {
      md: 3,
      xs: 12,
      icon: <PersonAddIcon fontSize="medium" sx={{ color: '#fff' }} />,
      title: "Followers",
      gradientColor: linearGradient(gradients.error.main, gradients.error.state),
      total: '91+',
    },
  ]


  return (
    <DashboardLayout>
      <Grid container spacing={2}>
        <Grid container item md={12} direction="row" spacing={3.2} >
          {
            cards.map((card, index) => {
              return (
                <Grid key={index} item md={card.md} xs={card.xs} >
                  <CountCard total={card.total} cardLogo={{ title: card.title, icon: card.icon, gradientColor: card.gradientColor }} />
                </Grid>
              )
            })
          }
        </Grid>

        <Grid container item md={12} xs={12} direction='row' spacing={3} style={{ padding: '2rem 0 0 1rem' }}>
          <ChartCard
            title="Website Views"
            subTitle="2,302 Views"
            backgroundValue={linearGradient(gradients.info.main, gradients.info.state)} />
          <ChartCard
            title="Website Views"
            subTitle="2,302 Views"
            backgroundValue={linearGradient(gradients.primary.main, gradients.primary.state)}/>
          <ChartCard
            title="Website Views"
            subTitle="2,302 Views"
            backgroundValue={linearGradient(gradients.success.main, gradients.success.state)}/>
        </Grid>

        <Grid container item md={12} xs={12} direction='row' spacing={3} style={{ padding: '1rem 0 0 1rem' }} >

          <Grid item md={8} xs={12} >
            <CardWithTable title="House Hold" >
              <div className="h-[0.60rem]" />
              <DataTable />
            </CardWithTable>
          </Grid>

          <Grid item md={4} xs={12}>
            <CardWithTable title="Payment Transactions">
              <div className="h-[0.60rem]" />
              <Stepper />
            </CardWithTable>
          </Grid>

        </Grid>
      </Grid>
    </DashboardLayout>
  )
}

export default DashboardPage
