import Sidenav from "@/Components/Sidenav"
import Navbar from '@/Components/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { routes } from '@/routes'
import { RouteModel } from "@/Types"
import useToggleDrawer from "@/Hooks/Sidenav/useToggleDrawer"
import { ScrollToTop } from "@/Utils"

const TemplateContainer = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const scrollableRef = useRef<any>(null);
  const [routeObject, setRouteObject] = useState<RouteModel>(routes[0])
  const _toggleSidebar = useToggleDrawer()
  const _isSidebarOpen = _toggleSidebar.isOpen

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
    <>
      <div className={`group grid h-screen transition-all  duration-300 grid-cols[100%] ${_isSidebarOpen ? 'xl:grid-cols-[18%_auto]' : 'xl:grid-cols-[110px_auto]'}`}>

        <Sidenav/>

        <div ref={scrollableRef} className="overflow-auto">
          <ScrollToTop scrollRef={scrollableRef} />
          
          <Navbar isScrolled={isScrolled} route={routeObject} />
          <Outlet />

        </div>


      </div>
    </>

  )
}

export default TemplateContainer
