import Snackbar from '@mui/material/Snackbar'

export type SnackbarType = {
  isOpen: boolean, 
  onClose?: () => void,
  message?: string,
  action?: () => void | null
}

const SnackbarComponent: React.FC<SnackbarType> = ({
  isOpen,
  onClose,
  message,
}) => {

  return (
    <Snackbar 
      open={isOpen}
      message={message!}
      autoHideDuration={1500}
      onClose={onClose}
      anchorOrigin={{ vertical: 'bottom', horizontal: 'right'}}
    />
  )

}

export default SnackbarComponent
