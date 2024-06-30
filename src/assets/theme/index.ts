

import { createTheme } from "@mui/material"

import breakpoints from './base/breakpoints'
import colors from './base/colors'
import typography from "./base/typography"
//import boxShadows from "@/assets/theme/functions/boxShadow"

export default createTheme({
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography: { ...typography },
  //boxShadows: { ...boxShadows }
})
