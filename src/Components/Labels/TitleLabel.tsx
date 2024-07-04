
import { useTheme } from "@mui/material"

interface TitleLabelProps {
  children: React.ReactNode,
}

const TitleLabel = ({ children } : TitleLabelProps) => {
  const theme = useTheme();
  const { dark } = theme.palette as { dark?: any }

  return (
    <div className="text-[1rem] font-bold" style={{color: dark.main}}>
      {children}
    </div>

  )
}

export default TitleLabel
