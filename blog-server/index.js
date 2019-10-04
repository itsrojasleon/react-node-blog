require('./models/User');
require('./models/Blog');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const keys = require('./config/keys');
const authRouter = require('./routes/authRoutes');
const blogRouter = require('./routes/blogRoutes');
const requireAuth = require('./middlewares/requireAuth');

const app = express();

app.use(bodyParser.json());
app.use(cors());
app.use(authRouter);
app.use(blogRouter);

const mongoUri = keys.MONGO_URI;

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

app.get('/', requireAuth, (req, res, next) => {
  const { email, username } = req.user;
  res.send({ email, username });
  next();
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));
