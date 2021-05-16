import {styles} from './styles';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

interface IButton {
  textProp:string;
  typeProp:string;
  variantProp:string;
  colorProp:string;
  classes:string;
} 


const Index:React.FC<IButton> = (props) => {
  const { 
    textProp,
    typeProp,
    variantProp,
    colorProp,
    classes
  } = props;
  console.log(textProp)

  return (
    <Button>
      {textProp}
    </Button>
  )
}

export default Index;



