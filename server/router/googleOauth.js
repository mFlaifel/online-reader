const express = require('express');

const router = express.Router();
const axios = require('axios');

const { OAuth2Client } = require('google-auth-library');

const { CLIENT_ID } = process.env;
const client = new OAuth2Client(CLIENT_ID);

// ROUTES
const auth = router.post('/login/google', async (req, res) => {
  const { tokenId } = req.body;
  const verify = async () => {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    const userid = payload.sub;
    // If request specified a G Suite domain:
    // const domain = payload['hd'];
    console.log(userid);
    console.log('payload', payload);
  };
  verify().catch(console.error);
  //   * end of *
  // request user details:
  const idInfo = await axios.get(
    `https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.tokenId}`
  );
  console.log(idInfo);
});

module.exports = auth;
