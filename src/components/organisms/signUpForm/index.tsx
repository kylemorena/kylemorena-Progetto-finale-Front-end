import React from "react";
import FormItem from "components/molecules/formItem";
import { useDispatch } from "react-redux";
import { SignUp } from "redux/thunks/signup";

const SingUpForm = () => {
	const dispatch = useDispatch();
	const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
		event.preventDefault();
		dispatch(SignUp());
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
