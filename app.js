const express = require('express');
const debug = require('debug')('app');
const chalk = require('chalk');
const morgan = require('morgan');

const app = express();
const port = process.env.PORT || 2000;

app.use(morgan('dev'));

app.get('/', (req, res) => {
  res.send('yeaaaaa');
});

app.get('/api/courses', (req, res) => {
  res.send([1, 2, 3]);
});

app.listen(port, () => debug(`listening on port ${chalk.green(port)}`));
