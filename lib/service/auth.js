import User from '../models/user';
import jwt from 'jsonwebtoken';
import { verify } from '../utils/encrypt';

/**
 * authenticate user
 */
export async function authenticate (req) {
  // find the user

  if(!(req.body.email && req.body.password)){ return { success: false, code: 400, message: 'Data bad formatted.' }; }

  let user = await User.findOne({
    email: req.body.email
  });
  user = user.toObject();

  if (!user) {
    return { success: false, code: 401, message: 'Authentication failed. User not found.' };
  } else if (user) {

    // check if password matches
    if (!verify(req.body.password, user.password)) {
      return { success: false, code: 401, message: 'Authentication failed. Wrong password.' };
    } else {

      // if user is found and password is right
      // create a token
      delete user.password;
      let token = jwt.sign(user, req.superSecret, {
        expiresInMinutes: 1440 // expires in 24 hours
      });

      // return the information including token as JSON
      return {
        success: true,
        code: 200,
        data: {
          token: token,
          user: user
        }
      };
    }
  }
}
