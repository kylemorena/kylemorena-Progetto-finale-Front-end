import React from 'react';
import IPageProps from '@interfaces/pages';

const Register: React.FC<IPageProps> = props => {
  const {name} = props;

  return (
    <p>
      Register Page
    </p>
  )
}

export default Register;