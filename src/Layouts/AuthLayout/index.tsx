import { useRef } from "react"
import Box from '@mui/material/Box'
import { useLocation, useOutlet } from 'react-router-dom'
import { MainSpan } from "@/Components/Labels/Spans"
import { Link } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'
import '@/index.css'

const AuthLayout = () => {
  const location = useLocation()
  const currentOutlet = useOutlet()
  const ref = useRef(null)

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
      <div className="flex h-full">
        <SwitchTransition>
          <CSSTransition
            key={location.pathname}
            classNames='fade'
            unmountOnExit
            nodeRef={ref}
            timeout={300}>
            <div className="flex flex-col justify-center flex-grow relative ">

              <div className="bg-gray-300 h-[300px] w-full absolute top-[0]" />
              <div ref={ref}
                className="self-center relative justify-center z-10 h-[380px] w-[350px]">
                {currentOutlet}
              </div>
            </div>
          </CSSTransition>
        </SwitchTransition>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-between md:px-24 px-2 md:pb-10">

        <MainSpan style={{ fontSize: '12px' }}>© 2024, made by JPDC.Inc. </MainSpan>

        <div className="flex flex-row items-center  pb-2 justify-between md:justify-end gap-4 md:space-x-2">
          <Link to='/dashboard'> <MainSpan style={{ fontSize: '0.85rem', textDecoration: 'underline' }}>Home</MainSpan> </Link>
          <Link to='/dashboard'> <MainSpan style={{ fontSize: '0.85rem', textDecoration: 'underline' }}>Blog</MainSpan> </Link>
          <Link to='/dashboard'> <MainSpan style={{ fontSize: '0.85rem', textDecoration: 'underline' }}>Terms & Condition</MainSpan> </Link>
          <Link to='/dashboard'> <MainSpan style={{ fontSize: '0.85rem', textDecoration: 'underline' }}>Products</MainSpan> </Link>

        </div>

      </div>
    </Box>


  )

}

export default AuthLayout
