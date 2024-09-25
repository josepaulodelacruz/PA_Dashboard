import { MainSpan, SubSpan } from "@/Components/Labels/Spans"
import LineDivider from "@/Components/LineDivider"
import TableContainer from "@/Components/Table/TableContainer"
import { TableHeaderLabel } from "@/Components/Table/TableLabel"
import useFetchProjectSetup from "@/Hooks/UnitAcceptance/useFetchProjectSetup"
import { ButtonBase, CircularProgress, TableRow } from "@mui/material"
import { useEffect, useState } from 'react'
import Box from '@mui/material/Box'
import InputTextField from "@/Components/InputTextField"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button'
import SubTitleLabel from "@/Components/Labels/SubTitle"
import { useTheme } from "@mui/material/styles"
import linearGradient from "@/assets/theme/functions/linearGradient"
import useViewRelatedPersonelMutation from "@/Hooks/UnitAcceptance/useViewRelatedPersonelMutation"

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
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }
  const { data, isLoading, isSuccess } = useFetchProjectSetup()
  const { mutateAsync: viewRelated } = useViewRelatedPersonelMutation()
  const [projects, setProjects] = useState<Array<{ project_name: string }>>()
  const [relatedPersonels, setRelatedPersonels] = useState<Array<{ contact_person: string, job_role: string }>>()
  const [selectProject, setSelectProject] = useState('');
  const [selectedJobRole, setSelectedJobRole] = useState<string>('PROPERTY ADMINISTRATOR')
  const [userInput, setUserInput] = useState<{ project: string, contact_person: string, job_role: string }>({
    project: '',
    contact_person: '',
    job_role: '',
  })

  useEffect(() => {
    if (isSuccess) {
      setProjects(data.data);
    }
  }, [isSuccess])

  let backgroundValue = linearGradient(gradients.primary.state, gradients.primary.main);

  const _handleViewPersonel = async (title: string) => {
    setSelectProject(title)
    _handleUpdateInputs({key: 'project', value: title })
    await viewRelated({ title: title }, {
      onSuccess: (response) => {
        setRelatedPersonels(response.data)
      },
      onError: (response) => {
        console.error(response)
      }
    })
  }

  const _handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
  }

  const _handleSelectedJob = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedJobRole(e.target.value)
  }

  const _handleUpdateInputs = ({ key, value }: { key: keyof typeof userInput, value: string }) => {
    setUserInput(prevState => {
      const inputs = { ...prevState };
      inputs[key]= value;  // Update project field
      return inputs;
    })
  }

  return (
    <div className="grid grid-cols-12 gap-4">

      <div className="col-span-6 ">
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
                  <ProjectRowComponent onClick={(title: string) => _handleViewPersonel(title)} title={project.project_name} />
                </TableRow>
              )
          }
        </TableContainer>
      </div>

      <div className="col-span-6">
        <div className="flex flex-col bg-white shadow-md rounded-md p-5">
          <MainSpan>ADD PERSONEL</MainSpan>
          <SubSpan>Add new personel</SubSpan>
          <LineDivider />
          <Box component='form' onSubmit={_handleSubmit}>
            <InputTextField
              value={userInput.project}
              onChange={(e) => _handleUpdateInputs({ key: 'project', value: e.target.value })}
              required={true}
              name="project"
              type="text"
              placeholder="Project or Phase"
              label="Project"
            />
            <InputTextField
              required={true}
              value={userInput.contact_person}
              onChange={(e) => _handleUpdateInputs({ key: 'contact_person', value: e.target.value })}
              name="contact_person"
              type="text"
              placeholder="Enter full name"
              label="Complete Name"
            />
            <SubTitleLabel>Job Role</SubTitleLabel>
            <RadioGroup
              row
              aria-labelledby="demo-radio-buttons-group-label"
              value={selectedJobRole}
              name="radio-buttons-group"
              onChange={_handleSelectedJob}
            >
              <FormControlLabel value="PROPERTY ADMINISTRATOR" control={<Radio />} label="PMD" />
              <FormControlLabel value="ENGINEER" control={<Radio />} label="CMD" />
            </RadioGroup>

            <LineDivider />
            <div className="h-[10px]" />
            <Button
              type="submit"
              variant="contained"
              style={{ background: backgroundValue }}
              className="float-right">
              ADD NEW PERSONEL
            </Button>
          </Box>

        </div>

        <div className="flex flex-col mt-5 p-5 bg-white shadow-md rounded-md">
          <MainSpan>List of Personel</MainSpan>
          <SubSpan>{selectProject}</SubSpan>
          <LineDivider />

          {
            relatedPersonels?.map((personel, index) => {
              return <PersonelRowComponent 
                onClick={(contact_person: string) => {
                  _handleUpdateInputs({key: 'contact_person', value: contact_person})
                  setSelectedJobRole(personel.job_role)
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
