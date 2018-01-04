const page = (req, res) => {
  res.render('login', { layout: false });
}
const processes = (req, res) => {
  console.log(req.body);
  res.send('hello');
}


module.exports = {
  processes,
  page
};
