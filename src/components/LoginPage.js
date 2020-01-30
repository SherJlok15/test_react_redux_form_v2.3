import React from 'react';

import LoginReduxForm from './LoginReduxForm';
import InfoAccountCreate from './InfoAccountCreate';

function mySubmint(value) {
  console.log(value)
}

function LoginPage(props) {

  return (
    <div className="login-form-container">
      <InfoAccountCreate />
      <LoginReduxForm onSubmit={mySubmint}/>
    </div>

  )
}

export default LoginPage;
