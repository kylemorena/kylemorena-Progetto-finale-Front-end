import React from "react";
import FormItem from "components/molecules/formItem";
import { useDispatch } from "react-redux";
import { SignUp } from "redux/thunks/signup";

const SingUpForm = () => {
	type data = { name: string; age: number };
	const dataValue: data = {
		name: "prova",
		age: 123,
	};
	const dispatch = useDispatch();
	const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		dispatch(SignUp({email:'ciaone@gmail.com',password:'21312dasdasd'}));
		sessionStorage.setItem("accessToken", JSON.stringify(dataValue));
	};

	return (
		<FormItem
			buttonText="Sing up"
			linkText="Already have an account? Sign in"
			toLink="/login"
			onSubmitProp={handleSubmit}
		/>
	);
};

export default SingUpForm;
