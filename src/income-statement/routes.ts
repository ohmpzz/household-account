import { Router } from 'express';
import * as Controller from './controller';
import * as Schema from './schema';
import { ReqBodyValidator } from 'utils/req-body.validator';

export const router = Router();

router.get('/', Controller.GetAllIncomeStatementHandler);
router.get('/:id', Controller.GetOneIncomeStatementHandler);

router.post(
  '/',
  ReqBodyValidator(Schema.createSchema),
  Controller.CreateIncomeStatementHandler
);
router.patch(
  '/:id',
  ReqBodyValidator(Schema.updateSchema),
  Controller.UpdateIncomeStatementHandler
);

router.delete('/:id', Controller.DeleteIncomeStatementHandler);

export default router;
