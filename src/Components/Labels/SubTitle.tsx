
import { useTheme } from "@mui/material"

interface SubTitleLabelProps {
  children: React.ReactNode,
}

const SubTitleLabel = ({ children } : SubTitleLabelProps) => {
  const theme = useTheme();
  const { text } = theme.palette as { text?: any }
  console.log(text.main)

  return (
    <div className="text-xs font-bold" style={{color: text.main}}>
      {children}
    </div>

  )
}

export default SubTitleLabel
