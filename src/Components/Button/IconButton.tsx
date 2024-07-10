import Button from '@mui/material/Button'
import { ReactNode } from 'react'


interface IconButtonProps {
  children: ReactNode
}

const IconButton = ({ children } : IconButtonProps ) => {
  return (
    <Button variant='outlined' size='small' sx={{ width: 'auto', padding: '0', margin: '5px', minWidth: '30px' }}>
      {children}
    </Button>
  )
}

export  default IconButton
