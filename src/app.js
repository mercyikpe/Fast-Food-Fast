import config from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';
import router from './routes/';

const app = express();
require('dotenv').config();
config.config();

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use('/api/v1', router);
app.use((req, res, next) => {
  res.status(404);
  res.send({ error: '404 Sorry the page has not yet been defined try /api/v1/' });
});

app.listen(process.env.PORT || 3000, () => {});

export default app;
