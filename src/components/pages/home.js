import SignUpTemplate from '../templates/signUpTemplate';
import SignUpForm from '../UI/organisms/signUpForm';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';

//ATOMS

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <>
      <SignUpTemplate
        navBar={
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              Home
            </IconButton>
            <Typography variant="h6" className={classes.title}>
              News
            </Typography>
            <Button color="inherit">Login</Button>
          </Toolbar>
        } 
        signUpForm={
          <SignUpForm
            validate
          />
        } 
      />
    </>
  )
}

export default Home
