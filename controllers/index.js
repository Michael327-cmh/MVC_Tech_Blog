const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./viewRoutes');
const postsRoutes = require('./postsRoutes');


router.use('/', homeRoutes);
router.use('/posts', postsRoutes);
router.use('/api', apiRoutes);

module.exports = router;