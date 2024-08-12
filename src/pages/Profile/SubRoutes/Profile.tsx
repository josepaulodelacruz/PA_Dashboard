import { useTheme, } from '@mui/material'
import linearGradient from '@/assets/theme/functions/linearGradient'
import BorderedButton from '@/Components/Button/BorderedButton'
import Paper from '@mui/material/Paper'
import CameraIcon from '@mui/icons-material/CameraEnhance'
import IconButton from '@/Components/Button/IconButton'
import { MainSpan, SubSpan } from '@/Components/Labels/Spans'
import LineDivider from '@/Components/LineDivider'

const Profile = () => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let coverBackground = linearGradient(gradients.secondary.main, gradients.secondary.state)
  let iconColor = linearGradient(gradients.info.main, gradients.info.state)


  return (
    <div className="flex flex-col relative px-1 ">
      <Paper className='h-[280px] w-full rounded-md' sx={{ background: coverBackground }}>
        <BorderedButton style={{ float: 'right', padding: '0.6rem', color: 'white', borderColor: 'white', marginTop: '1rem', marginRight: '1rem' }} >
          <CameraIcon fontSize='small' style={{marginRight: '0.4rem'}}/>
          <span>UPDATE COVER</span>
        </BorderedButton>
      </Paper>

      <div className='grid grid-cols-12 gap-4 mx-5 flex-grow rounded-md top-[-80px] relative'>
        <div className='md:col-span-3 col-span-12 bg-white rounded-md shadow-md '>

          <div className='h-[175px] relative flex flex-col items-center justify-center'>

            <div
              className='h-[150px] absolute top-[10%] w-[150px] rounded-full shadow-lg'
              style={{ background: coverBackground }}
            />

            <IconButton
              style={{
                border: '3px solid white',
                background: iconColor,
                color: '#fff',
                padding: '0.7rem',
                borderRadius: '100px',
                position: 'relative', zIndex: 10, right: '-45px', top: '57px'
              }}
            >
              <CameraIcon fontSize='small' color={'inherit'} />
            </IconButton>
          </div>

          <MainSpan className='text-center'>Jose Paulo M. Dela Cruz</MainSpan>
          <SubSpan className='flex justify-center text-sm'>Software Engineer</SubSpan>

          <div className='pt-3'>
            <LineDivider />
          </div>

          <div className='h-[400px]'></div>
        </div>

        <div className='md:col-span-9 col-span-12'>test</div>
      </div>



    </div>
  )
}

export default Profile;

