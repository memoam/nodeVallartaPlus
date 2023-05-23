import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import helmet from 'helmet';
import { dataApp } from './config.js';

// import routes




// Settings
const app = express();
app.set('port', dataApp.port);
app.set('json spaces', 2);

// Middlewares
app.use(cors());
app.use(helmet());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.get('/ping', async (req, res) => {
  res.json(true);
});

export default app;
