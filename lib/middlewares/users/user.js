import User from '../../models/user';

export default async (req, res, next) => {
  let user = await User.findById({ _id: req.params.id })
    .populate('details.training_group')
    .exec();

  if(!user) { return res.status(404).json({ success: false, code: 404, message: 'User not found.' }); }

  req.user = user;
  next();
};
