import React from 'react';

import './SignIn.css';

import NavBar from '../../components/NavBar';

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

      <div className="sign-in-form-wrapper">
        <form className="sign-in-form">
          <label htmlFor="email">Email</label>
          <input type="text" name="email" placeholder="Email"></input>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" placeholder="Password"></input>
          <input className="button" type="submit" value="Sign In"></input>
        </form>
      </div>
    </section>
  </article>;
};

export default SignIn;
