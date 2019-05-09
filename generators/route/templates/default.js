const express = require('express');
/* eslint new-cap: off */
const router = express.Router();

const controller = require('../controllers/<%= controllerName %>');

router.get('/', controller.index);

module.exports = router;
