
//MATERIAL-UI
import {useStyles} from './styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
//ATOMS
import Input from '../../atoms/input';
import SubmitButton from '../../atoms/button';
//MOLECULES
import SignUp from '../../molecules/formItem';
//ESSENTIAL
import {authFormLink} from '../../../utils/data';


const Index = () => {
  const classes = useStyles();

  const handleChange = (e) => {
    console.log(e.target.value);
  }

  return (
    <Container maxWidth="xs" className={classes.container}>
      <SignUp
        linkText={authFormLink.signInLink}
        toLink='/singin'
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
        />
      </SignUp>
    </Container>
  )
}

export default Index
