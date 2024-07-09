import { useTheme } from '@mui/material/styles'

interface TableCellWithAvatarProps {
  avatar: string,
  name: string,
  subName: string
}

const TableCellWithAvatar = ({ avatar, name, subName} : TableCellWithAvatarProps ) => {
  const theme = useTheme();
  const { dark, primary } = theme.palette as { dark?: any, primary?: any }

  return (
    <div className="flex flex-row justify-start items-center">
      <div className="rounded-full p-4 bg-blue-500">

      </div>
      <div className="flex flex-col pl-3">
        <h6 style={{color: dark.main }}>{name}</h6>
        <span className='text-[0.75rem] font-light' style={{color: dark.main}}>{subName}</span>
      </div>
    </div>
  )
}

export default TableCellWithAvatar
