import express from 'express';
import { remove } from '../../service/users';

const router = express.Router();

router.delete('/:id', async function (req, res, next) {
  try{
    const data = await remove(req);
    res.status(data.code).json();
  }
  catch(e){
    next(e);
  }
});

export default router;
