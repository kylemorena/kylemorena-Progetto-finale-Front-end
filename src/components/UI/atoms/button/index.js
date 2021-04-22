import React from 'react'
import {Button} from '@material-ui/core';

const Index = (props) => {
  const { type, onClick, theme, color } = props;

  return (
    <Button onClick={onClick} theme={theme} color={color} variant="contained">
      {type}
    </Button>
  )
}

export default Index
