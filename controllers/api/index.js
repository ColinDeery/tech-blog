const router = require('express').Router();
const postRoutes = require('./postRoutes');
const userRoutes = require('./userRoutes');

// .api/user
 router.use('/users', userRoutes);

// /api/post
router.use('/posts', postRoutes);

module.exports = router;