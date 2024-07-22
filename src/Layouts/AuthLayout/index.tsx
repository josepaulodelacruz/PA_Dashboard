import { ReactNode } from "react"
import Box from '@mui/material/Box'
import { MainSpan, SubSpan } from "@/Components/Labels/Spans"
import { Link } from 'react-router-dom'


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
      height='100vh'
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
      <div className="flex-1 flex">
        {children}
      </div>
      <div className="flex items-center justify-between ">

        <MainSpan style={{fontSize: '12px', whiteSpace: 'nowrap'}}>© 2024, made by JPDC.Inc. </MainSpan>

        <div className="flex flex-row items-start ">
          <Link to='/dashboard'> <MainSpan style={{fontSize: '0.85rem', textDecoration: 'underline'}}>Home</MainSpan> </Link>
          <Link to='/dashboard'> <MainSpan style={{fontSize: '0.85rem', textDecoration: 'underline'}}>Blog</MainSpan> </Link>
          <Link to='/dashboard'> <MainSpan style={{fontSize: '0.85rem', textDecoration: 'underline'}}>Terms & Condition</MainSpan> </Link>
          <Link to='/dashboard'> <MainSpan style={{fontSize: '0.85rem', textDecoration: 'underline'}}>Products</MainSpan> </Link>

        </div>

      </div>
    </Box>


  )

}

export default AuthLayout
