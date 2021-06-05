import React from "react";
import IPageProps from "interfaces/pages";

const LogIn: React.FC<IPageProps> = (props) => {
	const { name } = props;

	console.log('login')

	return <p>LogIn Page</p>;
};

export default LogIn;
