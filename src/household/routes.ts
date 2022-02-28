import { Router } from 'express';
import * as Controller from './controller';

export const router = Router();

router.get('/', Controller.GetAllHouseholdHandler);
router.get('/:id', Controller.GetOneHouseholdHandler);

router.post('/', Controller.CreateHouseholdHandler);
router.patch('/:id', Controller.UpdateHouseholdHandler);

router.delete('/:id', Controller.DeleteHouseholdHandler);

export default router;
