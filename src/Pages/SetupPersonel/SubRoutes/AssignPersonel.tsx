import { MainSpan, SubSpan } from "@/Components/Labels/Spans"
import LineDivider from "@/Components/LineDivider"
import TableContainer from "@/Components/Table/TableContainer"
import { TableHeaderLabel } from "@/Components/Table/TableLabel"
import useFetchProjectSetup from "@/Hooks/UnitAcceptance/useFetchProjectSetup"
import { ButtonBase, CircularProgress, TableRow } from "@mui/material"
import { useEffect, useState } from 'react'
import useViewRelatedPersonelMutation from "@/Hooks/UnitAcceptance/useViewRelatedPersonelMutation"
import PersonelForm from "../Components/PersonelForm"
import useScroll from "@/Hooks/useScroll"

const ProjectRowComponent = (props: any) => {
  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props?.title);
    }
  }
  return (
    <td onClick={handleClick} className="column-header border-b cursor-pointer">
      {props?.title}
    </td>

  )
}

const PersonelRowComponent = (props: any) => {

  const handleClick = () => {
    if (props.onClick) {
      props.onClick(props?.contact_person)
    }
  }

  return (
    <ButtonBase onClick={handleClick} >
      <div className="flex flex-row w-full border-b py-1 justify-between">
        <span className="text-[0.90rem] font-light">{props?.contact_person}</span>
        <div className="flex flex-row items-center justify-center">
          <div className="pr-5">
            <MainSpan>{props?.job_role === 'ENGINEER' ? "CMD" : "PMD"}</MainSpan>
          </div>
        </div>
      </div>
    </ButtonBase>
  )

}

const AssignPersonel = () => {
  const { data, isLoading, isSuccess, refetch } = useFetchProjectSetup()
  const { mutateAsync: viewRelated } = useViewRelatedPersonelMutation()
  const [projects, setProjects] = useState<Array<{ project_name: string }>>()
  const [relatedPersonels, setRelatedPersonels] = useState<Array<{ id: string, contact_person: string, job_role: string, is_active: boolean }>>()
  const [selectProject, setSelectProject] = useState('');
  const [selectedJobRole, setSelectedJobRole] = useState<'PROPERTY ADMINISTRATOR' | "ENGINEER">('PROPERTY ADMINISTRATOR')
  const [userInput, setUserInput] = useState<{ id: string, project: string, contact_person: string, job_role: string, is_active: string }>({
    id: '',
    project: '',
    contact_person: '',
    job_role: '',
    is_active: '0'
  })
  const [userAttemptingToUpdate, setUserAttemptingToUpdate] = useState(false)
  const { onTriggeredScrolling } = useScroll()

  useEffect(() => {
    if (isSuccess) {
      setProjects(data.data);
    }
  }, [isSuccess])

  const _handleRefresh = async () => {
    refetch();
    await viewRelated({ title: selectProject}, {
      onSuccess: (response) => {
        setRelatedPersonels(response.data)
      }, 
      onError: (error) => {
        console.error(error.message)
      }
    })


  }

  const _handleViewPersonel = async (title: string) => {
    setSelectProject(title)
    onTriggeredScrolling()
    _handleUpdateInputs({ key: 'project', value: title })
    await viewRelated({ title: title }, {
      onSuccess: (response) => {
        setRelatedPersonels(response.data)
      },
      onError: (response) => {
        console.error(response)
      }
    })
  }

  const _handleUpdateInputs = ({ key, value }: { key: keyof typeof userInput, value: string }) => {
    setUserInput(prevState => {
      const inputs = { ...prevState };
      inputs[key] = value;  // Update project field
      return inputs;
    })
  }

  const _handleResetForm = () => {
    setUserInput({
      id: '',
      project: '',
      contact_person: '',
      job_role: '',
      is_active: '0',
    })
    setSelectedJobRole("PROPERTY ADMINISTRATOR");
  }

  return (
    <div className="grid grid-cols-12 gap-4">

      <div className="order-2 md:order-1 col-span-12 md:col-span-6 ">
        <TableContainer
          tableTitle="Projects"
          tableHeader={
            <TableRow className='border-b'>
              <TableHeaderLabel title="PROJECT" />
            </TableRow>
          }
        >
          {
            isLoading ?
              <TableRow>
                <td className="text-sm font-light p-2" align="center">
                  <CircularProgress />
                </td>
              </TableRow> :
              projects?.map((project, index) =>
                <TableRow key={index}>
                  <ProjectRowComponent onClick={(title: string) => {
                    _handleViewPersonel(title)
                    setUserInput({
                      id: '',
                      project: project.project_name,
                      contact_person: '',
                      job_role: '',
                      is_active: '0', 
                    })
                    setUserAttemptingToUpdate(false)
                  }} title={project.project_name} />
                </TableRow>
              )
          }
        </TableContainer>
      </div>

      <div className="order-1 md:order-2 col-span-12 md:col-span-6">

        <PersonelForm
          projects={projects}
          id={userInput.id}
          project={userInput.project}
          contact_person={userInput.contact_person}
          job_role={userInput.job_role}
          is_active={userInput.is_active}
          userJobRole={selectedJobRole}
          userAttemptingToUpdate={userAttemptingToUpdate}
          onCancelUpdate={() => {
            setUserAttemptingToUpdate(false)
            _handleResetForm()
          }}
          onRefresh={_handleRefresh}
        />

        <div className="flex flex-col mt-5 p-5 bg-white shadow-md rounded-md">
          <MainSpan>List of Personel</MainSpan>
          <SubSpan>{selectProject}</SubSpan>
          <LineDivider />

          {
            relatedPersonels?.map((personel, index) => {
              return <PersonelRowComponent
                onClick={(contact_person: string) => {
                  setUserInput({
                    is_active: '0',
                    project: selectProject,
                    contact_person: contact_person,
                    id: personel.id.toString(),
                    job_role: '',
                  })
                  setSelectedJobRole(personel.job_role === "ENGINEER" ? "ENGINEER" : 'PROPERTY ADMINISTRATOR')
                  setUserAttemptingToUpdate(true)
                }}
                key={index}
                contact_person={personel.contact_person}
                job_role={personel.job_role} />
            })

          }
        </div>

      </div>


    </div>

  )
}

export default AssignPersonel
