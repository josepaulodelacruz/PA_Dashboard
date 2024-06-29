import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'

const Sidenav = () => {
  return (
    <Box 
      textAlign='center'
      sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        height: '100vh' // Parent container height
      }}
    >
      <Paper
        sx={{ 
          margin: '10px',
          display: 'flex',  
          flexDirection: 'column', 
          alignItems: 'center', 
          flex: 1, // Child element takes up remaining space
          overflowY: 'auto' // Scroll if content overflows
        }}
      >
        <Typography> hello </Typography>
      </Paper>
    </Box>
  )
}

export default Sidenav

