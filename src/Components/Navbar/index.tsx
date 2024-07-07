import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import TablesIcon from '@mui/icons-material/TableRows'
import ProfileIcon from '@mui/icons-material/Person'
import SettingIcon from '@mui/icons-material/Settings'
import NotificationIcon from '@mui/icons-material/NotificationImportant'
import SideMenuToggleIcon from '@mui/icons-material/Menu'
import { useTheme } from '@mui/material'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { RouteModel } from '@/Types'
import useToggleDrawer from '@/Hooks/Sidenav/useToggleDrawer'

interface NavbarProps {
  isScrolled: boolean,
  route: RouteModel
}

const Navbar = ({ isScrolled, route }: NavbarProps) => {
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
    }
    return null;
  };


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

        <div className='flex flex-col'>
          <div className='flex flex-row items-center'>
            <IconComponent name={route.name} style={{ color: colorIcon, fontSize: '16px' }} />
            <div className='text-sm' style={{ color: '#344767' }}>
              <span className='px-2'>/</span>
              <span>{route.name}</span>
            </div >
          </div>
          <span className='font-bold text-[1rem] ' style={{ color: '#344767', lineHeight: '1.625' }}>{route.name}</span>
        </div>

        <div className='flex flex-row items-center w-full justify-between  sm:justify-end py-2 sm:p-0'>
          <Box
            sx={{
              color: 'black',
              '& > :not(style)': { m: 0, width: '22ch' },
            }} component='form'

            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" size='small' label="Search" variant="outlined" />
          </Box>
          <div>
            <SideMenuToggleIcon onClick={() => store.isToggled() } fontSize='small'  style={{ color: colorIcon, marginLeft: '1rem' }} />
            <ProfileIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
            <SettingIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
            <NotificationIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
          </div>

        </div>

      </nav>
    </Paper>
  )

}

export default Navbar
