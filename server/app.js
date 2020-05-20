const express = require('express');
const { join } = require('path');
const compression = require('compression');
const cookieParser = require('cookie-parser');

const router = require('./router');
require('dotenv').config();

const app = express();

app.disable('x-powered-by');
app.set('port', process.env.PORT || 5000);

const middleware = [
  compression(),
  cookieParser(),
  express.json(),
  express.urlencoded({ extended: false }),
];
app.use(middleware);

app.use(express.static(join(__dirname, '..', 'client', 'build')));

app.use(router);

app.get('*', (req, res) => {
  res.sendFile(join(__dirname, '..', 'client', 'build', 'index.html'));
});

// google oauth
// const axios = require('axios');
// const { OAuth2Client } = require('google-auth-library');

// const { CLIENT_ID } = process.env;
// const client = new OAuth2Client(CLIENT_ID);

// // ROUTES
// app.post('/login/google', async (req, res) => {
//   const { tokenId } = req.body;
//   const verify = async () => {
//     const ticket = await client.verifyIdToken({
//       idToken: tokenId,
//       audience: CLIENT_ID,
//     });
//     const payload = ticket.getPayload();
//     const userid = payload.sub;
//     // If request specified a G Suite domain:
//     // const domain = payload['hd'];
//     console.log(userid);
//     console.log('payload', payload);
//   };
//   verify().catch(console.error);
//   //   * end of *
//   // request user details:
//   const idInfo = await axios.get(
//     `https://oauth2.googleapis.com/tokeninfo?id_token=${req.body.tokenId}`
//   );
//   console.log(idInfo);
// });

module.exports = app;
