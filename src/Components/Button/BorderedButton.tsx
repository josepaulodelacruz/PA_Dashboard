
import Button from "@mui/material/Button"
import { useTheme } from "@mui/material/styles"
import { ReactNode } from "react"

interface BorderedButtonProps {
  backgroundValue?: string
  children?: ReactNode
  onClick?: () => void,

}

const BorderedButton = ({ 
  backgroundValue = 'transparent', 
  children,
  onClick,
}: BorderedButtonProps) => {
  const theme = useTheme()
  const { gradients } = theme.palette as { gradients?: any }

  let defaultLabel = children ?? 'OKAY';

  return (
    <Button
      onClick={onClick!}
      variant='outlined'
      size='small'
      sx={{
        background: backgroundValue,
        borderColor: gradients.dark.main,
        color: gradients.dark.main,
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