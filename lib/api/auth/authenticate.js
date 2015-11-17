import express from 'express';
import { authenticate } from '../../service/auth';

const router = express.Router();

router.post('/', async function (req, res, next) {
  try{
    const data = await authenticate(req);
    res.status(data.code).json(data.data);
  }
  catch(e){
    next(e);
  }
});

export default router;
