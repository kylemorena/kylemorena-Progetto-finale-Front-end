import Button from "@material-ui/core/Button";
// interface IButton {
// 	typeProp: string;
// 	variantProp: string;
// 	colorProp: string;
// }

const Index: React.FC<{
	textProp: string;
	typeProp: "button" | "submit" | "reset";
	variantProp: "text" | "outlined" | "contained";
	colorProp: "inherit" | "primary" | "secondary" | "default";
}> = ({ textProp, typeProp, variantProp, colorProp }) => {
	console.log();
	return (
		<Button fullWidth type={typeProp} variant={variantProp} color={colorProp}>
			{textProp}
		</Button>
	);
};

export default Index;
