import { MainSpan, SubSpan } from "@/Components/Labels/Spans"
import LineDivider from "@/Components/LineDivider"
import { Box } from "@mui/material"
import InputTextField from "@/Components/InputTextField"
import SubTitleLabel from "@/Components/Labels/SubTitle"
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button'
import { useEffect, useState } from "react"
import BorderedButton from "@/Components/Button/BorderedButton"
import useAssignPersonelMutation from "@/Hooks/UnitAcceptance/useAssignPersonelMutation"
import useDeactivatePersonelMutation from "@/Hooks/UnitAcceptance/useDeactivatePersonelMutation"
import { useSnackbar } from 'notistack';
import Autocomplete from "@mui/material/Autocomplete"
import TextField from "@mui/material/TextField"

interface PersonelFormProps {
  projects?: Array<{ project_name: string }>
  id?: string,
  project?: string,
  contact_person?: string,
  job_role?: string,
  is_active: string
  userJobRole?: 'PROPERTY ADMINISTRATOR' | 'ENGINEER',
  userAttemptingToUpdate: boolean,
  onCancelUpdate: () => void,
  onRefresh?: () => void,
}

const PersonelForm = ({
  projects = [],
  id,
  project,
  contact_person,
  job_role,
  is_active,
  userJobRole,
  userAttemptingToUpdate = false,
  onCancelUpdate,
  onRefresh
}: PersonelFormProps) => {
  const { enqueueSnackbar } = useSnackbar()
  const { mutateAsync: assignPersonel } = useAssignPersonelMutation()
  const { mutateAsync: deactivatePersonel } = useDeactivatePersonelMutation()
  const [selectedJobRole, setSelectedJobRole] = useState<'PROPERTY ADMINISTRATOR' | "ENGINEER">('PROPERTY ADMINISTRATOR')
  const [userInput, setUserInput] = useState<{ id: string, project: string, contact_person: string, job_role: string, is_active: string }>({
    id: '',
    project: '',
    contact_person: '',
    job_role: '',
    is_active: '0',
  })

  useEffect(() => {
    setUserInput({
      id: id!,
      project: project!,
      contact_person: contact_person!,
      job_role: userJobRole!,
      is_active: is_active
    })
    setSelectedJobRole(userJobRole!)

  }, [project!, contact_person!, job_role, userJobRole])

  const showSnackbar = ({ message, variant }: { message: string, variant: 'error' | 'default' | 'success' | 'warning' }) => {
    enqueueSnackbar(message, {
      variant: variant,
      anchorOrigin: {
        horizontal: 'right',
        vertical: 'bottom',
      },
    })
  }

  const _handleUpdateInputs = ({ key, value }: { key: keyof typeof userInput, value: string }) => {
    setUserInput(prevState => {
      const inputs = { ...prevState };
      inputs[key] = value;  // Update project field
      return inputs;
    })
  }

  const _handleSelectedJob = (e: React.ChangeEvent<HTMLInputElement>) => {
    let jobRole = e.target.value === 'ENGINEER' ? 'ENGINEER' : 'PROPERTY ADMINISTRATOR'
    setSelectedJobRole(e.target.value === "ENGINEER" ? 'ENGINEER' : 'PROPERTY ADMINISTRATOR')
    _handleUpdateInputs({ key: 'job_role', value: jobRole })
  }

  const _handleSubmit = async (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    if (!userAttemptingToUpdate) {
      await _handleApiCall(userAttemptingToUpdate)
      return
    }

    await _handleApiCall(userAttemptingToUpdate)
  }

  const _handleApiCall = async (isUpdate: boolean) => {
    if (!isUpdate) {
      return await assignPersonel({ ...userInput }, {
        onSuccess: () => {
          onRefresh!()
          showSnackbar({ message: 'Successfully add new personel', variant: 'success' })
        },
        onError: (error) => {
          console.log(error.message)
          showSnackbar({ message: error.message, variant: 'error' })
        }
      })
    } else {
      return await deactivatePersonel({ id: userInput.id }, {
        onSuccess: () => {
          onRefresh!();
          showSnackbar({ message: 'Successfully remove personel', variant: 'warning' })
        },
        onError: (error) => {
          console.error(error.message)
          showSnackbar({ message: error.message, variant: 'error' })
        }
      })
    }
  }

  const PersonelFormHeader = () => {
    if (userAttemptingToUpdate) {
      return (
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <MainSpan>REMOVE PERSONEL</MainSpan>
            <SubSpan>Remove Personel who is not active or resign</SubSpan>
          </div>
          <BorderedButton onClick={onCancelUpdate}>CANCEL</BorderedButton>
        </div>
      )

    }

    return (
      <div className="flex flex-row justify-between">
        <div className="flex flex-col">
          <MainSpan>ADD PERSONEL</MainSpan>
          <SubSpan>Add new personel</SubSpan>
        </div>
      </div>
    )
  }

  return (
    <div className="flex flex-col bg-white shadow-md rounded-md p-5">
      <PersonelFormHeader />
      <LineDivider />
      <Box component='form' onSubmit={_handleSubmit}>
        <div className="flex flex-col">
          <Autocomplete
            freeSolo
            disablePortal
            disabled={userAttemptingToUpdate}
            value={userInput.project}
            options={projects?.map((project) => project.project_name)}
            sx={{ width: '100%' }}
            onChange={(_, value) => _handleUpdateInputs({ key: 'project', value: value!})}
            renderInput={(params) => {
              return (
                <TextField
                  {...params}
                  disabled={userAttemptingToUpdate}
                  required={true}
                  value={userInput.project}
                  onChange={(e) => _handleUpdateInputs({ key: 'project', value: e.target.value })}
                  name="project"
                  type="text"
                  placeholder="Project or Phase"
                  label="Project"
                  InputLabelProps={{
                    shrink: true,
                    style: { fontSize: '16px', lineHeight: '1rem' }
                  }}
                  fullWidth 
                  size='small' 
                  variant='standard' sx={{ marginY: 1.2 }} />
              )
            }}
          />
          <span className="text-[0.65rem] leading-[0.8rem] font-bold text-amber-500" >IMPORTANT NOTE: MAKE SURE THE ENTERED PROJECT NAME IS THE SAME IN THE PMDMTS PHASE NAME. (CASE SENSITIVE)</span>
        </div>

        <InputTextField
          disabled={userAttemptingToUpdate}
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
          <FormControlLabel disabled={userAttemptingToUpdate} value="PROPERTY ADMINISTRATOR" control={<Radio />} label="PMD" />
          <FormControlLabel disabled={userAttemptingToUpdate} value="ENGINEER" control={<Radio />} label="CMD" />
        </RadioGroup>

        <LineDivider />
        <div className="h-[10px]" />
        <Button
          type="submit"
          color={userAttemptingToUpdate ? 'error' : 'primary'}
          variant={userAttemptingToUpdate ? 'outlined' : 'contained'}
          className="float-right">
          {
            userAttemptingToUpdate ? "CONFIRM REMOVE USER" : "ADD NEW PERSONEL"
          }
        </Button>
      </Box>

    </div>

  )
}

export default PersonelForm


