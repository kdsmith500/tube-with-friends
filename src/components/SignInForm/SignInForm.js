import React from 'react';

import './SignInForm.css';

const SignInForm = () => { 
  return <div className="sign-in-form-wrapper">
    <form className="sign-in-form">
      <label for="email">Email</label>
      <input type="text" name="email" placeholder="Email"></input>
      <label for="password">Password</label>
      <input type="password" name="password" placeholder="Password"></input>
      <input className="button" type="submit" value="Sign In"></input>
    </form>
  </div>;
};

export default SignInForm;