import { TableRow } from "@mui/material"
import CheckBox from '@mui/material/Checkbox'

const ModelCheckListRowComponent = () => {
  return (
    <TableRow className='border-b'>
      <td align='center' className='column-header'>
        <CheckBox />
      </td>
      <td align="center" className='text-[0.60rem] text-black'>1</td>
      <td align="center" className='text-[0.70rem] text-black'>Layout</td>
      <td align="center" className='text-[0.70rem] text-black'>Setback according to plan</td>
    </TableRow>
  )
}

export default ModelCheckListRowComponent
