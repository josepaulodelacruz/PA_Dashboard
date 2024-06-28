import React from 'react'
import { Box } from '@mui/material'
import { useLocation } from 'react-router-dom'

interface DashboardLayoutProps {
  children: React.ReactNode,
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <Box component='section' sx={{p: 2, border: '1px dashed grey'}}>
      {children}
    </Box>
  )
    
}

export default DashboardLayout
