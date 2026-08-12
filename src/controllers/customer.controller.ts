import { Request, Response, NextFunction } from 'express';
import { CustomerService } from '../services/customer.service';

export class CustomerController {
  private customerService = new CustomerService();

  getCustomerProfile = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const profile = this.customerService.getCustomerProfile(id);
      res.json({ success: true, data: profile });
    } catch (error) {
      next(error);
    }
  };

  getCustomerTryOns = (req: Request, res: Response, next: NextFunction) => {
    try {
      const { id } = req.params;
      const tryOns = this.customerService.getCustomerTryOns(id);
      res.json({ success: true, data: tryOns });
    } catch (error) {
      next(error);
    }
  };

  getCustomers = (req: Request, res: Response, next: NextFunction) => {
    try {
      const customers = this.customerService.getCustomers();
      res.json({ success: true, data: customers });
    } catch (error) {
      next(error);
    }
  };
}
