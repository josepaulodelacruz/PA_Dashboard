import { ThemeProvider } from '@mui/material/styles'
import theme from "@/assets/theme"
import CssBaseline from "@mui/material/CssBaseline"
import RootLayout from "./Layouts/RootLayout"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootLayout />

    </ThemeProvider>

  )
}

export default App

