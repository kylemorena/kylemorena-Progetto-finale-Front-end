import React from 'react'
import Button from '../../atoms/button';
import {useStyles} from './counterItem.styles';

const Index = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Button type="Incrementa" color="primary" />
      <Button type="Decrementa" color="primary" />
    </div>
  )
}
export default Index;
