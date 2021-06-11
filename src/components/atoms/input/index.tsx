import TextField from '@material-ui/core/TextField'
import React, { ChangeEvent } from 'react'

// interface IInputProps {
//    typeProp: string;
//    variantProp: "standard" | "filled" | "outlined";
//    idProp: string;
//    labelProp: string;
//    nameProp: string;
//    autoCompleteProp: string;
//    onChangeProp?: any;
// }

const Input: React.VFC<{
  typeProp: string
  variantProp: 'standard' | 'filled' | 'outlined'
  idProp: string
  nameProp: string
  labelProp: string
  autoCompleteProp: string
  onChangeProp:(e:ChangeEvent<HTMLInputElement>)=>void
}> = ({
  typeProp,
  variantProp,
  idProp,
  nameProp,
  labelProp,
  autoCompleteProp,
  onChangeProp,
}) => {

  return (
    <TextField
      required
      fullWidth
      type={typeProp}
      variant={variantProp}
      id={idProp}
      name={nameProp}
      label={labelProp}
      autoComplete={autoCompleteProp}
      onChange={onChangeProp}
    />
  )
}

export default Input
