const hashing = require('../views/helpers/hash');
const queries = require('../database/queries');

const get = (req, res) => {
  res.render('signup', { style: 'signup', title: 'sginup', script: 'signup' });
};

const post = (req, res) => {
  const body = JSON.parse(req.body);
  console.log(body);
  const [email, username, password] = [
    body.email,
    body.username,
    body.password
  ];
  hashing.hashPassword(password, (err, hash) => {
    if (err) {
      res.send('Error Hashing');
    } else {
      queries.addUser(email, username, password, console.log);
      res.send('UserAddedSuccessfully');
    }
  });
};

module.exports = {
  get,
  post
}
