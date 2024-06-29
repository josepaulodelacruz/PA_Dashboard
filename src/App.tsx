import { Routes, Route, useLocation } from "react-router-dom"
import { routes } from "@/routes"
import { ThemeProvider } from '@mui/material/styles'
import theme from "@/assets/theme"

function App() {
  const location = useLocation()

  return (
    <ThemeProvider theme={theme}>
      <Routes key={location.pathname} location={location.pathname}>
        {
          routes.map((route) => {
            return <Route key={route.key} element={route.component} path={route.route} />
          })
        }
      </Routes>

    </ThemeProvider>

  )
}

export default App

