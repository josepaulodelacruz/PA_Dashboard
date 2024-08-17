import TableContainer from '@/Components/Table/TableContainer'
import { MainSpan, SubSpan } from '@/Components/Labels/Spans'
import LineDivider from "@/Components/LineDivider";
import SubTitleLabel from '@/Components/Labels/SubTitle';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { Tabs, Tab, TableRow } from '@mui/material';
import { useState, useEffect, useLayoutEffect } from 'react';
import { TableHeaderLabel } from '@/Components/Table/TableLabel';
import useViewProjectMutation from '@/Hooks/Projects/useViewProjectMutation';
import { useParams, useNavigate } from 'react-router-dom';
import { UnitModel } from '@/Types';
import PrimaryButton from '@/Components/Button/PrimaryButton';
import ModelCheckListRowComponent from '../Components/ModelCheckListRowComponent';
import { ModelCheckList } from '@/Types/Project';

const ViewProjectPage = () => {
  const [currentTab, setCurrentTab] = useState("Core")
  const { mutate: viewProject } = useViewProjectMutation()
  const { mutate: viewChecklist } = useViewProjectMutation()
  const [models, setModels] = useState<UnitModel[]>([])
  const [modelChecklists, setModelChecklists] = useState<ModelCheckList[]>([])
  const [currentSelectedModel, setCurrentSelectedModel] = useState<number>(0)
  const navigate = useNavigate()
  let { id } = useParams()


  useEffect(() => {
    viewProject({ id: Number(id), action: 'view-models' }, {
      onSuccess: (response) => {
        if (response.data.status) {
          let data = response.data.data as UnitModel[]

          data = data.map((d) => ({ ...d, check_lists: [] }))

          if (data.length > 0) {
            setModels(data)
            setCurrentSelectedModel(0)
            return
          }
        }
      },
      onError: (error) => {
        console.error(error)

      }
    })

    viewChecklist({ id: Number(id), action: 'view-checklist' }, {
      onSuccess: (response) => {
        if (response.data.status) {
          const data = response.data.data as ModelCheckList[]
          if (data.length > 0) {
            setModelChecklists(data)
            return
          }
        }
      },
      onError: (error) => {
        console.error(error)
      }
    })



  }, [id, viewProject, viewChecklist])


  const _handleAddChecklist = async () => {
    let index: number = currentSelectedModel
    if (models[index].check_lists?.length === 0 || !models[index].check_lists) {
      setModels(prevState => {
        const updatedModels = [...prevState]
        updatedModels[index] = {
          ...updatedModels[index],
          check_lists: modelChecklists
        }

        return updatedModels
      })
    }
  }

  const ListModelItem = (props: { unit: UnitModel, index: number }) => {
    const { unit, index } = props
    return (
      <>
        <ListItemButton
          onClick={() => setCurrentSelectedModel(index)}
          selected={currentSelectedModel === index}>
          <SubSpan className='text-sm font-light' style={{ color: 'black' }}>{unit.model_name}</SubSpan>
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
            {
            }



          </TableContainer>
        </div>

        <div className='flex-col flex-[0.5]'>

          <div style={{ overflowY: 'auto' }} className='bg-white shadow-sm rounded-md flex-1 mx-0'>
            <div className='p-4'>
              <PrimaryButton
                onClick={_handleAddChecklist}

                style={{ float: 'right' }}>Add Checklist</PrimaryButton>
              <MainSpan>St. Joseph Village 6 Models</MainSpan>
              <SubTitleLabel>List of models under St. Joseph Village 6</SubTitleLabel>
            </div>
            <LineDivider />

            <div id='list-models' className='px-4 py-2' style={{ overflowY: 'auto' }}>
              <List>
                {
                  models.map((model, index) => (
                    <div key={index}>
                      <ListModelItem unit={model} index={index} />
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
