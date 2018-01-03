const express = require('express');

const router = express.Router();
const login = require('./login');
// const logout = require('./logout');
// const error404 = require('./404.js');
// const error500 = require('./500');
// const room = require('./room');

router.get('/', login.page);





router.post('/login', login.process);
