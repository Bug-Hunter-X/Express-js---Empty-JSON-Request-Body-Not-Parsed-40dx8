const express = require('express');
const app = express();
app.use(express.json());
app.use((req, res, next) => {
  if (Object.keys(req.body).length === 0) {
    req.body = { message: 'Empty JSON body received' };
  }
  next();
});
app.post('/data', (req, res) => {
  console.log(req.body);
  res.send('Data received');
});
app.listen(3000, () => console.log('Server listening on port 3000'));