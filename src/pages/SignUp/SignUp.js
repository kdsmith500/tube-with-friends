import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";

import './SignUp.css';

import NavBar from '../../components/NavBar';
import { auth, createUserProfileDocument } from '../../firebase';

const initialState = {
  email: '',
  password: '',
  displayName: ''
}

const SignUp = () => {  
  const [state, setState] = useState(initialState);

  const handleSubmit = async event => {
    event.preventDefault();

    const { email, password, displayName } = state;

    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);

      createUserProfileDocument(user, { displayName });
    } catch (error) {
      console.error(error);
    }

    clear();
  };

  const handleChange = event => {
    setState(prevState => {
      return { ...prevState, [event.target.name]: event.target.value }
    });
  };

  const clear = () => {
    setState(initialState);
  };

  return <article>
    <NavBar />
    <section className="sign-up">
      <div className="header">Sign up with email.</div>

      <div className="sign-up-form-wrapper">
        <form className="sign-up-form" onSubmit={handleSubmit}>
          <label htmlFor="email">Please provide an email.</label>
          <input 
            type="text"
            name="email"
            placeholder="Email"
            value={state.email}
            onChange={handleChange}
            required
          ></input>

          <label htmlFor="password">Create a password.</label>
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={state.password}
            onChange={handleChange}
            required
          ></input>

          <label htmlFor="displayName">What name do you want?</label>
          <input
            type="text"
            name="displayName"
            placeholder="Display Name"
            value={state.displayName}
            onChange={handleChange}
            required
          ></input>

          <input className="button" type="submit" value="Sign Up"></input>
        </form>
      </div>
    </section>
  </article>;
};

export default SignUp;
