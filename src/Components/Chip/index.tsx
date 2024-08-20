import SubTitleLabel from "../Labels/SubTitle"

interface ChipProps {
  name?: string
}

const Chip = ({name} : ChipProps) => {
  return (
    <div className="inline-flex mx-[1px] my-[1px] border border-black p-1 rounded-sm">
      <SubTitleLabel>{name}</SubTitleLabel>
    </div>
  )

}

export default Chip
