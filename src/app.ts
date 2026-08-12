import express from 'express';
import { corsMiddleware } from './config/cors';
import { requestLogger } from './middleware/requestLogger';
import { notFound } from './middleware/notFound';
import { errorHandler } from './middleware/errorHandler';
import apiRouter from './routes';

const app = express();

app.use(requestLogger);
app.use(corsMiddleware);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Base Path
app.use('/api/v1/crm', apiRouter);

// Middlewares
app.use(notFound);
app.use(errorHandler);

export default app;
