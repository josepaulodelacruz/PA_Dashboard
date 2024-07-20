
import linearGradient from "@/assets/theme/functions/linearGradient"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import { ReactNode } from "react"

interface PrimaryButtonProps {
  backgroundValue?: string
  children?: ReactNode
  className?: string
  style?: React.CSSProperties
}

const PrimaryButton = ({ style, backgroundValue, children, className } : PrimaryButtonProps) => {

  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let defaultBackgroundColor = backgroundValue! ?? linearGradient(gradients.dark.main, gradients.dark.state)
  let defaultLabel = children ?? 'OKAY';

  return (
    <Button
      style={style!}
      className={className!} size='small' sx={{background: defaultBackgroundColor, color: '#fff'}}>
      {defaultLabel}
    </Button>
  )
}

export default PrimaryButton
