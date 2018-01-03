const app = require('./app');

app.listen(app.get('port'), () => {
  console.log(`Server working on port ${app.get('port')}`);
})
