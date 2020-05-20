import React from 'react';
import { GoogleLogin } from 'react-google-login';
import axios from 'axios';

const successResponse = (response) => {
  const { tokenId } = response;

  axios.post('/login/google', { tokenId }).then(console.log).catch(console.log);
};

const failureResponse = (response) => {
  console.log('error', response);
};
const SingInButton = () => (
  <GoogleLogin
    clientId={process.env.REACT_APP_CLIENT_ID}
    buttonText="Login"
    onSuccess={successResponse}
    onFailure={failureResponse}
    cookiePolicy="single_host_origin"
    isSignedIn
  />
);

export default SingInButton;
