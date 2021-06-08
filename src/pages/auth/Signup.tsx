import React from "react";
import IPageProps from "interfaces/pages";
import SignUpTemplate from "components/templates/signUpTemplate";
import { IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import SignUpForm from "components/organisms/signUpForm";
import { useSelector } from "react-redux";
import { RootState } from "redux/rootReducer";
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

const SignUp: React.FC<IPageProps> = (props) => {
	const accessToken = useSelector((state:RootState) => state.authReducer.accessToken)
	const classes = useStyles();

	return (
		<SignUpTemplate
			// TODO: da creare il componente NavBar
			navBar={
				<Toolbar>
					<IconButton
						edge="start"
						className={classes.menuButton}
						color="inherit"
						aria-label="menu"
					>
						Home
					</IconButton>
					<Typography variant="h6" className={classes.title}>
						News
					</Typography>
				</Toolbar>
			}
			sections={
				<>
					<Typography>{accessToken}</Typography>
					<SignUpForm />
				</>
			}
		/>
	);
};

export default SignUp;
