import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import root from './routes/root'
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000


// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(morgan('dev'));

app.use('/', root)

app.get('/', (req: Request, res: Response) => {
  res.send('GET request working');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
