import React, { useState } from 'react';

import './CreateChannelModal.css';

const initialState = {
  channelName: '',
  description: ''
}

const CreateChannelModal = ({ toggle }) => { 
  const [form, setForm] = useState(initialState);

  return <section className="create-channel-modal">
    <div className="close" onClick={toggle}>X</div>
    <div className="create-channel-title">Create a channel</div>
    <form className="create-channel-form" onSubmit={() => console.log('submit')}>
      <label htmlFor="channelName">Name your channel.</label>
      <input
        type="text"
        name="channelName"
        placeholder="Channel Name"
        value={form.channelName}
        onChange={() => console.log('change')}
        required
      ></input>

      <label htmlFor="description">Descriptions are nice.</label>
      <input
        type="text"
        name="description"
        placeholder="Description"
        value={form.description}
        onChange={() => console.log('change')}
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