import { env } from '../config/env';

export class HealthService {
  checkHealth() {
    // Dynamic config checks
    const isSupabaseConfigured = 
      !!env.SUPABASE_URL && 
      !!env.SUPABASE_SERVICE_ROLE_KEY &&
      env.SUPABASE_URL !== 'https://mock-supabase.supabase.co' &&
      !env.SUPABASE_URL.includes('placeholder-project');

    return {
      success: true,
      service: 'scaleeasy-crm-api',
      status: 'healthy',
      supabaseConfigured: isSupabaseConfigured,
    };
  }

  getRootStatus() {
    return {
      success: true,
      service: 'scaleeasy-crm-api',
      version: 'v1',
      status: 'running',
    };
  }
}
