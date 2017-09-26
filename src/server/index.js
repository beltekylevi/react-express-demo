'use strict';

const express = require('express');

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/heartbeat', (req, res) => {
  res.json({status: 'ok'});
});

app.listen(PORT, function() {
  console.log(`app is listening on port ${PORT}`);
});
