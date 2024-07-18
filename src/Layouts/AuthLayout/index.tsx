import { ReactNode } from "react"
import Box from '@mui/material/Box'


interface AuthLayout {
  children?: ReactNode
}

const AuthLayout = ({ children }: AuthLayout) => {

  return (
    <Box
      id='auth-container'
      px={1.5}
      display='flex'
      flexDirection='column'
      sx={({ breakpoints, transitions }) => ({
        paddingTop: '0.5rem',
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

export default AuthLayout
