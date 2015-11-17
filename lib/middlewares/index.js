import express from 'express';

const app = express();

app.use(require('./auth/authentication'));

app.use('/users/:id', require('./users/user'));

export default app;
