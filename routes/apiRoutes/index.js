const router = require('express').Router();
const zookeepers = require('../../lib/zookeepers');
const animalRoutes = require('../apiRoutes/animalRoutes');

router.use(animalRoutes);
router.use(require('./zookeeperRoutes'));

module.exports = router;