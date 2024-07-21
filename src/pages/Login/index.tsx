import AuthLayout from "@/Layoutn/AuthLayout"
import linearGradient from "@/assets/theme/functions/linearGradient"
import { useTheme } from "@mui/material/styles"
import IconButton from '@/Components/Button/IconButton'
import GoogleIcon from '@mui/icons-material/Google'
import FacebookIcon from '@mui/icons-material/FacebookOutlined'
import InputTextField from "@/Components/InputTextField"
import PrimaryButton from "@/Components/Button/PrimaryButton"
import { Link } from 'react-router-dom'
import { ArrowBackIos } from "@mui/icons-material"

const LoginPage = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let backgroundValue = linearGradient(gradients.info.main, gradients.info.state)

  return (
    <AuthLayout>
      <div className="flex flex-col ">
        <div className="w-full h-[250px] bg-gray-300 rounded-lg relative" />

        <div
          className="self-center relative justify-center top-[-100px] z-10 h-[400px] w-[350px]" >

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

            <div className="flex-grow">
              <InputTextField placeholder="Email" label='Username' />
              <InputTextField placeholder="Enter Password" label="Password" />
            </div>

            <div className="flex flex-row justify-between">
              <Link to='/' className="items-center flex text-sm underline " >
                <ArrowBackIos sx={{ fontSize: '12px' }} />
                Back to Login
              </Link>

              <PrimaryButton
                backgroundValue={backgroundValue}
                style={{ marginTop: '1rem', marginBottom: '1rem', padding: '0.55rem' }}
              >
                LOGIN
              </PrimaryButton>

            </div>

          </div>
        </div>
      </div>

    </AuthLayout>
  )
}

export default LoginPage
