const router = require('express').Router();

const apiRoutes = require('./api');
const statsRoutes = require('./stats-routes');
const exerciseRoutes = require('./exercise-routes');

router.use('/stats', statsRoutes);
router.use('/exercise', exerciseRoutes);
router.use('/api', apiRoutes);

  module.exports = router;