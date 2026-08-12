import { Request, Response, NextFunction } from 'express';
import { HealthService } from '../services/health.service';

export class HealthController {
  private healthService = new HealthService();

  getRoot = (req: Request, res: Response, next: NextFunction) => {
    try {
      const status = this.healthService.getRootStatus();
      res.json(status);
    } catch (error) {
      next(error);
    }
  };

  getHealth = (req: Request, res: Response, next: NextFunction) => {
    try {
      const health = this.healthService.checkHealth();
      res.json(health);
    } catch (error) {
      next(error);
    }
  };
}
