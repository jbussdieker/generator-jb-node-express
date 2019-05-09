const express = require('express');
/* eslint new-cap: off */
const router = express.Router();
const config = require('config');

if (config.has('routes')) {
  const routes = config.get('routes');

  Object.keys(routes).forEach((route) => {
    router.use(`/${route}`, require(`./${route}`));
  })
}

module.exports = router;
