import Button from "@material-ui/core/Button";
interface IButton {
	textProp: string;
	typeProp: string;
	variantProp: string;
	colorProp: string;
	classes: string;
}

const Index: React.FC<IButton> = ({
	textProp,
	typeProp,
	variantProp,
	colorProp,
	classes,
}: IButton) => {
	console.log(textProp);
	return <Button>{textProp}</Button>;
};

export default Index;
