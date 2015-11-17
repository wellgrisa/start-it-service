import express from 'express';

const app = express();

app.use('/auth', require('./auth/authenticate'));

app.use('/users', require('./users/create'));

app.use(require('../middlewares'));

app.use('/auth', require('./auth/get-user'));

app.use('/users', require('./users/list'));
app.use('/users', require('./users/update'));
app.use('/users', require('./users/update-profile'));
app.use('/users', require('./users/delete'));
app.use('/users', require('./users/details'));

export default app;
