import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Link from '@material-ui/core/Link';
import { Link as RouterLink } from 'react-router-dom';

const Index = (props) => {
  const {
    textProp,
    toProp
  } = props;

  return (
    <Grid item>
      {/* FIXME: da fare il check del prop "to" deve esserci un prop-types/default */}
      <Link component={RouterLink} to={toProp}>
        {textProp}
      </Link>
    </Grid>
  )
}

Index.propTypes = {
  toProp : PropTypes.string.isRequired
}
Index.defaultProps = {
  toProp : '/'
}

export default Index
