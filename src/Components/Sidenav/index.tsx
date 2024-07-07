import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import { NavLink } from 'react-router-dom'
import { routes } from '@/routes'
import { useTheme } from '@mui/material/styles'
import linearGradient from '@/assets/theme/functions/linearGradient'
import SidenavItem from './SidenavItem'
import './index.css'


const Sidenav = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let backgroundValue = linearGradient(gradients.dark.main, gradients.dark.state)
  let textColor = '#FFF'

  const renderRoutes = routes.map((item) => {
    let returnValue

    returnValue = (
      <NavLink key={item.key} to={item.route}>
        <SidenavItem icon={item.icon} name={item.name} route={item.route} />
      </NavLink>
    )
    return returnValue
  })

  return (
    <Box
      display={{ xs: 'none', xl: 'flex' }}
      flexDirection="column"
      height="100vh"
    >
      <Paper
        sx={{
          paddingTop: '10px',
          borderRadius: 3,
          background: backgroundValue,
          margin: '15px',
          display: 'flex',
          flexDirection: 'column',
          flex: 1, // Child element takes up remaining space
          overflowY: 'auto', // Scroll if content overflows
        }}
      >
        <Box
          pb={2}
          pt={1.5}
          px={4}
          display="flex"
          justifyContent="flex-start"
          alignItems="center"
          gap={2} // Space between the icon and the text
        >
          <div
            style={{
              height: '20px',
              width: '30px',
              backgroundColor: 'white',
              borderRadius: '4px', // Added to make it look better
            }}
          />
          <Typography
            color={textColor}
            display="block"
            fontWeight="bold"
            variant="h6"
            whiteSpace="nowrap" // Prevent text from wrapping
            overflow="hidden" // Hide overflow text
            textOverflow="ellipsis" // Add ellipsis for overflow text
          >
            App Name
          </Typography>
        </Box>

        <hr className="divider" />

        <List>{renderRoutes}</List>
      </Paper>
    </Box>)
}

export default Sidenav

