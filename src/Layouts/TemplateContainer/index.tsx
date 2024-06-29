import Box from "@mui/material/Box"

import Grid from "@mui/material/Grid"
import React from 'react'

interface TemplateConainerProps {
  children: React.ReactNode,
  sideElement: React.ReactNode
}

const TemplateContainer = ({ children, sideElement }: TemplateConainerProps) => {
  return (
    <Grid container >
      <Grid item md={2} >
        {sideElement}
      </Grid>

      <Grid item md={10} xs={12}>
        {children}
      </Grid>

    </Grid>

  )
}

export default TemplateContainer
