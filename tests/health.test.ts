import { describe, it, expect } from 'vitest';
import request from 'supertest';
import app from '../src/app';

describe('CRM Express API Foundation Tests', () => {
  it('should return service info on GET /api/v1/crm', async () => {
    const res = await request(app).get('/api/v1/crm');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.service).toBe('scaleeasy-crm-api');
    expect(res.body.version).toBe('v1');
    expect(res.body.status).toBe('running');
  });

  it('should return health check details on GET /api/v1/crm/health', async () => {
    const res = await request(app).get('/api/v1/crm/health');
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.service).toBe('scaleeasy-crm-api');
    expect(res.body.status).toBe('healthy');
    expect(typeof res.body.supabaseConfigured).toBe('boolean');
  });

  it('should trigger global 404 handler for unknown routes', async () => {
    const res = await request(app).get('/api/v1/crm/nonexistent-route');
    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('ROUTE_NOT_FOUND');
    expect(res.body.error.message).toContain('Route not found');
  });
});
