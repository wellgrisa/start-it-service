var passwordHash = require('password-hash');

export function generate(password){
  return passwordHash.generate(password);
}

export function verify(password, hashedPassowrd){
  return passwordHash.verify(password, hashedPassowrd);
}


