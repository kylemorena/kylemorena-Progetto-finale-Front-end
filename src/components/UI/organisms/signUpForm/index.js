
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
import {authFormLink} from '../../../utils/data';


const Index = () => {
  const classes = useStyles();
  const [userData,setUserData] = useState({})
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(signUpAuth(userData))
  }

  const handleChange = (e) => {
    setUserData({...userData,[e.target.id]:e.target.value});
  }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <SignUp
        linkText={authFormLink.signInLink}
        toLink='/singin'
        onSubmitProp={handleSubmit}
      >
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Input 
              variantProp="filled"
              typeProp="text"
              idProp="username"
              labelProp="Username"
              nameProp="username"
              autoCompleteProp="username"
              onChangeProp={handleChange}
            /> 
          </Grid>
          <Grid item xs={12}>
            <Input 
              variantProp="filled"
              typeProp="email"
              idProp="email"
              labelProp="Email Address"
              nameProp="email"
              autoCompleteProp="email"
              onChangeProp={handleChange}
            /> 
          </Grid>
          <Grid item xs={12}>
            <Input
              variantProp="filled"
              typeProp="password"
              idProp="password"
              labelProp="Password"
              nameProp="password"
              autoCompleteProp="current-password"
              onChangeProp={handleChange}
            />
          </Grid>
        </Grid>
        <SubmitButton
          typeProp="submit"
          variantProp="contained"
          colorProp="primary"
          textProp="Invia"
          onSubmitProp={handleSubmit}
        />
      </SignUp>
    </Container>
  )
}

export default Index
