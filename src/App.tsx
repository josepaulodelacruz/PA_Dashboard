import { Routes, Route, useLocation } from "react-router-dom"
import { routes } from "@/routes"
import { ThemeProvider } from '@mui/material/styles'
import theme from "@/assets/theme"
import CssBaseline from "@mui/material/CssBaseline"
import TemplateContainer from "./Layouts/TemplateContainer"

function App() {
  const location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Routes key={location.pathname} location={location.pathname}>
        <Route path='/' element={<TemplateContainer />} >
          {
            routes.map((route) => {
              return <Route key={route.key} element={route.component} path={route.route} />
            })
          }
        </Route>
      </Routes>

    </ThemeProvider>

  )
}

export default App

