import SubTitleLabel from "@/Components/Labels/SubTitle";
import TitleLabel from "@/Components/Labels/TitleLabel";
import LineDivider from "@/Components/LineDivider";
import TableContainer from "@/Components/Table/TableContainer";
import { TableHeaderLabel } from "@/Components/Table/TableLabel";
import { TableRow } from "@mui/material";
import Grid from '@mui/material/Grid'
import '@/index.css'
import { useSnackbar } from 'notistack';
import ProjectRowComponent from "../Components/ProjectRowComponent";
import React, { useEffect, useState } from "react";
import { Project } from "@/Types";
import LoadingHud from "@/Components/Modal/LoadingHud";
import useIncludeProjectMutation from "@/Hooks/Projects/useIncludeProjectMutation";
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import PrimaryButton from "@/Components/Button/PrimaryButton";
import useRemoveProjectMutation from "@/Hooks/Projects/useRemoveProjectMutation";
import { isAxiosError } from "axios";
import useFetchProjects from "@/Hooks/Projects/useFetchProjects";

const ToggleProjectPage = () => {
  const { enqueueSnackbar } = useSnackbar()
  const { data, isLoading, isError, isSuccess, error } = useFetchProjects()
  const { mutate: includeProject } = useIncludeProjectMutation()
  const { mutate: deleteProject } = useRemoveProjectMutation()
  const [projects, setProjects] = useState<Project[]>([])
  const [value, setValue] = React.useState(1);
  const [isRemove, setIsRemove] = React.useState(false)

  const handleChange = (newValue: number) => {
    setValue(newValue);
  };

  if (isError) {
    if (isAxiosError<{ message: string }>(error)) {
      enqueueSnackbar(error.message, {
        variant: 'error',
        anchorOrigin: {
          horizontal: 'right',
          vertical: 'bottom',
        },
      })
    }
  }

  useEffect(() => {
    if (isSuccess) {
      setProjects(data?.data)
    }
  }, [isSuccess])

  const _handleUpdate = (project: Project, isChecked: boolean) => {

    setProjects(prevProjects => {
      let index = prevProjects.findIndex(el => el.id === project.id)
      prevProjects[index].is_included = isChecked;
      return prevProjects;
    })

    includeProject({ is_included: isChecked.toString(), id: project.id.toString() }, {
      onSuccess: () => {
        enqueueSnackbar(isChecked ? `${project.description} added` : `${project.description} remove`, {
          variant: isChecked ? 'success' : 'warning',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom',
          },
        });
      },
      onError: () => {
        enqueueSnackbar('Failed to include.', {
          variant: 'error',
          anchorOrigin: {
            horizontal: 'right',
            vertical: 'bottom',
          },
        });
      },
    });
  }

  const _handleDeleteProject = (project: Project, canBeDeleted: boolean, index: number) => {
    if (canBeDeleted) {
      project = {
        ...project,
        is_remove_from_list: !project.is_remove_from_list,
      }


      deleteProject({ is_remove_from_list: project.is_remove_from_list.toString(), id: project.id }, {
        onSuccess: () => {
          let displayText = project.is_remove_from_list ? "DELETED" : "RETRIEVE"
          enqueueSnackbar(`${displayText} ${project.description}`, {
            variant: project.is_remove_from_list ? 'error' : 'success',
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'bottom',
            }
          })


          setProjects(prevState => {
            const newProjects = [...prevState]
            newProjects[index] = project;
            return newProjects
          })
        },
        onError: () => {
          enqueueSnackbar('Something went wrong.', {
            variant: 'error',
            anchorOrigin: {
              horizontal: 'right',
              vertical: 'bottom',
            },
          });
        }
      })
    }

  }

  const ActiveTab = () => {
    if (value === 1) {
      return isSuccess && projects.map((item, index) => {
        if (!item.is_removed_from_list) {
          return <ProjectRowComponent
            isProjectDeleted={item.is_remove_from_list}
            onModeDelete={isRemove}
            onDelete={(project, canBeDeleted) => _handleDeleteProject(project, canBeDeleted, index)}
            key={item.id} project={item}
            onToggle={(project, isChecked) => _handleUpdate(project, isChecked)}
          />
        }
      })
    } else {
      return isSuccess && projects.map((item, index) => {
        if (item.is_removed_from_list) {
          return <ProjectRowComponent
            isProjectDeleted={item.is_remove_from_list}
            onModeDelete={true}
            onDelete={(project, canBeDeleted) => _handleDeleteProject(project, canBeDeleted, index)}
            key={item.id} project={item}
            onToggle={(_, __) => null}
          />
        }
      })
    }

  }


  return (
    <>
      <Grid container item md={12} xs={12}>
        <TableContainer
          tableTitle="List of Projects"
          note={
            <div className="px-4 py-2">
              <PrimaryButton
                onClick={() => setIsRemove(prevState => !prevState)}
                style={{ float: 'right', padding: '0.4rem' }}>
                {!isRemove ? 'Enable ' : 'Disabled '}
                REMOVE ITEMS</PrimaryButton>
              <TitleLabel>Projects</TitleLabel>
              <SubTitleLabel>Toggle a project to include it to PMDMTS checklist if applicable.</SubTitleLabel>
              <LineDivider />

              <Tabs
                value={value}
                onChange={(_, value) => handleChange(value)}
                textColor="primary"
                indicatorColor="primary"
              >
                <Tab value={1} className="text-md font-bold" label="Add Projects" />
                <Tab value={2} label="Removed from the list" />
              </Tabs>
            </div>
          }
          tableHeader={
            <TableRow className='w-full border-b'>
              <TableHeaderLabel title="Project" />
              <TableHeaderLabel align='center' title="Action" />
            </TableRow>
          }
        >
          <ActiveTab />
        </TableContainer>
      </Grid>

      <LoadingHud isLoading={isLoading} />

    </>
  )
}

export default ToggleProjectPage;
