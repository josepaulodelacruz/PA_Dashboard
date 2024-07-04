import Sidenav from "@/Components/Sidenav"
import Grid from "@mui/material/Grid"
import Navbar from '@/Components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { routes } from '@/routes'
import { RouteModel } from "@/Types"

const TemplateContainer = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const scrollableRef = useRef<any>(null);
  const [routeObject, setRouteObject] = useState<RouteModel>(routes[0])

  const handleScroll = () => {
    if (scrollableRef.current) {
      if (scrollableRef.current.scrollTop > 0) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
  }

  useLayoutEffect(() => {
    let matchedRoute = null;
    for (let i = 0; i < routes.length; i++) {
      if (routes[i].route === location.pathname) {
        matchedRoute = routes[i]
        break;
      }
    }

    if (matchedRoute) {
      setRouteObject(matchedRoute)
    }

  }, [location.pathname, routeObject])

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll)
      return () => {
        scrollableElement.removeEventListener('scroll', handleScroll)
      };
    }
  }, []);

  return (
    <Grid container >
      <Grid item lg={2} xs={0} >
        <Sidenav />
      </Grid>

      <Grid ref={scrollableRef} item lg={10} xs={12} style={{ height: '100vh', overflowY: 'auto' }} >
        <Navbar isScrolled={isScrolled} route={routeObject}/>
        <Outlet />
      </Grid>

    </Grid>
  )
}

export default TemplateContainer
