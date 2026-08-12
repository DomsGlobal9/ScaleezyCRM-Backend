import { Router } from 'express';
import healthRoutes from './health.routes';
import customerRoutes from './customer.routes';
import { HealthController } from '../controllers/health.controller';

const router = Router();
const controller = new HealthController();

// GET /api/v1/crm
router.get('/', controller.getRoot);

// Mount health routes under /api/v1/crm
router.use('/', healthRoutes);

// Mount customer routes under /api/v1/crm/customers
router.use('/customers', customerRoutes);

export default router;
