import express from 'express';
import { update } from '../../service/users';

const router = express.Router();

router.put('/:id/profile', async function (req, res, next) {
  try{
    const data = await update(req);
    res.status(data.code).json(data.data);
  }
  catch(e){
    next(e);
  }
});

export default router;
