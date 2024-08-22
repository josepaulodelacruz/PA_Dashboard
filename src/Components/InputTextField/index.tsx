import TextField from '@mui/material/TextField'

interface InputTextFieldProps {
  placeholder?: string
  label?: string
  type?: React.HTMLInputTypeAttribute
  required?:  boolean,
  name: string
}

const InputTextField = ({
  placeholder,
  label,
  type,
  required = false,
  name
} : InputTextFieldProps ) => {
  return (
    <TextField
      name={name!}
      required={required!}
      type={type!}
      InputLabelProps={{
        shrink: true,
        style: { fontSize: '16px', lineHeight: '1rem'}
        
      }}
      inputProps={{
        style: { fontSize: '14px' }
      }}
      placeholder={placeholder!}
      fullWidth size='small' variant='standard' label={label!} sx={{ marginY: 1.2 }} />
  )
}

export default InputTextField
