
import Grid from '@mui/material/Grid'
import TestModal from '@/Components/Modal/TestModal'
import DashboardLayout from "@/Layouts/DashboardLayout"
import Table from '@mui/material/Table'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableRow from '@mui/material/TableRow'
import TableCellWithAvatar from '@/Components/Table/TableCellWithAvatar'
import TableCellProfileImg from '@/Components/Table/TableCellProfileImg'
import { TableMainSub } from '@/Components/Table/TableLabel'
import { SubSpan } from '@/Components/Labels/Spans'
import IconButton from '@/Components/Button/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import useTestModal from '@/Hooks/Test'
import '@/index.css'

const TablesPage = () => {

  const { isOpen, onClose, onOpen } = useTestModal()

  const RowComponent = () => {
    return (
      <TableRow className='w-full border-b'>
        <td className='column-header whitespace-nowrap'>
          <TableCellWithAvatar avatar='' name='Dela Cruz' subName='BLK 24 LOT 18 PHASE 2' />
        </td>
        <td align='left' className='column-header whitespace-nowrap'>
          <TableCellProfileImg length={4} />
        </td>
        <td align='left' className='whitespace-nowrap'>
          <TableMainSub label="P 120.00" subLabel='VIA GCASH' />
        </td>
        <td align='left'>
          <SubSpan >RENT</SubSpan>
        </td>
        <td className='whitespace-nowrap'>
          <IconButton onClick={onOpen} >
            <DeleteIcon />
          </IconButton>
          <IconButton>
            <EditIcon />
          </IconButton>
        </td>
      </TableRow>
    )

  }

  return (
    <DashboardLayout>

      <Grid container item md={12} xs={12} sx={{ px: 0.5 }}>
        <div className='relative top-0 flex-1'>
          <div className='bg-blue-500 pl-4 flex h-[60px] w-[98%] mx-auto relative top-3 z-10 rounded-lg shadow-lg'>
            <h6 className='table-header-text'>Residents Table</h6>
          </div>

          <div className='top-7 bg-white min-h-[100px] w-full absolute pt-16 overflow-y-auto shadow-md rounded-xl'  >
            <Table >
              <TableHead>
                <TableRow className='w-full border-b border-gray-300 '>
                  <th align='left' className='column-header'>FAMILY NAMES</th>
                  <th align='left' className='column-header'>MEMBERS</th>
                  <th align='left' className='column-header'>LATEST PAYMENT</th>
                  <th align='left' className='column-header'>TYPE</th>
                  <th align='left' className='column-header'>ACTION</th>
                </TableRow>
              </TableHead>

              <TableBody>
                <RowComponent />

              </TableBody>

            </Table>
          </div>

        </div>

      </Grid>

      <TestModal
        isOpen={isOpen}
        onClose={onClose}
      />

    </DashboardLayout>
  )
}

export default TablesPage
