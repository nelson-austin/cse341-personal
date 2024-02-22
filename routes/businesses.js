const router = require('express').Router();

const businessesController = require('../controllers');
const { businessValidationRules, validate } = require('../middleware/validation.js');

router.get('/', businessesController.getAll);

router.get('/:id', businessesController.getSingle);

router.post('/', businessValidationRules(), validate, businessesController.createBusiness);

router.put('/:id', businessValidationRules(), validate, businessesController.updateBusiness);

router.delete('/:id', businessesController.deleteBusiness);

module.exports = router;