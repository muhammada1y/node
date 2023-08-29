const express = require('express');
const app = express();


app.get("/",(req, res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello\n');
});

app.listen(3002, () => {
  console.log('Server is running on http://localhost:3002');
});
