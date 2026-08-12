import dotenv from 'dotenv';
import { z } from 'zod';

dotenv.config();

// In test environments, provide mock fallbacks if not defined so tests don't crash
if (process.env.NODE_ENV === 'test') {
  process.env.SUPABASE_URL = process.env.SUPABASE_URL || 'https://mock-supabase.supabase.co';
  process.env.SUPABASE_SERVICE_ROLE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || 'mock-service-role-key-for-tests-only';
}

const envSchema = z.object({
  PORT: z.string().transform(val => parseInt(val, 10)).default('4001'),
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
  SUPABASE_URL: z.string().url({ message: 'SUPABASE_URL must be a valid URL' }),
  SUPABASE_SERVICE_ROLE_KEY: z.string().min(1, { message: 'SUPABASE_SERVICE_ROLE_KEY is required' }),
});

let parsedEnv: z.infer<typeof envSchema>;

try {
  parsedEnv = envSchema.parse(process.env);
} catch (error) {
  if (error instanceof z.ZodError) {
    const missingKeys = error.issues.map(issue => `${issue.path.join('.')}: ${issue.message}`).join(', ');
    console.error('CRITICAL: Environment variable validation failed!');
    console.error(missingKeys);
  } else {
    console.error('CRITICAL: Unknown error during env validation', error);
  }
  process.exit(1);
}

export const env = parsedEnv;
