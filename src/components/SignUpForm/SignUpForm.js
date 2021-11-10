import React from 'react';

import './SignUpForm.css';

const SignUpForm = () => { 
  return <div className="sign-up-form-wrapper">
    <form className="sign-up-form">
      <label for="email">Please provide an email.</label>
      <input type="text" name="email" placeholder="Email"></input>
      <label for="password">Create a password.</label>
      <input type="password" name="password" placeholder="Password"></input>
      <label for="displayName">What name do you want?</label>
      <input type="text" name="displayName" placeholder="Display Name"></input>
      <input className="button" type="submit" value="Sign Up"></input>
    </form>
  </div>;
};

export default SignUpForm;