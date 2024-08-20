import Table from '@mui/material/Table'
import TableContainer from "@mui/material/TableContainer"
import TableRow from "@mui/material/TableRow";
import Box from '@mui/material/Box'
import { TableBodyLabel, TableHeaderLabel } from '@/Components/Table/TableLabel'

const DataTable = () => {
  return (
    <TableContainer>
      <Table>
        <Box component="thead"  >
          <TableRow>
            <TableHeaderLabel title='HOUSEHOLD' />
            <TableHeaderLabel align='left' title='MEMBERS' />
            <TableHeaderLabel align='left' title="PAID" />
            <TableHeaderLabel align='center' title="AMOUNT" />
          </TableRow>
        </Box>

        <Box component="tbody">
          {
            Array.from({ length: 5 }).map((_, index) => {
              return (
                <TableRow key={index} style={{padding: '200px'}}>
                  <TableBodyLabel>
                    <span className='font-semibold text-sm text-[#7b809a]'>Dela Cruz Residence.</span>
                  </TableBodyLabel>

                  <TableBodyLabel>
                    <span className='font-semibold text-sm text-[#7b809a]'>Dela Cruz Residence</span>
                  </TableBodyLabel>

                  <TableBodyLabel>
                    <span className='font-semibold text-sm text-[#7b809a]'>PAID</span>
                  </TableBodyLabel>

                  <TableBodyLabel align='center'>
                    <span className='font-semibold text-sm text-[#7b809a]'>150.00</span>
                  </TableBodyLabel>
                </TableRow>
              );
            })
          }
        </Box>

      </Table>

    </TableContainer>
  )
}

export default DataTable
