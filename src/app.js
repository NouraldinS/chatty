const express = require('express');
const hbs = require('express-handlebars');
// const favicon = require('serve-favicon');
const routes = require('./controllers');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.set('port', 8000);
app.engine('hbs', hbs({
  extname: 'hbs',
  layoutsDir: path.join(__dirname, 'views', 'layouts'),
  partialsDir: path.join(__dirname, 'views', 'paritals'),
  defaultLayout: 'main'
}));

app.use(express.static(path.join(__dirname, '..', 'public')));
// app.use(favicon(path.join(__dirname, '..', 'public', 'img', '')))
// app.use(routes);

module.exports = app;
