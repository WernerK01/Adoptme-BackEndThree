import { Router } from 'express';
import mockController from '../controllers/mocks.controller.js';

const router = Router();

router.get('/mockingusers', mockController.mockingUsers);
router.get('/mockingpets', mockController.mockingPets);
router.post('/generateData', mockController.generateFakeData);
router.delete('/deleteMocks', mockController.deleteMocks);

export default router;