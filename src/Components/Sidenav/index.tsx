import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import List from '@mui/material/List'
import { routes } from '@/routes'
import { useTheme } from '@mui/material/styles'
import pxToRem from '@/assets/theme/functions/pxToRem'
import linearGradient from '@/assets/theme/functions/linearGradient'

const Sidenav = () => {
  const theme = useTheme()
  const { palette } = theme
  const { gradients } = palette

  let backgroundValue = linearGradient(gradients.dark.main, gradients.dark.state)

  const renderRoutes = routes.map((item) => {
    let returnValue

    returnValue = (
      <div key={item.key}>
        <Typography >
          {item.name}
        </Typography>
      </div>
    )
    return returnValue
  })

  return (
    <Box
      textAlign='center'
      display='flex'
      flexDirection='column'
      height="100vh"
    >
      <Paper
        sx={{
          borderRadius: 4,
          background: backgroundValue,
          margin: '10px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          flex: 1, // Child element takes up remaining space
          overflowY: 'auto' // Scroll if content overflows
        }}
      >
        <List>{renderRoutes}</List>
      </Paper>
    </Box>
  )
}

export default Sidenav

