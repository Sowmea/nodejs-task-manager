const express = require('express');
require('./db/mongoose');
const userRouter = require('./routers/user');
const taskRouter = require('./routers/task');

const app = express();
const port = process.env.PORT || 3000;

const multer = require('multer');

app.use(express.json());
app.use(userRouter);
app.use(taskRouter);

const upload = multer({
  dest: 'images',
  limits: {
    fileSize: 1000000
  },
  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(doc|docx|pdf)$/)) {
      // if (!file.originalname.endsWith('.pdf')) {
      return cb(new Error('Please upload a pdf'));
    }
    cb(undefined, true);
    // cb(new Error('Please upload an image'));
    // cb(undefined, true);
    // cb(undefined, false);
  }
});

const errorMiddleware = (req, res, next) => {
  throw new Error('From my middleware');
};

app.post(
  '/upload',
  upload.single('upload'),
  (req, res) => {
    res.send();
  },
  (error, req, res, next) => {
    res.status(400).send({ error: error.message });
  }
);

app.listen(port, () => {
  console.log('Server is up on port ' + port);
});
