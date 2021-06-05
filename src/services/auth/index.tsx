// import { useHistory } from "react-router";
import React from "react";
import { Redirect, RouteComponentProps } from "react-router-dom";
import { auth } from "utils/firebase";


const AuthControl:React.FC<RouteComponentProps<any>> = (props) => {
	console.log(props);
	if (!auth.currentUser) {
		console.warn("No user detected");
      return <Redirect to="/signup" />
	}
	return <div></div>;
};

export default AuthControl;
