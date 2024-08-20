import { TableRow } from "@mui/material"
import CheckBox from '@mui/material/Checkbox'

interface ModelCheckListRowComponentProps {
  is_applicable: boolean,
  id: number,
  group: string,
  class: string,
  item: string
}

const ModelCheckListRowComponent = (props: {
  checklist: ModelCheckListRowComponentProps,
  style?: React.CSSProperties,
  onClick?: (isApplicable: boolean) => void,
}) => {
  const { checklist } = props
  const isApplicable = Boolean(checklist.is_applicable) 
  return (
    <TableRow onClick={() => props.onClick!(checklist.is_applicable)} className='border-b ' style={props.style!}>
      <td align="center" className='text-[0.60rem] text-black'>{checklist.id}</td>
      <td align="left" className='text-[0.70rem] text-black'>{checklist.class}</td>
      <td align="left" className='text-[0.70rem] text-black'>{checklist.item}</td>
      <td align='center' className='column-header'>
        <CheckBox value={isApplicable} checked={isApplicable} />
      </td>
    </TableRow>
  )
}

export default ModelCheckListRowComponent
