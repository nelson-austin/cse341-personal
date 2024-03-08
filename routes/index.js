const { ensureGuest, ensureAuth } = require('../middleware/auth');
const path = require('path');

const router = require('express').Router();

router.use('/', require('./swagger'));
router.get('/', function(req, res){ // ensureGuest
    res.sendFile(path.join(__dirname + '/../public/auth.html'))
})
router.use('/businesses', require('./businesses')) // ensureAuth

module.exports = router;