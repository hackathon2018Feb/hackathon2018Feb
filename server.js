const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.json());

let memory = { threshold: 0 };

const thresholdLimit = 100;

app.post('/alert', (req, res) => {
  console.log('req: ', req.body);
  const { threshold } = req.body;
  memory.threshold += threshold;

  if (memory.threshold > thresholdLimit) {
    // do something ~ 
  }

  res.send('send');
});

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`listening on port ${port}!`);
});
