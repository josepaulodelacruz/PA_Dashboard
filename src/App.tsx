import { Routes, Route, useLocation } from "react-router-dom"
import { routes } from "./routes"

function App() {
  const location = useLocation()

  return (
    <Routes key={location.pathname} location={location.pathname}>
      {
        routes.map((route) => {
          return <Route key={route.key} element={route.component} path={route.route}/>
        })
      }
    </Routes>
  )
}

export default App

