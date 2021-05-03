import {styles} from './styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';


const Index = (props) => {
  const { textProp, typeProp, variantProp, colorProp, handleClick, classes  } = props;

  return (
    <>
    <Button 
      type={typeProp} 
      variant={variantProp}
      color={colorProp} 
      className={classes[typeProp]}
      onClick={handleClick}
    >
      {textProp}
    </Button>
    </>
  )
}

export default withStyles(styles)(Index);



