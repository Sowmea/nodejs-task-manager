// CRUD operations

const { MongoClient, ObjectId } = require('mongodb');

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

    // const db = client.db(databaseName);
    // db.collection('Users').findOne(
    //   {
    //     _id: new ObjectId('60f647d128bfd82ea1f90ed6')
    //   },
    //   (error, user) => {
    //     if (error) {
    //       return console.log('Unable to fetch');
    //     }
    //     console.log(user);
    //   }
    // );

    // db.collection('Users')
    //   .find({
    //     age: 1
    //   })
    //   .toArray((error, users) => {
    //     console.log(users);
    //   });

    // db.collection('Users')
    //   .find({
    //     age: 1
    //   })
    //   .count((error, count) => {
    //     console.log(count);
    //   });

    const db = client.db(databaseName);
    db.collection('Tasks')
      .find({
        completed: true
      })
      .toArray((error, task) => {
        if (error) {
          return console.log('Unable to fetch');
        }
        console.log(task);
      });
  }
);
