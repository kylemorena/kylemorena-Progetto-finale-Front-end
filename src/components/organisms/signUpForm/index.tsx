import React from "react";
import FormItem from "components/molecules/formItem";

const SingUpForm = () => {
	const handleSubmit = (event:React.FormEvent<HTMLInputElement>) => {
		event.preventDefault()
	}

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
