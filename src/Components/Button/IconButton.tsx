import Button from '@mui/material/Button'
import { ReactNode } from 'react'


interface IconButtonProps {
  children: ReactNode
  onClick?: () => void,
  color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning',
}

const IconButton = ({ children, onClick, color = 'primary' } : IconButtonProps ) => {
  return (
    <Button color={color} variant='outlined' onClick={onClick} size='small' sx={{ width: 'auto', padding: '0', margin: '5px', minWidth: '30px' }}>
      {children}
    </Button>
  )
}

export  default IconButton
