
import Grid from '@mui/material/Grid'
import DashboardLayout from "@/Layouts/DashboardLayout"
import TableContainer from '@/Components/Table/TableContainer'
import TableRow from '@mui/material/TableRow'
import TableCellWithAvatar from '@/Components/Table/TableCellWithAvatar'
import TableCellProfileImg from '@/Components/Table/TableCellProfileImg'
import { TableMainSub } from '@/Components/Table/TableLabel'
import { SubSpan } from '@/Components/Labels/Spans'
import IconButton from '@/Components/Button/IconButton'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import useGenericModal from '@/Hooks/GenericModal'
import '@/index.css'
import GenericModal from '@/Components/Modal/GenericModal'

const TablesPage = () => {

  const { isOpen, onClose, onOpen } = useGenericModal()

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

          <IconButton color='info'>
            <EditIcon />
          </IconButton>
          <IconButton color='error' onClick={onOpen} >
            <DeleteIcon />
          </IconButton>
        </td>
      </TableRow>
    )

  }

  return (
    <DashboardLayout>
      <Grid container direction='column' item md={12} xs={12} sx={{ px: 0.5 }}>
        <TableContainer
          tableTitle='Residents Table'
          tableHeader={
            <TableRow>
              <th align='left' className='column-header'>FAMILY NAMES</th>
              <th align='left' className='column-header'>MEMBERS</th>
              <th align='left' className='column-header'>LATEST PAYMENT</th>
              <th align='left' className='column-header'>TYPE</th>
              <th align='left' className='column-header'>ACTION</th>
            </TableRow>
          }
          
        >
          <RowComponent />
          <RowComponent />
          <RowComponent />
          <RowComponent />
          <RowComponent />
        </TableContainer>

        <TableContainer
          tableTitle='Residents Table'
          tableHeader={
            <TableRow>
              <th align='left' className='column-header'>FAMILY NAMES</th>
              <th align='left' className='column-header'>MEMBERS</th>
              <th align='left' className='column-header'>LATEST PAYMENT</th>
              <th align='left' className='column-header'>TYPE</th>
              <th align='left' className='column-header'>ACTION</th>
            </TableRow>
          }
        >
          <RowComponent />
          <RowComponent />
          <RowComponent />
          <RowComponent />
          <RowComponent />
        </TableContainer>

      </Grid>

      <GenericModal
        title="Delete an item."
        label="Are you sure you want to delete this item?"
        isOpen={isOpen}
        onClose={onClose}
      />

    </DashboardLayout>
  )
}

export default TablesPage
