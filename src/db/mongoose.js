const mongoose = require('mongoose');

const databaseName = 'task-manager-api';
const connectionURL = process.env.MONGODB_URL + databaseName;

mongoose.connect(connectionURL, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useFindAndModify: false
});
