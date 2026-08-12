import { Router } from 'express';
import { CustomerController } from '../controllers/customer.controller';

const router = Router();
const controller = new CustomerController();

// GET /api/v1/crm/customers
router.get('/', controller.getCustomers);

// GET /api/v1/crm/customers/:id
router.get('/:id', controller.getCustomerProfile);

// GET /api/v1/crm/customers/:id/try-ons
router.get('/:id/try-ons', controller.getCustomerTryOns);

export default router;
