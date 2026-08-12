import app from './app';
import { env } from './config/env';

const server = app.listen(env.PORT, () => {
  console.log(`==================================================`);
  console.log(`ScaleEasy CRM API Microservice Started`);
  console.log(`Environment: ${env.NODE_ENV}`);
  console.log(`Port: ${env.PORT}`);
  console.log(`Allowed CORS Origin: ${env.CORS_ORIGIN}`);
  console.log(`Supabase Setup Status: Configured`);
  console.log(`API URL: http://localhost:${env.PORT}/api/v1/crm`);
  console.log(`==================================================`);
});

process.on('SIGTERM', () => {
  console.log('SIGTERM signal received: closing HTTP server');
  server.close(() => {
    console.log('HTTP server closed');
  });
});
