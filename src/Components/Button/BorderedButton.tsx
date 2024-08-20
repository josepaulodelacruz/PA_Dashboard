
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import { ReactNode } from "react"

interface BorderedButtonProps {
  backgroundValue?: string
  children?: ReactNode
  onClick?: () => void,
  style?: React.CSSProperties,
  isDisabled?: boolean
}

const BorderedButton = ({ 
  backgroundValue = 'transparent', 
  children,
  onClick,
  style,
  isDisabled = false,
}: BorderedButtonProps) => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let defaultLabel = children ?? 'OKAY';

  return (
    <Button
      disabled={isDisabled!}
      onClick={onClick!}
      variant='outlined'
      size='small'
      style={style!}
      sx={{
        background: backgroundValue,
        borderColor: '#006442',
        color: gradients.primary.main,
        '&:hover': {
          borderColor: gradients.dark.main,
        },
      }}
    >
      {defaultLabel}
    </Button>

  )
}

export default BorderedButton
