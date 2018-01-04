const bcrypt = require('bcryptjs');

const hashPassword = (password, cb) => {
  bcrypt.genSalt(10, (errSalt, salt) => {
    if (errSalt) console.log(errSalt);0
    bcrypt.hash(password, salt, (errHash, hash) => {
      console.log(salt);
      if (errHash) {
        console.log(errHash);
        cb('error hashing');
      } else {
        cb(null, hash);
      }
    });
  });
};

const comparePassword = (password, hash, cb) => {

};

module.exports = {
  hashPassword,
  comparePassword
}
