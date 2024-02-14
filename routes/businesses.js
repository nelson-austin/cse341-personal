const router = require('express').Router();

const businessesController = require('../controllers');

router.post('/', businessesController.createBusiness);

router.get('/', businessesController.getAll);

router.get('/:id', businessesController.getSingle);

router.put('/:id', businessesController.updateBusiness);

router.delete('/:id', businessesController.deleteBusiness);

module.exports = router;