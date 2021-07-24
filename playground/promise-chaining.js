require('../src/db/mongoose');

const User = require('../src/models/user');

// User.findByIdAndUpdate('60f7eb4f46cf26479c9db878', {
//   age: 1
// })
//   .then(user => {
//     console.log(user);
//     return User.countDocuments({ age: 1 });
//   })
//   .then(result => {
//     console.log(result);
//   });

const updateAgeAndCount = async (id, age) => {
  const user = await User.findByIdAndUpdate(id, {
    age
  });

  const count = await User.countDocuments({ age });

  return count;
};

updateAgeAndCount('60f7eb4f46cf26479c9db878', 1)
  .then(count => {
    console.log(count);
  })
  .catch(error => {
    console.log(error);
  });
