import {styles} from './styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const Index = (props) => {
  const { 
    textProp,
    typeProp,
    variantProp,
    colorProp,
    classes
  } = props;

  return (
    <Button 
      fullWidth
      type={typeProp} 
      variant={variantProp}
      color={colorProp} 
      className={classes[typeProp]}
    >
      {textProp}
    </Button>
  )
}

export default withStyles(styles)(Index);



