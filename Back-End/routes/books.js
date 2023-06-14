const router = require("express").Router();

const bookController = require("../controllers/bookController");

router.route('/livros').post((req, res) => bookController.create(req, res));

router.route('/livros').get((req, res) => bookController.getAll(req, res));

router.route('/livros/:id').get((req, res) => bookController.get(req, res));

router
  .route('/livros/:id')
  .delete((req, res) => bookController.delete(req, res));

router.route('/livros/:id').put((req, res) => bookController.update(req, res));

module.exports = router;
