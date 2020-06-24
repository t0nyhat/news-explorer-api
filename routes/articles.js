const router = require('express').Router();
const { createArticle, getAllArticles, deleteArticleById } = require('../controllers/articles');

router.post('/', createArticle);
router.get('/', getAllArticles);
router.delete('/:articleId', deleteArticleById);

module.exports = router;
