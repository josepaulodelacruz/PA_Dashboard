import React from 'react'
import ListItem from '@mui/material/ListItem'


interface SidenavItemProps {
  type: 'collapse',
  name: string,
  key: string,
  icon: React.ReactNode,
  route: string,
  component: React.ReactNode
}

const SidenavItem = (props: SidenavItemProps) => {
  return (
    <ListItem component="li">
    </ListItem>
    
  )
}

export default SidenavItem
