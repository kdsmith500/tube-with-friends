import React from 'react';

import './SignIn.css';

import NavBar from '../../components/NavBar';
import SignInForm from '../../components/SignInForm';

const SignIn = () => {  
  return <article>
    <NavBar />
    <section className="sign-up">
      <div className="header">Sign in to continue.</div>
      <input className="temp" type="button" value="Sign in with google eventually..."></input>
      <div className="divider">
        <hr className="divider-line" />
        <div className="divider-text">or</div>
        <hr className="divider-line" />
      </div>
      <SignInForm />
    </section>
  </article>;
};

export default SignIn;
