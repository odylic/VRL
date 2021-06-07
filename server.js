const express = require('express');
const path = require('path');
const app = express();

app.use(express.json());
app.use(express.urlencoded());

const PORT = process.env.PORT || 8080;

// test
app.listen(PORT, () => {
  console.log(`Listening on ${PORT}`);
});