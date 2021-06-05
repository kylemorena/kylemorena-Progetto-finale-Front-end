import React from "react";
import Container from "@material-ui/core/Container";
import AppBar from "@material-ui/core/AppBar";

interface ISignUpTemplate {
	navBar: {};
	sections: {};
}

const SignUpTemplate: React.FC<ISignUpTemplate> = ({
	navBar,
	sections,
}: ISignUpTemplate) => {
	return (
		<>
			<AppBar position="static">{navBar}</AppBar>
			<Container component="main" maxWidth="xs">
				{sections}
			</Container>
		</>
	);
};

export default SignUpTemplate;
