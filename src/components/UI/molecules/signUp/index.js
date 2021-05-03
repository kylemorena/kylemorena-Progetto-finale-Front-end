// Essential
import {useStyles} from './styles';

// FROM ATOMS
import InputGrid from '../../atoms/inputGrid';
import SubmitButton from '../../atoms/button';
import LinkGrid from '../../atoms/linkGrid';

// FROM Material-ui/core
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Index = () => {
  const classes = useStyles();
  return (
    <Container maxWidth="xs">
      <div className={classes.paper}>
        <form className={classes.form}>
          <Grid container spacing={1}>
            <InputGrid
              xsProp={12} 
              variantProp="filled"
              marginProp="normal"
              typeProp="text"
              idProp="username"
              labelProp="Username"
              nameProp="username"
              autoCompleteProp="username"
            /> 
            <InputGrid 
              xsProp={12} 
              variantProp="filled"
              marginProp="normal"
              typeProp="email"
              idProp="email"
              labelProp="Email Address"
              nameProp="email"
              autoCompleteProp="email"
            /> 
            <InputGrid
              xsProp={12} 
              variantProp="filled"
              marginProp="normal"
              typeProp="password"
              idProp="password"
              labelProp="Password"
              nameProp="password"
              autoCompleteProp="current-password"
            /> 
          </Grid>
          <SubmitButton
            typeProp="submit"
            variantProp="contained"
            colorProp="primary"
            textProp="Invia"
          />
          <Grid container justify="flex-end">
            {/* TODO: Crea i props appropriati in modo che siano dinamici */}
            <LinkGrid textProp='Sing in' toProp='/singin' />
          </Grid>
        </form>
      </div>
    </Container>
  )
}
export default Index;
