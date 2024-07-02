import Paper from '@mui/material/Paper'
import HomeIcon from '@mui/icons-material/Home'
import ProfileIcon from '@mui/icons-material/Person'
import SettingIcon from '@mui/icons-material/Settings'
import NotificationIcon from '@mui/icons-material/NotificationImportant'
import { useTheme } from '@mui/material'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import { useState, useEffect } from 'react'


/**
 * TODO CONINUATION OF DYNAMIC STYLE SCROLLING
**/

const Navbar = () => {
  const theme = useTheme()
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  let colorIcon = theme.palette.grey[500]
  let backgroundColor = isScrolled ? 'rgba(255, 255, 255, 0.8)' : 'transparent';
  let backdropFilter = isScrolled ? 'saturate(200%) blur(1.875rem);' : 'none';
  let boxShadow = isScrolled ? 'rgba(255, 255, 255, 0.9) 0rem 0rem 0.0625rem 0.0625rem inset, rgba(0, 0, 0, 0.05) 0rem 1.25rem 1.6875rem 0rem' : 'none'

  return (
    <Paper sx={{
      position: 'sticky',
      top: '1rem',
      zIndex: 1100,
      boxShadow: boxShadow,
      marginTop: '2rem', marginRight: '1rem', marginLeft: '1rem', paddingTop: '0.5rem', paddingBottom: '0.5rem',
      backgroundColor: backgroundColor,
      backdropFilter: backdropFilter,
    }} elevation={0}>
      <nav className='flex flex-row px-4 justify-between items-center'>

        <div className='flex flex-col'>
          <div className='flex flex-row items-center'>
            <HomeIcon fontSize='small' style={{ color: colorIcon, fontSize: '16px' }} />
            <div className='text-sm' style={{ color: '#344767' }}>
              <span className='px-2'>/</span>
              <span>Dashboard</span>
            </div >
          </div>
          <span className='font-bold text-[1rem] ' style={{ color: '#344767', lineHeight: '1.625' }}>Dashboard</span>
        </div>

        <div className='flex flex-row items-center'>
          <Box
            sx={{
              color: 'black',
              '& > :not(style)': { m: 1, width: '25ch' },
            }} component='form'

            noValidate
            autoComplete="off"
          >
            <TextField id="outlined-basic" size='small' label="Outlined" variant="outlined" />


          </Box>
          <ProfileIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
          <SettingIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
          <NotificationIcon fontSize='small' style={{ color: colorIcon, marginLeft: '1rem' }} />
        </div>

      </nav>
    </Paper>
  )

}

export default Navbar
