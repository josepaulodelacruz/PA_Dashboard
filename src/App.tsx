import { Routes, Route, useLocation, ScrollRestoration } from "react-router-dom"
import { routes } from "@/routes"
import { ThemeProvider } from '@mui/material/styles'
import theme from "@/assets/theme"
import CssBaseline from "@mui/material/CssBaseline"
import TemplateContainer from "./Layouts/TemplateContainer"
import RootLayout from "./Layouts/RootLayout"
import { ScrollToTop } from "./Utils"

function App() {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RootLayout />

    </ThemeProvider>

  )
}

export default App

