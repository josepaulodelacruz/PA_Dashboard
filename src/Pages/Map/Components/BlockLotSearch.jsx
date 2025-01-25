import { TextField, Box, InputAdornment, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { useTheme } from "@mui/material/styles"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import { MainSpan, SubSpan } from '@/Components/Labels/Spans.tsx'

const BlockLotSearch = ({
  onReset = null,
  search = null,
  onSearch = null,
  onSideOpen = null,
  isSideOpen = false,
}) => {
  const theme = useTheme()
  const primar = theme.palette.primary
  const navigate = useNavigate()

  return <div className='relative rounded-md top-10 left-[50px] bg-white w-[45%] z-[500] p-2'>
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-col flex-[0.7]'>
        <MainSpan>Plot</MainSpan>
        <div className='flex flex-row text-sm'>
          <a href={null} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }} className='text-blue-500 pr-1'>Map</a>
          <span>/</span>
          <span className='pl-1'>Plot</span>
        </div>

      </div>
      <Box
        component='form'
        noValidate
        autoComplete="off"
        className='flex-1'
      >
        <TextField
          InputProps={{
            endAdornment: search && (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear search"
                  onClick={onReset}
                  edge="end"
                >
                  <ClearIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
          fullWidth={true} id="outlined-basic" size='small' label="Search" variant="outlined" />
      </Box>

      {
        !isSideOpen ?
          <MenuIcon
            onClick={() => onSideOpen()}
            style={{ color: primar.main }} className='ml-5' /> :
          <MenuOpenIcon
            onClick={() => onSideOpen()}
            style={{ color: primar.main }} className='ml-5' />

      }
    </div>



  </div>
}

export default BlockLotSearch
