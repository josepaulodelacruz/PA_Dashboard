import TableCell from '@mui/material/TableCell'
import colors from '@/assets/theme/base/colors';
import '@/index.css'

interface TableHeaderLabelProps {
  title: string,
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
  width?: string
}

interface TableBodyLabelProps {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
  children: React.ReactNode,
}

interface TableMainSubProps {
  label: string,
  subLabel: string
}

const TableHeaderLabel: React.FC<TableHeaderLabelProps> = ({ title, align = 'left', width }) => {
  return (
    <th style={{fontSize: '0.70rem', textAlign: align, width: width!, color: 'black', fontWeight: '600'}} className='column-header text-black'>{title}</th>
 )
}

const TableBodyLabel: React.FC<TableBodyLabelProps> = ({ children, align = 'left' }) =>
  <TableCell align={align} sx={{ px: 2, py: 2.5 }} >
    {children}
  </TableCell>


const TableMainSub: React.FC<TableMainSubProps> = ({ label, subLabel }) => 
  <div className='float-start'>
    <span className={`block text-sm text-left font-bold color-[${colors.dark.main}]`}>{label}</span>
    <span className={`block text-[0.60rem] text-left font-light`} style={{color: 'rgb(123, 128, 154)'}}>PAID July 6, 2024, {subLabel}</span>
  </div>



export { TableHeaderLabel, TableBodyLabel, TableMainSub }

