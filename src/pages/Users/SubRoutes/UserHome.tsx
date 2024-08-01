
import Grid from '@mui/material/Grid'
import TableContainer from '@/Components/Table/TableContainer'
import TableRows from '@mui/material/TableRow'
import BorderedButton from '@/Components/Button/BorderedButton'
import '@/index.css'
import { MainSpan, SubSpan } from '@/Components/Labels/Spans'
import { TableBodyLabel, TableHeaderLabel } from '@/Components/Table/TableLabel'
import { useNavigate } from 'react-router-dom'
import StringRoutes from '@/Constants/stringRoutes'

const UserHome = () => {
  const navigate = useNavigate()

  const RowComponent = () =>
    <TableRows className='w-full border-b' >
      <TableBodyLabel>
        <MainSpan className='text-sm'>Admin@email.com</MainSpan>
      </TableBodyLabel>
      <TableBodyLabel>
        <MainSpan className='text-sm whitespace-nowrap'>Jose Paulo</MainSpan>
      </TableBodyLabel>
      <TableBodyLabel>
        <SubSpan className='whitespace-nowrap text-sm'>July 28th, 2024 10:00am</SubSpan>
      </TableBodyLabel>
    </TableRows>

  return (
    <Grid container direction='column' item md={12} xs={12} sx={{ px: 0.5 }}>
      <TableContainer
        tableTitle='Users'
        tableHeader={
          <TableRows className='w-full border-b' >
            <TableHeaderLabel title="EMAIL" />
            <TableHeaderLabel title="NAME" />
            <TableHeaderLabel title="DATE CREATED" />
            <TableHeaderLabel title="ACTION" />
          </TableRows>
        }
        tableHeaderAction={
          <BorderedButton onClick={() => navigate(StringRoutes.user_home_add)} style={{ height: '30px', borderColor: 'white' }}>
            <SubSpan className='text-sm text-white' style={{ color: 'white' }}>Add User</SubSpan>
          </BorderedButton>
        }
      >
        <RowComponent />
        <RowComponent />

      </TableContainer>

    </Grid>
  )
}

export default UserHome
