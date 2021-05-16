//Material-ui
import Grid from '@material-ui/core/Grid';
//ATOMS
import LinkGrid from '../../atoms/link';
//Essential
import {useStyles} from './styles';

const Index:React.FC<{children:()=>{},linkText:string,toLink:string,onSubmitProp:()=>{}}> = (props) => {
  const {
    children,
    linkText,
    toLink,
    onSubmitProp
  } = props;

  console.log(children);

  const classes = useStyles();
  return (
    <form className={classes.form} onSubmit={onSubmitProp}>
      {children}
      <Grid container justify="flex-end">
        <LinkGrid toProp={toLink}/>
      </Grid>
    </form>
  )
}
export default Index;
