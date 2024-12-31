import Paper from '@mui/material/Paper'
import SideMenuToggleIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material'
import { TextField, InputAdornment, IconButton } from '@mui/material'
import Box from '@mui/material/Box'
import { RouteModel } from '@/Types'
import useToggleDrawer from '@/Hooks/Sidenav/useToggleDrawer'
import { useLocation, useNavigate } from 'react-router-dom'
import { useLayoutEffect, useState } from 'react'
import useSearchNavbar from '@/Hooks/Search/useSearchNavbar'
import ClearIcon from '@mui/icons-material/Clear'
import StringRoutes from '@/Constants/stringRoutes'


interface NavbarProps {
  isScrolled: boolean,
  route: RouteModel
}

const Navbar = ({ isScrolled }: NavbarProps) => {
  const [navRoute, setNavRoute] = useState<string[]>();
  const { pathname } = useLocation()
  const navigate = useNavigate()
  const theme = useTheme()
  const store = useToggleDrawer();
  const { onSearch, search, onReset } = useSearchNavbar()
  let colorIcon = theme.palette.grey[500]
  let backgroundColor = isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent';
  let backdropFilter = isScrolled ? 'saturate(200%) blur(1.875rem);' : 'none';
  let boxShadow = isScrolled ? 'rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem' : 'none'

  useLayoutEffect(() => {
    const items = StringRoutes.properlyParseEachNaedRoute(pathname)
    const routesList = items?.split(',')

    setNavRoute(routesList)

  }, [pathname])

  const _decodeURL = (encodedString: string) => {
    return decodeURIComponent(encodedString)
  }

  const _handleSidebarToggle = () => {
    store.isToggled()
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
          <span className='font-bold text-[1rem] ' style={{ color: '#344767', lineHeight: '1.625' }}>{StringRoutes.properlyParseNameRoute(pathname)}</span>
          <div className='flex flex-row items-center'>
            <div className='text-sm flex flex-row flex-1 items-center' style={{ color: '#344767' }}>
              {
                navRoute?.map((item, index) => {
                  return (
                    <div onClick={() => {
                      if(navRoute.length <= 1) return;
                      if(navRoute.length === (index + 1)) return;
                      navigate(index - 1)
                    }} 
                      className={navRoute.length > (index + 1) ? 'text-blue-400' : ''}
                      key={index}>
                      <span style={{ paddingLeft: index >= 1 ? '5px' : '0', cursor: 'pointer' }}>
                        {_decodeURL(item)}{index < navRoute.length - 1 ? ' /' : ''}
                      </span>
                    </div>
                  )
                })

              }

            </div>
          </div>
        </div>

        <div className='flex flex-row items-center w-full justify-between  sm:justify-end py-2 sm:p-0'>
          <Box
            component='form'
            noValidate
            autoComplete="off"
            className='w-full md:w-1/2 flex justify-end'
          >
            <TextField
              value={search}
              InputProps={{
                endAdornment: search && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="clear search"
                      onClick={() => onReset()}
                      edge="end"
                    >
                      <ClearIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onChange={(e) => onSearch(e.target.value)} fullWidth={true} id="outlined-basic" size='small' label="Search" variant="outlined" />
          </Box>
          <div className='justify-end'>
            <SideMenuToggleIcon onClick={_handleSidebarToggle} fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
          </div>

        </div>

      </nav>
    </Paper>
  )

}

export default Navbar
