import React from 'react'
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';

const signUpTemplate :React.FC<{navBar: {}, signUpForm:{} }> = (props) => {
  const { navBar,signUpForm } = props;

  return (
    <>
      <AppBar position="static">{navBar}</AppBar>
      <Container component="main">
        {signUpForm}
      </Container>
    </>
  )
}

export default signUpTemplate;
