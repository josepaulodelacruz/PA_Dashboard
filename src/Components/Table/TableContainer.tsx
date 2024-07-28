import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import { useTheme } from '@mui/material'
import linearGradient from '@/assets/theme/functions/linearGradient'
import { ReactElement, ReactNode } from 'react'

interface TableContainerProps {
  tableTitle: string
  tableHeader: ReactElement,
  tableHeaderAction?: ReactNode,
  children: ReactNode,
}

const TableContainer: React.FC<TableContainerProps> = ({ 
  tableTitle,
  tableHeader,
  tableHeaderAction,
  children}) => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let backgroundValue = linearGradient(gradients.info.main, gradients.info.state)
  return (

    <>
      <div style={{ background: backgroundValue }} className='flex items-center justify-between top-0 px-4 h-[60px] w-[95%] md:w-[98%] mx-auto relative z-10 rounded-lg shadow-lg'>
        <h6 className='table-header-text'>{tableTitle}</h6>
        {tableHeaderAction!}
       
      </div>

      <div className='top-[-40px]  bg-white min-h-[100px] relative w-full pt-12 overflow-y-auto shadow-md rounded-xl'  >
        <Table >
          <TableHead>
            {tableHeader}
          </TableHead>

          <TableBody>
            {children}
          </TableBody>

        </Table>
      </div>
    </>




  )

}

export default TableContainer
