const express = require('express');
/* eslint new-cap: off */
const router = express.Router();

const controller = require('../controllers/<%= controllerName %>');

router.get('/', controller.index);
router.post('/', controller.create);
router.delete('/:id', controller.delete);
router.post('/:id', controller.update);
router.get('/:id', controller.get);

module.exports = router;
