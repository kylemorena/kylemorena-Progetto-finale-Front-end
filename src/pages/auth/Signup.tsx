import React from "react";
import IPageProps from "interfaces/Ipages";
import SignUpTemplate from "components/templates/signUpTemplate";
import { IconButton, makeStyles, Toolbar, Typography } from "@material-ui/core";
import SignUpForm from "components/organisms/signUpForm";
import { useSelector } from "react-redux";
import { RootState } from "redux/store";
import { useHistory } from "react-router-dom";
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

const SignUp: React.FC<IPageProps> = () => {
	const accessToken = useSelector((state:RootState) => state.authReducer.auth?.accessToken)
	const classes = useStyles();
	const history = useHistory();
	const onClickHandle = () => {
		history.push('/')
	}

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
						onClick={onClickHandle}
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
