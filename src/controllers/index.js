const express = require('express');

const router = express.Router();
const login = require('./login');
const signup = require('./signup');
// const logout = require('./logout');
// const room = require('./room');
const error = require('./error');

router.get('/', login.page);
router.post('/login', login.processes);
router.get('/signup', signup.get);
router.post('/create', signup.post);
router.use(error.client);
router.use(error.server);
module.exports = router;
