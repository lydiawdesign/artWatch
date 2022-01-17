import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/client';
import Auth from '../utils/auth';
import { ADD_USER } from '../utils/mutations';

function Signup(props) {
  const [formState, setFormState] = useState({ email: '', password: '', username: '' });
  const [addUser] = useMutation(ADD_USER);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    const mutationResponse = await addUser({
      variables: {
        email: formState.email,
        password: formState.password,
        username: formState.username,
      },
    });
    const token = mutationResponse.data.addUser.token;
    Auth.login(token);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div className="container pt-5">
      <div className="pt-5 text-center">

        <h2>Signup</h2>
        <p>Don't have an account? No problem. Create an account below!</p>
        <form onSubmit={handleFormSubmit}>
          <div className="flex-row space-between my-2">
            <label htmlFor="name">Username:&nbsp;</label>
            <input
              placeholder="artRox"
              name="username"
              type="username"
              id="username"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="email">Email:&nbsp;</label>
            <input
              placeholder="artrox@email.com"
              name="email"
              type="email"
              id="email"
              onChange={handleChange}
            />
          </div>
          <div className="flex-row space-between my-2">
            <label htmlFor="pwd">Password:&nbsp; </label>
            <input
              placeholder="******"
              name="password"
              type="password"
              id="pwd"
              onChange={handleChange}
            />
          </div>

          <Link to="Login">Already have an account? Login Here.</Link>

          <div className="flex-row flex-end">
            <button type="submit" className="btn btn-outline-dark m-2 buttonStyle">Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
