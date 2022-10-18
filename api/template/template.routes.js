const router = require('express').Router();

// Controller
const { getTemplates } = require('./template.controller');

// Utils
const { isAuthorized } = require('../../middlewares');
const { WEB_SERVER } = require('../../lib/configs');

// Validation
const validate = require('../../lib/validation');
const { structureSuccessJSON } = require('../../lib/utils');

// GET ../v1/templates/
router.get('/', async (req, res, next) => {
  try {
    // const result = await getTemplates();

    return res.status(200).json(structureSuccessJSON('GET ../v1/templates - SUCCESS.'));
  } catch (error) {
    return next(error);
  }
});

// POST ../v1/templates/
router.post('/', async (req, res, next) => {
  try {
    // Validate
    return res.status(200).json(structureSuccessJSON('POST ../v1/templates - SUCCESS.'));
  } catch (error) {
    return next(error);
  }
});

module.exports = router;
