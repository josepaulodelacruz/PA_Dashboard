import { TableRow } from "@mui/material"
import '@/index.css'
import { MainSpan } from "@/Components/Labels/Spans"
import IOSSwitch from "@/Components/ToggleSwitch/IOSSwitch"
import { Project } from "@/Types"
import BorderedButton from "@/Components/Button/BorderedButton"
import DeleteIcon from '@mui/icons-material/Delete'

interface ProjectRowComponentProps {
  project: Project,
  onToggle: (project: Project, isChecked: boolean) => void,
  onModeDelete: boolean
  onDelete: (project: Project, canBeDeleted: boolean) => void,
  isProjectDeleted: boolean
}

const ProjectRowComponent: React.FC<ProjectRowComponentProps> = ({
  project,
  onToggle,
  onModeDelete = false,
  onDelete,
  isProjectDeleted
}) => {

  const _handleDeleteItem = () => {
    if (project.is_included) {
      onDelete(project, false)
    } else {
      onDelete(project, true)
    }

  }

  return (
    <TableRow key={project.id} className='w-full border-b'>
      <td className="column-header">
        <MainSpan className="text-sm ">{project.description}</MainSpan>
      </td>
      <td className="column-header" align="center">
        {
          !onModeDelete ?
            <IOSSwitch
              checked={project.is_included}
              onToggle={(isCheck) => onToggle(project, isCheck)}
            /> :
            <BorderedButton isDisabled={project.is_included} onClick={_handleDeleteItem} style={{ padding: '5px' }}>
              {
                isProjectDeleted ? "Retrieve" : <DeleteIcon fontSize='small' />
              }
            </BorderedButton>
        }

      </td>
    </TableRow>
  )
}

export default ProjectRowComponent 
