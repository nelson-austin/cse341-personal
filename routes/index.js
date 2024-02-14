const router = require('express').Router();

router.use('/', require('./swagger'));
router.use('/businesses', require('./businesses'))

module.exports = router;