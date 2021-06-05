import SignUpTemplate from "components/templates/signUpTemplate";
import SignUpForm from "components/organisms/signUpForm";
import { makeStyles } from "@material-ui/core/styles";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";

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

const Home: React.FC<any> = () => {
	const classes = useStyles();

	return (
		<>
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
				sections={<SignUpForm />}
			/>
		</>
	);
};

export default Home;
