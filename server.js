import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import mongoose from 'mongoose';
import config from './config';


let app = express();

const port = process.env.PORT || 8000; // used to create, sign, and verify tokens
console.log(port);
mongoose.connect(config.database); // connect to database

// use body parser so we can get info from POST and/or URL parameters
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// use morgan to log requests to the console
app.use(morgan('dev'));

app.use(function(req, res, next){
  req.superSecret = process.env.SECRET || config.secret;

  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, X-Access-Token");

  next();
});

app.use('/v1', require('./lib/api'));

app.listen(port);
console.log('Magic happens at http://localhost:' + port);
