
import TitleLabel from '@/Components/Labels/TitleLabel'
import CheckIcon from '@mui/icons-material/Check'
import MoreVertIcon from '@mui/icons-material/MoreVert'
import SubTitleLabel from '@/Components/Labels/SubTitle'

interface CardWithTableProps { 
  title?: string
  children: React.ReactNode,
}

const CardWithTable = ({ title, children } : CardWithTableProps ) => {

  return (
    <div className='mt-4 bg-white h-full shadow-md rounded-xl w-full'>
      <div className='flex flex-row justify-between items-end'>
        <div className='flex flex-col px-4 pt-4'>
          <TitleLabel>{title!}</TitleLabel>
          <span className='flex flex-row items-end'>
            <CheckIcon fontSize='small' sx={{ color: '#7b809a' }} />
            <SubTitleLabel>5 paid monthly dues this month</SubTitleLabel>
          </span>
        </div>
        <MoreVertIcon fontSize='small' sx={{ color: '#7b809a', marginRight: '3rem' }} />
      </div>

      {children}
    </div>
  )
}

export default CardWithTable
