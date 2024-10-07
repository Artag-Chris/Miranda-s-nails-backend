import { Router } from 'express';
import { PrismaRoutes } from '../prisma/prisma.routes';

export class AppRoutes {
  static get routes(): Router {
    const router = Router();

    
   
    router.use(`/miranda/prisma`, PrismaRoutes.routes);

    return router;
  }
}

