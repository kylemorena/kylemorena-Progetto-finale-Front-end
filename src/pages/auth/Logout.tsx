import React from "react";
import IPageProps from "interfaces/pages";

const LogOut: React.FC<IPageProps> = (props) => {
	const { name } = props;

	return <p>LogOut Page</p>;
};

export default LogOut;
