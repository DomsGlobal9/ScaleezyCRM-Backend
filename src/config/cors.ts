import cors from 'cors';
import { env } from './env';

const corsOptions: cors.CorsOptions = {
  origin: (origin, callback) => {
    // Allow requests with no origin (e.g. server-to-server or tests)
    if (!origin) {
      return callback(null, true);
    }

    // CORS origin matching (supporting comma-separated lists)
    const allowedOrigins = env.CORS_ORIGIN.split(',').map(o => o.trim());
    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    }

    // Allow localhost/127.0.0.1 origins with any port in local development
    if (env.NODE_ENV === 'development' && /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?$/.test(origin)) {
      return callback(null, true);
    }

    return callback(null, false);
  },
  credentials: true,
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  optionsSuccessStatus: 200,
};

export const corsMiddleware = cors(corsOptions);
