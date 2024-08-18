import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import Box from '@mui/material/Box'
import { useTheme } from '@mui/material'
import linearGradient from '@/assets/theme/functions/linearGradient'
import { ReactElement, ReactNode, useEffect, useRef } from 'react'
import useSearchNavbar from '@/Hooks/Search/useSearchNavbar'

interface TableContainerProps {
  tableTitle: string
  tableHeader: ReactElement,
  tableHeaderAction?: ReactNode,
  children: ReactNode,
  note?: ReactNode
}

const TableContainer: React.FC<TableContainerProps> = ({ 
  tableTitle,
  tableHeader,
  tableHeaderAction,
  children,
  note
}) => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }
  const ref = useRef<HTMLDivElement | null>(null)
  const { search } = useSearchNavbar()

  useEffect(() => {
    if (ref.current && search !== undefined) {
      const rows = ref.current.children 
      for (let i = 0; i < rows.length; i++) {
        const row = rows[i] as HTMLElement
        if (row.textContent?.toLowerCase().includes(search.toLowerCase())) {
          row.style.display = '';
        } else {
          row.style.display = 'none';
        }
      }
    }
  }, [search])

  let backgroundValue = linearGradient(gradients.primary.main, gradients.primary.state)

  return (
    <>
      <div style={{ background: backgroundValue }} className='flex items-center justify-between top-0 px-4 h-[60px] w-[95%] md:w-[98%] mx-auto relative z-10 rounded-lg shadow-sm'>
        <h6 className='table-header-text'>{tableTitle}</h6>
        {tableHeaderAction!}
      </div>

      <div className='top-[-40px]  bg-white min-h-[100px] relative w-full pt-12 overflow-y-auto shadow-sm rounded-xl'  >
        {note!}
        <Table >
          <TableHead>
            {tableHeader}
          </TableHead>

          <Box component={TableBody} ref={ref}>
            {children}
          </Box>

        </Table>
      </div>
    </>
  )
}

export default TableContainer
