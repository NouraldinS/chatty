const path = require('path');
const hashing = require('../hashing');
const queries = require('../db/queries');
const get = (req, res) => {
  res.sendFile(path.join(__dirname, '..', '..', 'public', 'signup.html'));
};

const post = (req, res) => {
const email = req.body.eamil;
const username = req.body.username;
const password = req.body.password;
console.log('there!', username, password);
hashing.hashPassword(password, (err, hash) => {
  if (err) {
    res.send('Error Hashing');
  } else {
    queries.adduser(username, hash, (err, ok) => {
      if (err) {
        res.send(err);
      } else {
        res.send('Added Successfully!');
      }
    });
  }
});
};

module.exports = {
  get,
  post,
}
