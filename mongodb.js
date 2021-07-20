// CRUD operations

const mongodb = require('mongodb');
const MongoClient = mongodb.MongoClient;

const connectionURL = 'mongodb://127.0.0.1:27017';
const databaseName = 'task-manager';

MongoClient.connect(
  connectionURL,
  {
    useNewUrlParser: true
  },
  (error, client) => {
    if (error) {
      return console.log('Unable to connect to database');
    }

    const db = client.db(databaseName);
    db.collection('Users').insertMany(
      [
        {
          name: 'Nikith',
          age: 1
        },
        {
          name: 'Praveen',
          age: 30
        }
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert user');
        }

        console.log(result);
      }
    );

    db.collection('Tasks').insertMany(
      [
        {
          description: 'Clean the house',
          completed: true
        },
        {
          description: 'Renew license',
          completed: false
        },
        {
          description: 'Office deskc',
          completed: true
        }
      ],
      (error, result) => {
        if (error) {
          return console.log('Unable to insert task');
        }

        console.log(result);
      }
    );
  }
);
