import Sidenav from "@/Components/Sidenav"
import Navbar from '@/Components/Navbar'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect, useRef, useLayoutEffect } from 'react'
import { routes } from '@/routes'
import { RouteModel } from "@/Types"
import useToggleDrawer from "@/Hooks/Sidenav/useToggleDrawer"
import { ScrollToTop } from "@/Utils"
import GenericModal from "@/Components/Modal/GenericModal"
import StringRoutes from "@/Constants/stringRoutes"
import useAuth from "@/Hooks/Auth/useAuth"

const TemplateContainer = () => {
  const location = useLocation()
  const [isScrolled, setIsScrolled] = useState<boolean>(false)
  const [isLogout, setIsLogout] = useState<boolean>(false)
  const scrollableRef = useRef<any>(null);
  const [routeObject, setRouteObject] = useState<RouteModel>(routes[0])
  const _toggleSidebar = useToggleDrawer()
  const _isSidebarOpen = _toggleSidebar.isOpen
  const navigate = useNavigate()
  const { onSetSession } = useAuth()
  const { isSessionActive } = useAuth()

  useEffect(() => {
    if(!isSessionActive) {
      navigate('/')
    }

  }, [location.pathname, navigate]);

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
      const currentRoute = routes[i];

      // Check for items within the current route
      if (Array.isArray(currentRoute.items)) {
        for (let x = 0; x < currentRoute.items.length; x++) {
          if (currentRoute.items[x].route === location.pathname) {
            matchedRoute = currentRoute.items[x];
            break;
          }
        }
      }

      // Check if the current route itself matches
      if (currentRoute.route === location.pathname) {
        matchedRoute = currentRoute;
        break;
      }
    }

    if (matchedRoute) {
      setRouteObject(matchedRoute);
    }
  }, [location.pathname, routes]);

  useEffect(() => {
    const scrollableElement = scrollableRef.current;
    if (scrollableElement) {
      scrollableElement.addEventListener('scroll', handleScroll)
      return () => {
        scrollableElement.removeEventListener('scroll', handleScroll)
      };
    }
  }, []);

  const _handleLogout = () => {
    setIsLogout(true)
  }

  return (
    <>
      <div className={`group grid h-screen transition-all duration-300 grid-cols[100%] ${_isSidebarOpen ? 'xl:grid-cols-[18%_auto]' : 'xl:grid-cols-[110px_auto]'}`}>

        <Sidenav
          onLogout={_handleLogout}
        />

        <div ref={scrollableRef} className="overflow-auto">
          <ScrollToTop scrollRef={scrollableRef} />

          <Navbar isScrolled={isScrolled} route={routeObject} />
          <Outlet context={{ isScrolled }} />

        </div>

        <GenericModal
          isOpen={isLogout}
          onClick={() => {
            setIsLogout(false)
            onSetSession(false)
            navigate(StringRoutes.login)
          }}
          onClose={() => {
            setIsLogout(false)
          }}
          title="Logout!"
          label="Are you sure you want to logout?"
        />

      </div>
    </>

  )
}

export default TemplateContainer
