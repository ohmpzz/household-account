import { Router } from 'express';
import * as Controller from './controller';
import * as Schema from './schema';
import { ValidateResource } from '../utils/validate-resource';

export const router = Router();

router.get('/', Controller.GetAllIncomeStatementHandler);
router.get(
  '/:id',
  ValidateResource({ params: Schema.getOneParamSchema }),
  Controller.GetOneIncomeStatementHandler
);

router.post(
  '/',
  ValidateResource({ body: Schema.createSchema }),
  Controller.CreateIncomeStatementHandler
);
router.patch(
  '/:id',
  ValidateResource({
    params: Schema.updateParamSchema,
    body: Schema.updateSchema,
  }),
  Controller.UpdateIncomeStatementHandler
);

router.delete(
  '/:id',
  ValidateResource({ params: Schema.deleteParamSchema }),
  Controller.DeleteIncomeStatementHandler
);

export default router;
