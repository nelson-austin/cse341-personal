const { ensureGuest, ensureAuth } = require('../middleware/auth');
const path = require('path');

const router = require('express').Router();

router.use('/', require('./swagger'));
router.get('/', ensureGuest, function(req, res){ 
    res.sendFile(path.join(__dirname + '/../public/auth.html'));
})
router.use('/businesses', ensureAuth, require('./businesses'));
//router.use('/auth', require('./auth'));

module.exports = router;