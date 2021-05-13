//Material-ui
import Grid from '@material-ui/core/Grid';
//ATOMS
import LinkGrid from '../../atoms/link';
//Essential
import {useStyles} from './styles';

const Index = (props) => {
  const {
    children,
    linkText,
    toLink,
    onSubmitProp
  } = props;
  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={onSubmitProp}>
      {children}
      <Grid container justify="flex-end">
        <LinkGrid textProp={linkText} toProp={toLink}/>
      </Grid>
    </form>
  )
}
export default Index;
