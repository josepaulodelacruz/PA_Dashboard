import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import { routes } from '@/routes'
import { useTheme } from '@mui/material/styles'
import linearGradient from '@/assets/theme/functions/linearGradient'
import SidenavItem from './SidenavItem'
import './index.css'


const Sidenav = () => {
  const theme = useTheme()
  const { palette } = theme
  const { gradients } = palette

  let backgroundValue = linearGradient(gradients.dark.main, gradients.dark.state)
  let textColor = '#FFF'

  const renderRoutes = routes.map((item) => {
    let returnValue

    returnValue = (
      <div key={item.key}>
        <SidenavItem icon={item.icon} name={item.name} route={item.route} />
      </div>
    )
    return returnValue
  })

  return (
    <Box
      display='flex'
      flexDirection='column'
      height="100vh"
    >
      <Paper
        sx={{
          paddingTop: '10px',
          borderRadius: 4,
          background: backgroundValue,
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1, // Child element takes up remaining space
          overflowY: 'auto' // Scroll if content overflows
        }}
      >
        <Box 
          pb={2}
          pt={1.5}
          px={4}
          display="flex"
          justifyContent='flex-start'
          alignItems='center'
        >
          <div style={{marginRight: '10px', height: '20px', width: '30px', backgroundColor: 'white'}}/>
          <Typography color={textColor} display="block" fontWeight='bold' variant='h6'>
            App Name
          </Typography>
        </Box>

        <hr className='divider'/>

        <List>{renderRoutes}</List>
      </Paper>
    </Box>
  )
}

export default Sidenav

