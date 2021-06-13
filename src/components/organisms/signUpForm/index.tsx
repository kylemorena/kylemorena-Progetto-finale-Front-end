import React, { ChangeEvent, useState } from 'react';
import FormItem from 'components/molecules/formItem';
import IUserData from 'interfaces/Iuserdata';
import { SignUpThunk } from 'redux/thunks/signup';
import { unwrapResult } from '@reduxjs/toolkit';
import { useHistory } from 'react-router-dom';
import { useAppDispatch } from 'redux/store';

const SingUpForm = () => {
  const history = useHistory()
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<IUserData>({
    email: '',
    password: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLInputElement>) => {
    event.preventDefault();
    dispatch(SignUpThunk(userData))
      .then(unwrapResult)
      .then((success) => {
        console.log('Success', success);
        history.push('/')
      })
      .catch((error) => {
        console.log('Error',error);
      });
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData((prevState) => {
      return { ...prevState, [e.target.id]: e.target.value };
    });
  };

  return (
    <FormItem
      buttonText='Sing up'
      linkText='Already have an account? Sign in'
      toLink='/login'
      onSubmitProp={handleSubmit}
      onChangeProp={handleChange}
    />
  );
};

export default SingUpForm;
