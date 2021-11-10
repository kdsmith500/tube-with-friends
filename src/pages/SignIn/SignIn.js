import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './SignIn.css';

import NavBar from '../../components/NavBar';
import { signInWithGoogle, signInWithEmailAndPass } from '../../firebase';

const initialState = {
  email: '',
  password: ''
}

const SignIn = () => {  
    const [state, setState] = useState(initialState);
    let navigate = useNavigate()
  
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

    const handleSignInWithGoogle = () => {
      signInWithGoogle()
      .then(() => navigate('/'))
      .catch(error => console.error(error));
    }

    const handleSignInWithEmailAndPw = () => {
      signInWithEmailAndPass(state.email, state.password)
      .then(() => navigate('/'))
      .catch(error => console.error(error));
    }

  return <article>
    <NavBar />
    <section className="sign-up">
      <div className="header">Sign in to continue.</div>
      <input className="temp" type="button" value="Sign in with google" onClick={handleSignInWithGoogle}></input>
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
            onClick={handleSignInWithEmailAndPw}
          ></input>
        </form>
      </div>
    </section>
  </article>;
};

export default SignIn;
