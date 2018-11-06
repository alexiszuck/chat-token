require('dotenv').config();
const express = require('express');
const router = express.Router();
const Chatkit = require('@pusher/chatkit-server');

const chatkit = new Chatkit.default({
  instanceLocator: 'v1:us1:ac1e60dc-3833-4ebf-bd2d-e31aa1aa68ee',
  key: process.env.CHATKIT_SECRET_KEY
});

router.post('/', (req, res) => {
  const authData = chatkit.authenticate({
    userId: req.query.user_id
  });

  res.status(authData.status)
     .send(authData.body);
})

module.exports = router;
