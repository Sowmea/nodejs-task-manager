require('../src/db/mongoose');

const Task = require('../src/models/task');

// Task.findByIdAndDelete('60f7e8d122194912042ab38c')
//   .then(task => {
//     console.log('Removed task ' + task);
//     return Task.countDocuments({ completed: false });
//   })
//   .then(result => {
//     console.log(result);
//   })
//   .catch(error => {
//     console.log(error);
//   });

const countIncompleteTask = async (id, completed) => {
  const task = await Task.findByIdAndDelete(id);
  const count = await Task.countDocuments({ completed });
  return count;
};

countIncompleteTask('60f7e8d122194912042ab38c', false)
  .then(count => {
    console.log(count);
  })
  .catch(error => {
    console.log(error);
  });
