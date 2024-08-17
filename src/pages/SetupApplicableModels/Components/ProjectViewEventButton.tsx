import BorderedButton from "@/Components/Button/BorderedButton"
import PrimaryButton from "@/Components/Button/PrimaryButton"

interface ProjectViewEventButtonProps {
  onClick?: (event: string) => void
  status: 'save' | 'add'
}

const ProjectViewEventButton: React.FC<ProjectViewEventButtonProps> = ({ onClick, status }) => {
  if (status === 'add') {
    return <PrimaryButton
      onClick={() => onClick!('add-checklist')}
      style={{ float: 'right' }}>Add Checklist</PrimaryButton>
  } else {
    return <BorderedButton
      style={{float:'right'}}
      >
      Save Checklist
    </BorderedButton>
  }

}

export default ProjectViewEventButton 
