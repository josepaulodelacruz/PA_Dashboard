
import { useTheme } from "@mui/material"

interface SubTitleLabelProps {
  children: React.ReactNode,
}

const SubTitleLabel = ({ children } : SubTitleLabelProps) => {
  const theme = useTheme();
  const { text } = theme.palette as { text?: any }

  return (
    <div className="text-xs font-light" style={{color: text.main}}>
      {children}
    </div>

  )
}

export default SubTitleLabel
