import React, { useState } from 'react';

import './SignIn.css';

import NavBar from '../../components/NavBar';
import { signInWithGoogle, signInWithEmailAndPass } from '../../firebase';

const initialState = {
  email: '',
  password: ''
}

const SignIn = () => {  
    const [state, setState] = useState(initialState);
  
    const handleSubmit = async event => {
      event.preventDefault();
    
      clear();
    };
  
    const handleChange = event => {
      setState({
        [event.target.name]: event.target.value
      });
    };
  
    const clear = () => {
      setState(initialState);
    };

  return <article>
    <NavBar />
    <section className="sign-up">
      <div className="header">Sign in to continue.</div>
      <input className="temp" type="button" value="Sign in with google" onClick={signInWithGoogle}></input>
      <div className="divider">
        <hr className="divider-line" />
        <div className="divider-text">or</div>
        <hr className="divider-line" />
      </div>

      <div className="sign-in-form-wrapper">
        <form className="sign-in-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
          ></input>

          <label htmlFor="password">Password</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            required
          ></input>

          <input
            className="button"
            type="submit"
            value="Sign In"
            onClick={() => {signInWithEmailAndPass(state.email, state.password)}}
          ></input>
        </form>
      </div>
    </section>
  </article>;
};

export default SignIn;
