import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './App.css';

import Main from './pages/Main';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Profile from './pages/Profile';
import Channel from './pages/Channel';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route exact path="/" element={<Main />} />
        <Route exact path="/signIn" element={<SignIn />} />
        <Route exact path="/signUp" element={<SignUp />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/channel/:id" element={<Channel />} />
      </Routes>
    </main>
  );
}

export default App;
