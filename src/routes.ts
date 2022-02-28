import { Express } from 'express';
import householdRoutes from './household/routes';
import incomeStatementRoutes from './income-statement/routes';

function routes(app: Express) {
  app.use('/household', householdRoutes);
  app.use('/income-statement', incomeStatementRoutes);
}

export default routes;
