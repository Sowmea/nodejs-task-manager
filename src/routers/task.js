const express = require('express');

const router = new express.Router();
const Task = require('../models/task');

router.post('/tasks', async (req, res) => {
  const task = new Task(req.body);
  try {
    await task.save();
    res.status(201).send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/tasks', async (req, res) => {
  try {
    const task = await Task.find({});
    res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.get('/tasks/:id', async (req, res) => {
  const _id = req.params.id;

  try {
    const task = await Task.findById(_id);

    if (!task) {
      return res.status(404).send();
    }
    res.send(task);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.patch('/tasks/:id', async (req, res) => {
  const allowedUpdates = ['description', 'completed'];
  const updates = Object.keys(req.body);

  const isValidOperation = updates.every(update =>
    allowedUpdates.includes(update)
  );
  console.log(isValidOperation);

  if (!isValidOperation) {
    return res.status(400).send({ Error: 'Invalid updates' });
  }

  try {
    const task = await Task.findById(req.params.id);

    if (!task) {
      res.status(404).send('Task not found');
    }

    updates.forEach(update => (task[update] = req.body[update]));

    await task.save();

    res.send(task);

    // const task = await Task.findByIdAndUpdate(req.params.id, req.body, {
    //   new: true,
    //   runValidators: true
    // });

    // if (!task) {
    //   return res.status(404).send('Task not found');
    // }
    // return res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

router.delete('/tasks/:id', async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
      return res.status(404).send({ Error: 'Task not found' });
    }
    return res.send(task);
  } catch (error) {
    res.status(400).send(error);
  }
});

module.exports = router;
