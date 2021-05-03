import Button from '../../atoms/button';
import {useStyles} from './counterItem.styles';
import { useDispatch } from 'react-redux'
import { increment,decrement, } from '../../../redux/reducers/counterSlice.js'

const Index = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  return (
    <div className={classes.root}>
      <Button type="Incrementa" color="primary" handleClick={()=>dispatch(increment())}/>
      <Button type="Decrementa" color="primary" handleClick={()=>dispatch(decrement())}/>
    </div>
  )
}
export default Index;
