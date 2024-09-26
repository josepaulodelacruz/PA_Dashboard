import linearGradient from "@/assets/theme/functions/linearGradient"
import { useTheme } from "@mui/material/styles"
import InputTextField from "@/Components/InputTextField"
import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
//import PrimaryButton from "@/Components/Button/PrimaryButton"
import { MainSpan, SubSpan } from "@/Components/Labels/Spans"
import { useState } from 'react'
import CircularProgress from "@mui/material/CircularProgress"
import LoadingHud from "@/Components/Modal/LoadingHud"
import SubTitleLabel from "@/Components/Labels/SubTitle"
import useLoginMutation from "@/Hooks/Auth/useLoginMutation"
import useAuth from "@/Hooks/Auth/useAuth"
import { useNavigate } from "react-router-dom"
//import StringRoutes from "@/Constants/stringRoutes"
import SnackbarComponent, { SnackbarType } from '@/Components/Snackbar'

const LoginPage = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }
  const [uiIsLoading, setIsLoading] = useState(false)
  const { mutateAsync: login, isLoading } = useLoginMutation()
  const { onSetSession } = useAuth()
  const navigate = useNavigate()
  const [snackbar, setSnackbar] = useState<SnackbarType>({
    isOpen: false,
    message: ''
  })

  let backgroundValue = linearGradient(gradients.primary.state, gradients.primary.main);

  const _handleLogin = async (e: React.FormEvent<HTMLInputElement>) => {
    const form = e.target as HTMLFormElement;
    const username = (form[0] as HTMLInputElement).value
    const password = (form[1] as HTMLInputElement).value
    e.preventDefault()

    let loginStatus = false
    setIsLoading(true)
    try {
      const { data } = await login({ Username: username, Password: password });

      if (data.status) {
        loginStatus = true
      } else {
        setSnackbar({ isOpen: true, message: data.errorMessage })
      }

    } catch (err) {
      setSnackbar({ isOpen: true, message: `${err}` })
    } finally {
      setIsLoading(false)
      if (loginStatus) {
        onSetSession(loginStatus)
        //navigate(StringRoutes.dashboard)
        navigate('/')
      }
    }
  }

  return (
    <>

      <div style={{ background: backgroundValue }} className="flex flex-col justify-center items-center w-[320px] rounded-lg shadow-md mx-auto h-[100px] z-10 relative" >
        <h3 className="text-lg font-semibold text-white">PMDMTS</h3>

        <div className="flex flex-row">
          <SubTitleLabel style={{ color: 'white' }}>Version 2</SubTitleLabel>
        </div>

      </div>

      <div className="absolute h-full w-full bg-white rounded-xl shadow-2xl top-5 pt-24 px-4 flex flex-col " >

        <Box component="form" onSubmit={_handleLogin}>
          <div className="">
            <div className="py-2">
              <InputTextField
                name="username"
                placeholder="Email" label='Username' />
            </div>
            <div className="py-2">
              <InputTextField
                required={true}
                name="password"
                type='password'
                placeholder="Enter Password" label="Password" />
            </div>
          </div>

          <Button
            style={{ background: backgroundValue, color: 'white', width: '100%' }}
            sx={{ marginY: '1rem', paddingY: '0.6rem' }}
            type="submit" >
            {isLoading ?
              <CircularProgress size={20} color='inherit' />
              : "Login"
            }
          </Button>
        </Box>

        <div className="self-center flex-row flex items-center ">
          <SubSpan style={{ paddingRight: '5px' }}>Don't have an access? </SubSpan>
          <MainSpan style={{ color: backgroundValue, textDecoration: 'underline', fontSize: '0.70rem' }}>Request access</MainSpan>
        </div>


      </div>

      <SnackbarComponent
        isOpen={snackbar.isOpen}
        message={snackbar.message}
        onClose={() => setSnackbar({ isOpen: false })}
      />


      <LoadingHud isLoading={uiIsLoading} />
    </>
  )
}

export default LoginPage
