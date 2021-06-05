import TextField from "@material-ui/core/TextField";
import React from "react";

interface IInputProps {
	typeProp: string;
	variantProp: "standard" | "filled" | "outlined";
	idProp: string;
	labelProp: string;
	nameProp: string;
	autoCompleteProp: string;
	onChangeProp: () => void;
}

const Input: React.VFC<IInputProps> = ({
	typeProp,
	variantProp,
	idProp,
	labelProp,
	nameProp,
	autoCompleteProp,
	onChangeProp,
}: IInputProps) => {
	return (
		<TextField
			required
			fullWidth
			type={typeProp}
			variant={variantProp}
			id={idProp}
			label={labelProp}
			name={nameProp}
			autoComplete={autoCompleteProp}
			onChange={onChangeProp}
		/>
	);
};

export default Input;
