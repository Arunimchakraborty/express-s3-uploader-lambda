import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import root from './routes/root'
require('dotenv').config();

const app = express();

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', root)

app.get('/', (req: Request, res: Response) => {
  res.send('GET request working');
});

module.exports = app
