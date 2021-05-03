import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import React from 'react'

const Input = (props) => {
  const {
    variantProp,
    marginProp,
    idProp,
    labelProp,
    nameProp,
    autoCompleteProp,
    xsProp
  } = props;
  return (
    <Grid item xs={xsProp}>
      <TextField
        required
        fullWidth
        variant={variantProp}
        margin={marginProp}
        id={idProp}
        label={labelProp}
        name={nameProp}
        autoComplete={autoCompleteProp}
      />
    </Grid>
  )
}

export default Input
