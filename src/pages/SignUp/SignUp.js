import React from 'react';

import './SignUp.css';

import NavBar from '../../components/NavBar';
import SignUpForm from '../../components/SignUpForm';

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
      <SignUpForm />
    </section>
  </article>;
};

export default SignUp;
