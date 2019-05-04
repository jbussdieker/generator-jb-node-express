const express = require('express');
/* eslint new-cap: off */
const router = express.Router();
const config = require('config');
const routes = config.get('routes');

for (route in routes) {
  router.use(`/${route}`, require(`./${route}`));
}

module.exports = router;
