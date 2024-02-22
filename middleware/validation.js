const { body, validationResult } = require('express-validator')

const businessValidationRules = () => {
    return [
    body('name', 'Name is requied').not().isEmpty(),
    body('address', 'Address is requied').not().isEmpty(),
    body('email', 'Please include a valid email').isEmail().normalizeEmail({ gmail_remove_dots: true }),
    body('website', 'Website is requied').not().isEmpty(),
    body('phoneNumber', 'Phone number is requied').not().isEmpty()
    ]
}

const validate = (req, res, next) => {
    const errors = validationResult(req)
    if (errors.isEmpty()) {
      return next()
    }
    const extractedErrors = []
    errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))
  
    return res.status(422).json({
      errors: extractedErrors,
    })
  }
  
  module.exports = {
    businessValidationRules,
    validate,
  }