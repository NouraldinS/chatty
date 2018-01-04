const dbConnection = require('../db_connection');

exports.addUser = (email, username, password, cb) => {
  const query = {
    text: "INSERT INTO users (email, username, password, role) VALUES ($1, $2, $3, 'user');",
    values: [`${email}`, `${username}`, `${password}`],
  };
  dbConnection.query(query, (err, res) => {
    console.log(err);
    if (err) throw new Error('Error connecting to database');
    return cb(null, 'AddedSuccessfully');
  })
}
