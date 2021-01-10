import { Router } from 'express';
import saySomething from '../controllers/controllers';

const router = Router();

router.get('/say-something', saySomething);

export default router;
