import React, { useState } from 'react';
import { addDoc } from 'firebase/firestore';

import './CreateChannelModal.css';

import { channelsQ, auth } from '../../firebase';

const initialState = {
  channelName: '',
  description: ''
}

const CreateChannelModal = ({ toggle }) => { 
  const [form, setForm] = useState(initialState);

  const handleChange = event => {
    setForm(prevState => {
      return { ...prevState, [event.target.name]: event.target.value }
    })
  };

  const handleSubmit = event => {
    event.preventDefault();

    const { channelName, description } = form;
    const { uid, displayName, email, photoURL } = auth.currentUser || {};

    const channel = {
      channelName,
      description,
      user: {
        uid,
        displayName,
        email,
        photoURL
      },
      chat: [],
      queue: [],
      createdAt: new Date(),
    }

    addDoc(channelsQ, channel);

    setForm(initialState);
    toggle();
  };

  return <section className="create-channel-modal">
    <div className="close" onClick={toggle}>X</div>
    <div className="create-channel-title">Create a channel</div>
    <form className="create-channel-form" onSubmit={handleSubmit}>
      <label htmlFor="channelName">Name your channel.</label>
      <input
        type="text"
        name="channelName"
        placeholder="Channel Name"
        value={form.channelName}
        onChange={handleChange}
        required
      ></input>

      <label htmlFor="description">Descriptions are nice.</label>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={handleChange}
      ></input>

      <input
        className="button"
        type="submit"
        value="Create Channel"
      ></input>
    </form>
  </section>;
};

export default CreateChannelModal;