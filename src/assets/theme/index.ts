

import { createTheme } from "@mui/material"

import breakpoints from './base/breakpoints'
import colors from './base/colors'
//import boxShadows from "@/assets/theme/functions/boxShadow"

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  //boxShadows: { ...boxShadows }
})
