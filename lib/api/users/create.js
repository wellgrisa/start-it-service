import express from 'express';
import { create } from '../../service/users';

const router = express.Router();

router.post('/', async function (req, res, next) {
  try{
    const data = await create(req.body);
    res.status(data.code).json(data.data);
  }
  catch(e){
    next(e);
  }
});

export default router;
