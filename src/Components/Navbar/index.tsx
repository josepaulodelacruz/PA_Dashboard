import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import TablesIcon from '@mui/icons-material/TableRows'
import PeopleIcon from '@mui/icons-material/People'
import ProfileIcon from '@mui/icons-material/Person'
import SettingIcon from '@mui/icons-material/Settings'
import NotificationIcon from '@mui/icons-material/NotificationImportant'
import SideMenuToggleIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { RouteModel, NavRoute } from '@/Types'
import useToggleDrawer from '@/Hooks/Sidenav/useToggleDrawer'
import { useLocation, useNavigate, NavLink } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import StringRoutes from '@/Constants/stringRoutes'


interface NavbarProps {
  isScrolled: boolean,
  route: RouteModel
}

const Navbar = ({ isScrolled, route }: NavbarProps) => {
  const [navRoute, setNavRoute] = useState<NavRoute>();
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()
  const store = useToggleDrawer();
  let colorIcon = theme.palette.grey[500]
  let backgroundColor = isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent';
  let backdropFilter = isScrolled ? 'saturate(200%) blur(1.875rem);' : 'none';
  let boxShadow = isScrolled ? 'rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem' : 'none'

  const IconComponent: React.FC<{ style: React.CSSProperties, name: string }> = ({ style, name }) => {
    if (name === 'Dashboard') {
      return <HomeIcon fontSize='small' style={style} />;
    } else if (name === 'Tables') {
      return <TablesIcon fontSize='small' style={style} />;
    } else if (name === 'Users') {
      return <PeopleIcon fontSize='small' style={style} />;
    }
    return null;
  };

  useLayoutEffect(() => {
    const comparingString = pathname.replace(/^\/dashboard\//, "").toLowerCase()
    const routeString = comparingString.split('/')
    const capitalizeRouteString = routeString.map((route) => {
      return route.charAt(0).toUpperCase() + route.slice(1)
    })

    setNavRoute({
      path: comparingString,
      name: capitalizeRouteString[capitalizeRouteString.length - 1],
      pathItems: capitalizeRouteString
    })

  }, [pathname])

  const _handleSidebarToggle = () => {
    store.isToggled()
  }

  const _handleNavigateBack = () => {
    navigate(-1)
  }

  return (
    <Paper
      sx={{
        transition: 'box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms',
        position: 'sticky',
        top: '1rem',
        zIndex: 1100,
        borderRadius: '0.75rem',
        boxShadow: boxShadow,
        marginTop: '2rem',
        marginRight: '1rem',
        marginLeft: '1rem',
        paddingTop: '0.5rem',
        paddingBottom: '0.5rem',
        background: backgroundColor,
        backdropFilter: backdropFilter,
      }} elevation={4}>
      <nav className='flex sm:flex-row flex-col px-4 md:justify-between items-start md:items-center'>

        <div className='flex flex-col transition duration-300 translate-y-0 w-full'>
          <div className='flex flex-row items-center'>
            <IconComponent name={route.name} style={{ color: colorIcon, fontSize: '16px' }} />
            <div className='text-sm flex flex-row flex-1 items-center' style={{ color: '#344767' }}>
              {
                navRoute?.pathItems.map((item, index) => {
                  return (
                    <div key={index}>
                      <span className='hover:text-blue' onClick={() => index < navRoute.pathItems.length - 1 ? _handleNavigateBack() : null} style={{ paddingLeft: '5px', cursor: 'pointer' }}>
                        {item}{index < navRoute.pathItems.length - 1 ? ' /' : ''}
                      </span>
                    </div>
                  )
                })
              }
            </div>
          </div>
          <span className='font-bold text-[1rem] ' style={{ color: '#344767', lineHeight: '1.625' }}>{navRoute?.name}</span>
        </div>

        <div className='flex flex-row items-center w-full justify-between  sm:justify-end py-2 sm:p-0'>
          <Box
            component='form'
            noValidate
            autoComplete="off"
            className='w-1/2 flex justify-end'
          >
            <TextField fullWidth={false} id="outlined-basic" size='small' label="Search" variant="outlined" />
          </Box>
          <div className='justify-end'>
            <SideMenuToggleIcon onClick={_handleSidebarToggle} fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
            <NavLink to={StringRoutes.profile_home}>
              <ProfileIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
            </NavLink>

            <SettingIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
            <NotificationIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
          </div>

        </div>

      </nav>
    </Paper>
  )

}

export default Navbar
