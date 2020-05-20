const express = require('express');

const router = express.Router();

const auth = require('./googleOauth');

router.use(auth);

module.exports = router;
