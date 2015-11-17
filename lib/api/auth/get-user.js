import express from 'express';
import { authenticate } from '../../service/auth';

const router = express.Router();

router.get('/', async function (req, res, next) {
  try{
    res.status(200).json(req.decoded);
  }
  catch(e){
    next(e);
  }
});

export default router;
