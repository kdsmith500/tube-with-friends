import React from 'react';

import './SignUp.css';

import NavBar from '../../components/NavBar';
// import SignUpForm from '../../components/SignUpForm';

// const initialState = {

// }

const SignUp = () => {  
  return <article>
    <NavBar />
    <section className="sign-up">
      <div className="header">Sign up with google or email.</div>
      <input className="temp" type="button" value="Sign up with google eventually..."></input>
      <div className="divider">
        <hr className="divider-line" />
        <div className="divider-text">or</div>
        <hr className="divider-line" />
      </div>
      
      <div className="sign-up-form-wrapper">
        <form className="sign-up-form">
          <label htmlFor="email">Please provide an email.</label>
          <input type="text" name="email" placeholder="Email"></input>
          <label htmlFor="password">Create a password.</label>
          <input type="password" name="password" placeholder="Password"></input>
          <label htmlFor="displayName">What name do you want?</label>
          <input type="text" name="displayName" placeholder="Display Name"></input>
          <input className="button" type="submit" value="Sign Up"></input>
        </form>
      </div>
    </section>
  </article>;
};

export default SignUp;
