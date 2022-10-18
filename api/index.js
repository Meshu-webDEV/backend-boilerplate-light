const router = require('express').Router();

// ROUTES
const template = require('./template/template.routes');

// API routes
router.use('/template', template);

module.exports = router;
