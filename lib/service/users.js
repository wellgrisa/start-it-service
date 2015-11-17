import User from '../models/user';
import { generate } from '../utils/encrypt';

/**
 * details of existing user
 */
export async function details (req) {
  return {
    success: true,
    code: 200,
    data: {
      user: req.user
    }
  };
}

/**
 * list existing user
 */
export async function list () {
  let users = await User.find({});

  if(!users) { return { success: false, code: 404, message: 'No users. '}; }

  return {
    success: true,
    code: 200,
    data: {
      users: users
    }
  };
}

/**
 * create a new user
 */
export async function create (data) {

  data.password = generate(data.password);

  let user = new User(data);
  await user.save();
  console.log('User saved successfully');

  user = user.toObject();
  delete user.password;

  return {
    success: true,
    code: 201,
    data: {
      user: user
    }
  };
}

/**
 * update an existing user
 */
export async function update (req) {

  updateProperties(req.user, req.body);

  req.user.password = generate(req.user.password);

  await req.user.save();

  console.log('User updated successfully');

  return {
    success: true,
    code: 200,
    data: {
      user: req.user
    }
  };
}

/**
 * remove an existing user
 */
export async function remove (req) {

  await req.user.remove();

  return {
    code: 200
  };
}

function updateProperties(model, data){
  for(let p in data){
    model[p] = data[p];
  }
}
