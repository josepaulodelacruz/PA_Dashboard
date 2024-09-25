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

interface PersonelFormProps {
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

  //let backgroundValue = linearGradient(gradients.primary.state, gradients.primary.main);
  //let updateBackgroundValue = linearGradient(gradients.warning.state, gradients.warning.main);

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
    console.log(isUpdate);
    if (!isUpdate) {
      return await assignPersonel({ ...userInput }, {
        onSuccess: (response) => {
          console.log(response)
          onRefresh!()
        },
        onError: (error) => {
          console.log(error.message)
        }
      })
    } else {
      console.log('show user id: ', userInput.id)
      console.log(id)
      return await deactivatePersonel({id: userInput.id }, {
        onSuccess: (response) => {
          console.log(response);
          onRefresh!();
        },
        onError: (error) => {
          console.error(error.message)
        }
      })
    }
  }

  const PersonelFormHeader = () => {
    if (userAttemptingToUpdate) {
      return (
        <div className="flex flex-row justify-between">
          <div className="flex flex-col">
            <MainSpan>DEACTIVATE PERSONEL</MainSpan>
            <SubSpan>Remove Personel</SubSpan>
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
        <InputTextField
          disabled={userAttemptingToUpdate}
          value={userInput.project}
          onChange={(e) => _handleUpdateInputs({ key: 'project', value: e.target.value })}
          required={true}
          name="project"
          type="text"
          placeholder="Project or Phase"
          label="Project"
        />
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
          <FormControlLabel value="PROPERTY ADMINISTRATOR" control={<Radio />} label="PMD" />
          <FormControlLabel value="ENGINEER" control={<Radio />} label="CMD" />
        </RadioGroup>

        <LineDivider />
        <div className="h-[10px]" />
        <Button
          type="submit"
          color={userAttemptingToUpdate ? 'error' : 'primary'}
          variant={userAttemptingToUpdate ? 'outlined' : 'contained'}
          className="float-right">
          {
            userAttemptingToUpdate ? "CONFIRM" : "ADD NEW PERSONEL"
          }
        </Button>
      </Box>

    </div>

  )
}

export default PersonelForm


