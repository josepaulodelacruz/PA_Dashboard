
import linearGradient from "@/assets/theme/functions/linearGradient"
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import { ReactNode } from "react"

interface PrimaryButtonProps {
  backgroundValue?: string
  children?: ReactNode
  className?: string
  style?: React.CSSProperties,
  disabled?: boolean,
  onClick?: () => void,
}

const PrimaryButton = ({ style, backgroundValue, children, className, onClick, disabled = false } : PrimaryButtonProps) => {

  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let defaultBackgroundColor = backgroundValue! ?? linearGradient(gradients.primary.main, gradients.primary.state)
  let defaultLabel = children ?? 'OKAY';

  return (
    <Button
      onClick={onClick!}
      disabled={disabled!}
      style={style!}
      className={className!} size='small' sx={{opacity: disabled! ? .7 : 1, background: defaultBackgroundColor, color: '#fff'}}>
      {defaultLabel}
    </Button>
  )
}

export default PrimaryButton
