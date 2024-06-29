import React from 'react'
import Box from '@mui/material/Box'

interface DashboardLayoutProps {
  children: React.ReactNode
}

function DashboardLayout({ children } : DashboardLayoutProps ) {
  return (
    <Box
      sx={({ breakpoints, transitions }) => ({
        p: 3,
        position: "relative",
        [breakpoints.up("xl")]: {
          transition: transitions.create(["margin-left", "margin-right"], {
            easing: transitions.easing.easeInOut,
            duration: transitions.duration.standard,
          }),
        },
      })}
    >
      {children}
    </Box>
  )
}

export default DashboardLayout 
