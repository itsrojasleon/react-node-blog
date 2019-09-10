const express = require('express');
const mongoose = require('mongoose');
const keys = require('./config/keys');

const app = express();

const mongoUri = keys.mongoURI;

if (!mongoUri) throw new Error('MongoURI was not supplied');

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true
});

mongoose.connection.on('connected', () =>
  console.log('Connected to mongo instance')
);
mongoose.connection.on('error', err =>
  console.log('Error connecting to mongo', err)
);

app.get('/', (req, res) => {
  res.send('Hello there');
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
