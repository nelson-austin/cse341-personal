const router = require('express').Router();

const businessesController = require('../controllers');

router.get('/', businessesController.getAll);

router.get('/:id', businessesController.getSingle);

router.post('/', businessesController.createBusiness);

router.put('/:id', businessesController.updateBusiness);

router.delete('/:id', businessesController.deleteBusiness);

module.exports = router;