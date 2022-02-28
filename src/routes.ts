import { Express } from 'express';
import householdRoutes from './household/routes';

function routes(app: Express) {
  app.use('/household', householdRoutes);
  app.use('/household2', (req, res) => {
    return res.send('household2');
  });
}

export default routes;
