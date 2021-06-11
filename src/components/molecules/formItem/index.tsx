//Material-ui
import Grid from "@material-ui/core/Grid";
//ATOMS
import TextField from "components/atoms/input";
import Button from "components/atoms/button";
import Link from "components/atoms/link";
//Essential
import { useStyles } from "./styles";
import { ChangeEvent } from "react";

// interface IFormItem {
// 	buttonText: string;
// 	linkText: string;
// 	toLink: string;
// 	onSubmitProp: any;
// 	onChangeProp:()=>void;
// }

const FormItem: React.FC<{
	buttonText: string;
	linkText: string;
	toLink: string;
	onSubmitProp: any;
	onChangeProp:(e:ChangeEvent<HTMLInputElement>)=>void;
}> = ({ buttonText, linkText, toLink, onSubmitProp,onChangeProp }) => {
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
						onChangeProp={onChangeProp}
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
						onChangeProp={onChangeProp}
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
