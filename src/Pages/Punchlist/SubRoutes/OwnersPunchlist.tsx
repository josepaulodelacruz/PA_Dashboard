import DropdownSearchMenu from "@/Components/DropdownMenu/DropdownSearchMenu"
import TableContainer from "@/Components/Table/TableContainer"
import { TableHeaderLabel } from "@/Components/Table/TableLabel"
import { 
  TableRow,
  TextField
} from '@mui/material'
import '@/index.css'
import LoadingHud from "@/Components/Modal/LoadingHud"
import { useState, useEffect } from 'react'
 
//api
import useFetchOwnersProject from "@/Hooks/OwnersPunchlist/useFetchProject"
import useGetPhaseMutation from "@/Hooks/OwnersPunchlist/useGetPhaseMutation"


const OwnersPunchlist = () => {
  const fetchProjects = useFetchOwnersProject()
  const { mutateAsync: getPhase } = useGetPhaseMutation()
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [project, setProject] = useState("")
  const [phase, setPhase] = useState("")
  const [phases, setPhases] = useState<Array<{ name: string }>>()

  useEffect(() => {
    setIsLoading(fetchProjects.isLoading)
  }, [fetchProjects.isLoading])

  const _handleGetPhase = async (p: string) => {
    try {
      const response = await getPhase({ project: p})
      setPhases(response.data);
    } catch (err) {
      console.error(err)
    }

  }

  return (
    <div className="flex flex-col">

      <div id="owners-search-selection">
        <DropdownSearchMenu label={'SELECT PROJECT: '}
          placeholder="PROJECT"
          items={fetchProjects.data?.data || []}
          isLoading={fetchProjects.isLoading} 
          selectedValue={project}
          onChange={(e) => {
            setProject(e.target?.value)
            setPhase("")
            _handleGetPhase(e.target?.value)

          }}
        />
        <DropdownSearchMenu 
          placeholder="PHASE"
          label={'SELECT PHASE: '} 
          items={phases || []}
          selectedValue={phase}
          onChange={(e) => {
            setPhase(e.target.value)
          }}
        />
      </div>

      <section className="pt-5">

        <TableContainer
          tableTitle="List for Repairs"
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

      <LoadingHud 
        isLoading={isLoading}
      />

    </div>
  )
}

export default OwnersPunchlist
