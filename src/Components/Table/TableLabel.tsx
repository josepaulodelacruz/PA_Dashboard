import TableCell from '@mui/material/TableCell'

interface TableHeaderLabelProps {
  title: string,
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify';
}

interface TableBodyLabelProps {
  align?: 'inherit' | 'left' | 'center' | 'right' | 'justify',
  children: React.ReactNode,
}

const TableHeaderLabel: React.FC<TableHeaderLabelProps> = ({ title, align = 'left' }) => {
  return (
    <TableCell align={align} sx={{ px: 2, py: 1 }} >
      <span className='text-[#7b809a] text-[0.65rem] font-bold'>{title}</span>
    </TableCell>
  )
}

const TableBodyLabel: React.FC<TableBodyLabelProps> = ({ children, align = 'left' }) =>
  <TableCell align={align} sx={{ px: 2, py: 2.5 }} >
    {children}
  </TableCell>




export { TableHeaderLabel, TableBodyLabel }

