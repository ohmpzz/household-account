import express from 'express';
import cors from 'cors';
import helmet from 'helmet';
import morgan from 'morgan';
import compression from 'compression';
import routes from './routes';

export const app = express();

app.use(helmet());
app.use(cors());

app.use(compression());
app.use(morgan('dev'));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

// routes
routes(app);

export default app;
