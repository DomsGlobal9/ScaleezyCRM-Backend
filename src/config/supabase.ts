import { createClient } from '@supabase/supabase-js';
import { env } from './env';

// Instantiate the centralized Supabase server client.
// This operates with full service role administrative access on the backend.
export const supabase = createClient(env.SUPABASE_URL, env.SUPABASE_SERVICE_ROLE_KEY, {
  auth: {
    persistSession: false,
    autoRefreshToken: false,
  },
});
