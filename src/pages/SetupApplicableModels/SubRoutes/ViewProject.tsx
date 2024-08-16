import TableContainer from '@/Components/Table/TableContainer'
import { MainSpan, SubSpan } from '@/Components/Labels/Spans'
import LineDivider from "@/Components/LineDivider";
import SubTitleLabel from '@/Components/Labels/SubTitle';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { Tabs, Tab, TableRow } from '@mui/material';
import { useState, useEffect } from 'react';
import { TableHeaderLabel } from '@/Components/Table/TableLabel';
import CheckBox from '@mui/material/Checkbox'
import useViewProjectMutation from '@/Hooks/Projects/useViewProjectMutation';
import { useParams, useNavigate } from 'react-router-dom';
import { UnitModel } from '@/Types';

const ViewProjectPage = () => {
  const [currentTab, setCurrentTab] = useState("Core")
  const { mutateAsync: viewProject } = useViewProjectMutation()
  const [models, setModels] = useState<UnitModel[]>([])
  const [currentSelectedModel, setCurrentSelectedModel] = useState("")
  const navigate = useNavigate()
  let { id } = useParams()


  useEffect(() => {
    async function viewModels() {
      //view-checklist
      var response = await viewProject({ id: Number(id), action: 'view-models' })

      if (response.data.status) {
        const data = response.data.data as UnitModel[]
        if (data.length > 0) {
          setModels(data)
          setCurrentSelectedModel(data[0].model_name)
          return
        }
      }
    }

    viewModels()

  }, [])

  const ListModelItem = (props: { unit: UnitModel }) => {
    const { unit } = props
    return (
      <>
        <ListItemButton
          onClick={() => setCurrentSelectedModel(unit.model_name)}
          selected={currentSelectedModel === unit.model_name}>
          <SubSpan>{unit.model_name}</SubSpan>
        </ListItemButton>
        <LineDivider />
      </>
    )

  }

  const _handleChange = (value: string) => {
    setCurrentTab(value)
  }


  return (
    <div className='flex flex-col'>
      <div className='flex flex-col md:flex-row w-full'>

        <div className='flex flex-col flex-1 md:mr-5'>
          <TableContainer
            tableTitle='Check List Setup'
            note={
              <Tabs
                value={currentTab}
                onChange={(_, value) => _handleChange(value)}
                textColor="primary"
                indicatorColor="primary"
                variant="fullWidth"
              >
                <Tab value={'Core'} label='Core' />
                <Tab value={'Complete'} label='Complete' disabled style={{ cursor: 'warning' }} />
              </Tabs>
            }
            tableHeader={
              <TableRow className='border-b' >
                <TableHeaderLabel width="5%" align="left" title="Applicable" />
                <TableHeaderLabel width="10%" align="center" title="ID" />
                <TableHeaderLabel width="15%" align="center" title="Group" />
                <TableHeaderLabel width="66%" align="center" title="Item" />
              </TableRow>
            }
          >
            <TableRow className='border-b'>
              <td align='center' className='column-header'>
                <CheckBox />
              </td>
              <td align="center" className='text-[0.60rem] text-black'>1</td>
              <td align="center" className='text-[0.70rem] text-black'>Layout</td>
              <td align="center" className='text-[0.70rem] text-black'>Setback according to plan</td>
            </TableRow>


          </TableContainer>
        </div>

        <div className='flex flex-col flex-[0.5]'>

          <div style={{ backgroundColor: 'white' }} className='shadow-md rounded-md flex-1 mx-0'>
            <div className='p-4'>
              <MainSpan>St. Joseph Village 6 Models</MainSpan>
              <SubTitleLabel>List of models under St. Joseph Village 6</SubTitleLabel>
            </div>
            <LineDivider />

            <div className='px-4 py-2'>
              <List>
                {
                  models.map((model, index) => (
                    <div key={index}>
                      <ListModelItem unit={model} />
                    </div>
                  ))
                }
              </List>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default ViewProjectPage
