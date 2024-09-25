import { ReactNode } from "react"

interface PrintLabelProps {
  title: string
  value?: ReactNode
  inline?: boolean
  isTitleCentered?: boolean,
  bottomTitle?: ReactNode,

}

const PrintLabel = ({
  title,
  value,
  isTitleCentered = false,
  bottomTitle,
}: PrintLabelProps) => {

  return (
    <div className="flex border border-black flex-col w-full">
      <span className={`text-[0.50rem] ${isTitleCentered! ? 'text-center' : 'text-start'}`}>{title}</span>
      <span className={`text-[0.75rem] font-semibold text-center ${!value ? 'h-[20px]' : null} `}>{value}</span>
      {bottomTitle!}
    </div>
  )
}

interface SectionLabelProps {
  title: string
}

const SectionLabel = ({ 
  title,
} : SectionLabelProps) => {

  return (
    <div className="w-full border border-black bg-black flex flex-col justify-center items-center">
      <span className="text-white text-[0.70rem] font-semibold text-center">{title}</span>
    </div>
  )
}

export {
  PrintLabel,
  SectionLabel
}

