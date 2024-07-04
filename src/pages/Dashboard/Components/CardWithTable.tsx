
import TitleLabel from '@/Components/Labels/TitleLabel'
import CheckIcon from '@mui/icons-material/Check'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import { useTheme } from '@mui/material/styles'
import SubTitleLabel from '@/Components/Labels/SubTitle'

interface CardWithTableProps { 
  children: React.ReactNode,
}

const CardWithTable = ({ children } : CardWithTableProps ) => {
  const theme = useTheme()
  const { info } = theme.palette as { info?: any }
  console.log(info.main)
  return (
    <div className='mt-4 bg-white shadow-md rounded-xl h-[450px] w-full'>
      <div className='flex flex-row justify-between items-end'>
        <div className='flex flex-col px-4 pt-4'>
          <TitleLabel>Projects</TitleLabel>
          <span className='flex flex-row items-end'>
            <CheckIcon fontSize='small' sx={{ color: '#7b809a' }} />
            <SubTitleLabel>30 paid monthly dues this month</SubTitleLabel>
          </span>
        </div>
        <MoreVertIcon fontSize='small' sx={{ color: '#7b809a', marginRight: '3rem' }} />
      </div>

      {children}
    </div>
  )
}

export default CardWithTable
