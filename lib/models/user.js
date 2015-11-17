const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// set up a mongoose model and pass it using module.exports
export default mongoose.model('User', new Schema({
  name: { type: String, require: true},
  surname: { type: String, require: true},
  email: { type: String, index: { unique: true }, require: true},
  password: { type: String, require: true},
  created_date: { type: Date, default: Date.now },
  role: { type: String, default: 'user' },
}));
