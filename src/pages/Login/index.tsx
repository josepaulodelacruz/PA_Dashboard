import AuthLayout from "@/Layouts/AuthLayout"
import linearGradient from "@/assets/theme/functions/linearGradient"
import { useTheme } from "@mui/material/styles"
import IconButton from '@/Components/Button/IconButton'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'
import InputTextField from "@/Components/InputTextField"
import PrimaryButton from "@/Components/Button/PrimaryButton"
import { Link } from 'react-router-dom'
import { MainSpan, SubSpan } from "@/Components/Labels/Spans"
import useTestApi from "@/Hooks/Test/useTestApi"
import { useState } from 'react'
import CircularProgress from "@mui/material/CircularProgress"
import LoadingHud from "@/Components/Modal/LoadingHud"

const LoginPage = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }
  const [isLoading, setIsLoading] = useState(false)

  let backgroundValue = linearGradient(gradients.info.main, gradients.info.state);

  const _handleLogin = () => {
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
    }, 5000)
  }

  return (
    <AuthLayout>
      <div className="flex flex-col justify-center flex-grow relative ">

        <div className="bg-gray-300 h-[300px] w-full absolute top-[0]" />

        <div
          className="self-center relative justify-center z-10 h-[380px] w-[350px]" >

          <div style={{ background: backgroundValue }} className="flex flex-col justify-center items-center w-[320px] rounded-lg shadow-lg mx-auto h-[100px] z-10 relative" >
            <h3 className="text-lg font-semibold text-white">Login in with</h3>

            <div className="flex flex-row">
              <IconButton color='inherit' style={{ color: 'white' }}>
                <GoogleIcon />
              </IconButton>
              <IconButton color='inherit' style={{ color: 'white' }}>
                <FacebookIcon />
              </IconButton>
            </div>

          </div>

          <div className="absolute h-full w-full bg-white rounded-xl shadow-xl top-5 pt-24 px-4 flex flex-col " >

            <div className="">
              <div className="py-2">
                <InputTextField placeholder="Email" label='Username' />
              </div>
              <div className="py-2">
                <InputTextField placeholder="Enter Password" label="Password" />
              </div>
            </div>

            <PrimaryButton
              disabled={isLoading}
              onClick={_handleLogin}
              backgroundValue={backgroundValue}
              style={{ marginTop: '1rem', marginBottom: '1rem', padding: '0.55rem' }}
            >
              {isLoading ?
                <CircularProgress size={20} color='inherit' />
                : "Login"
              }
            </PrimaryButton>


            <div className="self-center flex-row flex items-center ">
              <SubSpan style={{ paddingRight: '5px' }}>Don't have an account? </SubSpan>
              <Link to='/register'>
                <MainSpan style={{ color: backgroundValue, textDecoration: 'underline', fontSize: '0.70rem' }}>Register Here</MainSpan>
              </Link>
            </div>


          </div>
        </div>


      </div>

      <LoadingHud
        isLoading={isLoading}
      />
    </AuthLayout>
  )
}

export default LoginPage
