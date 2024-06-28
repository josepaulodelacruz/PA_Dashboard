import React from 'react'
import Box from '@mui/material/Box'

interface DashboardLayoutProps {
  children: React.ReactNode
}

function DashboardLayout({ children } : DashboardLayoutProps ) {
  return (
    <Box>
      {children}
    </Box>
  )
}

export default DashboardLayout 
