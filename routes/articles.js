const router = require('express').Router();
const { createArticle, getAllArticles, deleteArticleById } = require('../controllers/articles');
const { createArticleValidation, deleteArticleValidation } = require('../middlewares/validation');

router.post('/', createArticleValidation, createArticle);
router.get('/', getAllArticles);
router.delete('/:articleId', deleteArticleValidation, deleteArticleById);

module.exports = router;
