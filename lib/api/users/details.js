import express from 'express';
import { details } from '../../service/users';

const router = express.Router();

router.get('/:id', async function (req, res, next) {
  try{
    const data = await details(req);
    res.status(data.code).json(data.data);
  }
  catch(e){
    next(e);
  }
});

export default router;
