import TableContainer from '@/Components/Table/TableContainer'
import { MainSpan, SubSpan } from '@/Components/Labels/Spans'
import LineDivider from "@/Components/LineDivider";
import SubTitleLabel from '@/Components/Labels/SubTitle';
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import { Tabs, Tab, TableRow } from '@mui/material';
import { useState, useEffect } from 'react';
import { TableHeaderLabel } from '@/Components/Table/TableLabel';
import useViewProjectMutation from '@/Hooks/Projects/useViewProjectMutation';
import { useParams } from 'react-router-dom';
import { UnitModel } from '@/Types';
import ModelCheckListRowComponent from '../Components/ModelCheckListRowComponent';
import { ModelCheckList } from '@/Types/Project';
import ProjectViewEventButton from '../Components/ProjectViewEventButton';

const ViewProjectPage = () => {
  const [currentTab, setCurrentTab] = useState("Core")
  const { mutateAsync: viewProject } = useViewProjectMutation()
  const [models, setModels] = useState<UnitModel[]>([])
  const [modelChecklists, setModelChecklists] = useState<ModelCheckList[]>([])
  const [currentSelectedModel, setCurrentSelectedModel] = useState<number>(0)
  let { id } = useParams()

  useEffect(() => {
    const fetchProjectData = async () => {
      try {
        const projectResponse = await viewProject({ id: Number(id), action: 'view-models' });
        if (projectResponse.data.status) {
          let data = projectResponse.data.data as UnitModel[];
          data = data.map((d) => ({ ...d, check_lists: [] }));
          if (data.length > 0) {
            setModels(data);
            setCurrentSelectedModel(0);
          }
        }

        const checklistResponse = await viewProject({ id: Number(id), action: 'view-checklist' });
        if (checklistResponse.data.status) {
          const data = checklistResponse.data.data as ModelCheckList[];
          if (data.length > 0) {
            setModelChecklists(data);
          }
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProjectData();
  }, [id, viewProject]);

  const _handleProjectViewEvent = (event: string) => {
    switch (event) {
      case 'add-checklist':
        _handleAddChecklist()
        break;
      default:
        break;
    }

  }


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
                <TableHeaderLabel width="10%" align="center" title="ID" />
                <TableHeaderLabel width="15%" align="left" title="Class" />
                <TableHeaderLabel width="66%" align="center" title="Item" />
                <TableHeaderLabel width="5%" align="left" title="Applicable" />
              </TableRow>
            }
          >
            {
              models[currentSelectedModel]?.check_lists !== undefined &&
              models[currentSelectedModel]?.check_lists.map((item, index) => (
                <ModelCheckListRowComponent key={index}
                  checklist={item}
                  onClick={(isApplicable) => {
                    setModels(prevState => {
                      // Create a copy of the models array
                      const newModels = [...prevState];

                      // Copy the current model
                      const updatedModel = { ...newModels[currentSelectedModel] };

                      // Copy the check_lists array of the current model
                      updatedModel.check_lists = [...updatedModel.check_lists];

                      // Update the specific checklist item immutably
                      updatedModel.check_lists[index] = {
                        ...updatedModel.check_lists[index],
                        is_applicable: !isApplicable
                      };

                      // Update the model in the newModels array
                      newModels[currentSelectedModel] = updatedModel;

                      return newModels;
                    });
                  }}
                  style={{
                    backgroundColor: index % 2 === 0 ? '#f8f9fa' : 'transparent',
                    cursor: 'pointer',
                  }} />
              ))
            }

          </TableContainer>
        </div>

        <div className='flex-col flex-[0.5]'>

          <div style={{ overflowY: 'auto' }} className='bg-white shadow-sm rounded-md flex-1 mx-0'>
            <div className='p-4'>
              <ProjectViewEventButton
                status={(models[currentSelectedModel]?.check_lists === undefined || models[currentSelectedModel]?.check_lists.length > 0) ? 'save' : 'add'}

                onClick={_handleProjectViewEvent} />
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
