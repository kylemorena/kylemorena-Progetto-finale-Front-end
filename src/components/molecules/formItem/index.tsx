//Material-ui
import Grid from "@material-ui/core/Grid";
//ATOMS
import TextField from "components/atoms/input";
import Button from "components/atoms/button";
import Link from "components/atoms/link";
//Essential
import { useStyles } from "./styles";

interface IFormItem {
	buttonText: string;
	linkText: string;
	toLink: string;
	onSubmitProp: any;
}

const FormItem: React.FC<{
	buttonText: string;
	linkText: string;
	toLink: string;
	onSubmitProp: any;
}> = ({ buttonText, linkText, toLink, onSubmitProp }: IFormItem) => {
	const classes = useStyles();
	return (
		<form className={classes.form} onSubmit={onSubmitProp} noValidate>
			<Grid container spacing={2}>
				<Grid item xs={12}>
					<TextField
						typeProp="text"
						variantProp="outlined"
						idProp="email"
						nameProp="email"
						labelProp="Email Address"
						autoCompleteProp="email"
					/>
				</Grid>
				<Grid item xs={12}>
					<TextField
						typeProp="password"
						variantProp="outlined"
						idProp="password"
						nameProp="password"
						labelProp="Password"
						autoCompleteProp="current-password"
					/>
				</Grid>
				<Grid item xs={12}>
					<Button
						textProp={buttonText}
						typeProp="submit"
						variantProp="contained"
						colorProp="primary"
					/>
				</Grid>
			</Grid>
			<Grid container justify="flex-end">
				<Grid item>
					<Link toProp={toLink}>{linkText}</Link>
				</Grid>
			</Grid>
		</form>
	);
};
export default FormItem;
