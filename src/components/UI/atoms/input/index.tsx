import TextField from '@material-ui/core/TextField';
import React from 'react'

const Input = (props) => {
  const {
    typeProp, 
    variantProp,
    idProp,
    labelProp,
    nameProp,
    autoCompleteProp,
    onChangeProp
  } = props;

  return (
    <TextField
      required
      fullWidth
      type={typeProp}
      variant={variantProp}
      id={idProp}
      label={labelProp}
      name={nameProp}
      autoComplete={autoCompleteProp}
      onChange={onChangeProp}
    />
  )
}

export default Input
