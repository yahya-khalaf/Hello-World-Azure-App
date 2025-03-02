const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Yahya Saying Hello there from TeleMedPilot Lab!');
});

app.listen(port, () => {
  console.log(`App running at http://localhost:${port}`);
});
