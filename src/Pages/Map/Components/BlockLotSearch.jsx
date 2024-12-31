import { TextField, Box, InputAdornment, IconButton } from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear'
import { MainSpan } from "@/Components/Labels/Spans"
import { useTheme } from "@mui/material/styles"
import MenuOpenIcon from '@mui/icons-material/MenuOpen';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';

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

  const SiteProjectFields = ({ label, value, values = [], loading }) => {
    return (
      <div className="flex-grow">
        <SubSpan>{label}</SubSpan>
        <div className='border bg-gray-100 shadow-sm'>
          {loading ? (
            <div className="shimmer h-10 w-full"></div>
          ) : (
            values.length <= 0 ? (
              <MainSpan style={{ padding: '0.5rem' }}>{value}</MainSpan>
            ) : (
              <div className="flex flex-col">
                {values.map((val) => {
                  let index = values.indexOf(val);
                  return <SubSpan key={val}><strong>{index + 1}</strong>. {val}</SubSpan>
                })}
              </div>
            )
          )}
        </div>
      </div>
    );
  };

  return <div className='absolute rounded-md top-10 left-[50px] bg-white w-[45%] z-[500] p-2'>
    <div className='flex flex-row items-center justify-between'>
      <div className='flex flex-col flex-[0.7]'>
        <MainSpan>Plot</MainSpan>
        <div className='flex flex-row text-sm'>
          <a href={null} onClick={() => navigate(-1)} style={{ cursor: 'pointer' }}>Map</a>
          <span>/</span>
          <span>Plot</span>
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
