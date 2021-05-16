
//MATERIAL-UI
import {useStyles} from './styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//ATOMS
import Input from '../../atoms/input';
import SubmitButton from '../../atoms/button';
//MOLECULES
import SignUp from '../../molecules/formItem';
//REDUX
import { useDispatch } from 'react-redux';
import {signUpAuth} from '../../../../redux/slices/signUpSlice.js';
//ESSENTIAL
import {useState} from 'react';
// import {authFormLink} from '../../../utils/data';


const Index = () => {
  const classes = useStyles();
  const [userData,setUserData] = useState({})
  const dispatch = useDispatch();

  console.log(typeof SubmitButton);

  const handleSubmit = () => {
    // dispatch(signUpAuth(userData))
  }

  // const handleChange = () => {
  //   setUserData({...userData,[e.target.id]:e.target.value});
  // }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <SignUp>
        <SubmitButton
          typeProp="submit"
          variantProp="contained"
          colorProp="primary"
          textProp="Invia"
        />
      </SignUp>
    </Container>
  )
}

export default Index
