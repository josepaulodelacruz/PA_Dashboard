
import DropdownSearchMenu from "@/Components/DropdownMenu/DropdownSearchMenu"
import TableContainer from "@/Components/Table/TableContainer"
import { TableHeaderLabel } from "@/Components/Table/TableLabel"
import { TableRow } from "@mui/material"
import TextField from "@mui/material/TextField"
import '@/index.css'

interface ListOfUnitsProps {
  type: 'WITHIN_WARRANTY' | 'BEYOND_WARRANTY'
}

const ListOfUnits: React.FC<ListOfUnitsProps> = ({ type }) => {

  const pageLabel = type === 'WITHIN_WARRANTY' ? 'Within Warranty' : 'Beyond Warranty'

  return (
    <div className="flex flex-col">

      <div id="search-selection">
        <DropdownSearchMenu label={"SELECT PROJECT: "} />
        <DropdownSearchMenu label={"SELECT PHASE: "} />
      </div>


      <section className="pt-5">

        <TableContainer
          tableTitle={pageLabel + " Units"}
          tableHeader={
            <TableRow className="border-b">
              <TableHeaderLabel title="BLOCK" />
              <TableHeaderLabel title="LOT" />
              <TableHeaderLabel title="MODEL" />
              <TableHeaderLabel title="UNIT STATUS" />
              <TableHeaderLabel title="BUYERS NAME" />
            </TableRow>
          }
        >
          <TableRow className='overflow-auto md:overflow-visible max-w-full' >
            <td className="column-header"> <TextField className="w-full" variant="outlined" size="small" /> </td>
            <td className="column-header"> <TextField className="w-full" variant="outlined" size="small" /> </td>
            <td className="column-header"> <TextField className="w-[250px]" variant="outlined" size="small" /> </td>
            <td className="column-header"> <TextField className="w-[300px]" variant="outlined" size="small" /> </td>
            <td className="column-header"> <TextField className="w-[300px]" variant="outlined" size="small" /> </td>
          </TableRow>


        </TableContainer>
      </section>

    </div>
  )
}

export default ListOfUnits
