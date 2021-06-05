import PropTypes from "prop-types";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import { Link as RouterLink } from "react-router-dom";

const Index: React.FC<{
	toProp: string;
}> = ({toProp,children}) => {
	return (
		<Grid item>
			<Link component={RouterLink} to={toProp}>
				{children}
			</Link>
		</Grid>
	);
};

Index.propTypes = {
	toProp: PropTypes.string.isRequired,
};
Index.defaultProps = {
	toProp: "/",
};

export default Index;
