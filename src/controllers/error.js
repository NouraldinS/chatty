exports.client = (req, res) => {
  res.status(404).render('404', { layout: false });
};

exports.server = (err, req, res, next) => {
  res.status(500).render('500', { layout: false });
};
