import { Router  } from 'express';
import { People } from '../controllers/people.controller';

const router = Router();

// People retrieval end-point
router.get('/people', People.retrieve);

// Person creation end-point
router.post('/people', People.create);

// Person update end-point
router.patch('/people/:id', People.update);

// Person deletion end-point
router.delete('/people/:id', People.delete);

export default router;
