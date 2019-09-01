const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 2000;
const courses = [
  {
    id: 1,
    name: 'course 1'
  },
  {
    id: 2,
    name: 'course 2'
  },
  {
    id: 3,
    name: 'course 3'
  }
];

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('yeaaaaa');
});

app.get('/api/courses', (req, res) => {
  res.json(courses);
});

app.get('/api/courses/:id', (req, res) => {
  const course = courses.find(course => course.id === parseInt(req.params.id));
  if (course) return res.json(course);
  res.status(404).json({ error: 'no book by that id' });
});

app.post('/api/courses', (req, res) => {
  const course = {};
  course.id = courses.length + 1;
  course.name = req.body.name;
  debug(course);
  res.status(201).json(course);
});

app.listen(port, () => debug(`listening on port ${chalk.green(port)}`));
