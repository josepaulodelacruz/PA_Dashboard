import TextField from '@mui/material/TextField'

interface InputTextFieldProps {
  placeholder?: string
  label?: string
}

const InputTextField = ({
  placeholder,
  label
} : InputTextFieldProps ) => {
  return (
    <TextField
      InputLabelProps={{
        shrink: true,
        style: { fontSize: '20px'}
        
      }}
      inputProps={{
        style: { fontSize: '16px' }
      }}
      placeholder={placeholder!}
      fullWidth size='small' variant='standard' label={label!} sx={{ marginY: 1.2 }} />
  )
}

export default InputTextField
