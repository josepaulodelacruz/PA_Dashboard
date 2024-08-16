import { ThemeProvider } from '@mui/material/styles'
import theme from "@/assets/theme"
import CssBaseline from "@mui/material/CssBaseline"
import RootLayout from "./Layouts/RootLayout"
import { SnackbarProvider } from 'notistack'

function App() {

  return (
    <ThemeProvider theme={theme}>
      <SnackbarProvider 
        autoHideDuration={1000}
        maxSnack={3}>
        <CssBaseline />
        <RootLayout />
      </SnackbarProvider>
    </ThemeProvider>

  )
}

export default App

