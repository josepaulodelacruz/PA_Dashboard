import React from 'react'
import Box from '@mui/material/Box'
import TemplateContainer from '@/Layouts/TemplateContainer'
import Sidenav from '@/Components/Sidenav'

interface DashboardLayoutProps {
  children: React.ReactNode
}

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <TemplateContainer
      sideElement={<Sidenav/>}
    >
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

    </TemplateContainer>



  )
}

export default DashboardLayout 
