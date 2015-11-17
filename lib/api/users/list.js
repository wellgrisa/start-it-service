import express from 'express';
import { list } from '../../service/users';

const router = express.Router();

router.get('/', async function (req, res, next) {
  try{
    const data = await list();
    res.status(data.code).json(data.data);
  }
  catch(e){
    next(e);
  }
});

export default router;
