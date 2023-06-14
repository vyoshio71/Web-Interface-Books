const router = require('express').Router()

// Book router
const booksRouter = require('./books');

router.use('/', booksRouter);

module.exports = router;