const Article = require('../models/article');
const { NotFoundError, ForbidenError } = require('../errors/index');
const { SOURCE_NOT_FOUND, PERMISSION_DENIED } = require('../constants/constants');

const createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;
  const owner = req.user._id;
  Article.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .then((article) => res.status(201).send({ article: article.omitPrivate() }))
    .catch(next);
};

const getAllArticles = (req, res, next) => {
  const owner = req.user._id;
  Article.find({ owner })
    .then((articles) => res.send({ articles }))
    .catch(next);
};

const deleteArticleById = (req, res, next) => {
  const { articleId } = req.params;
  const owner = req.user._id;
  Article.findOne({ _id: articleId })
    .orFail(() => {
      throw new NotFoundError(SOURCE_NOT_FOUND);
    })
    .select('+owner')
    .then((articleDocument) => {
      if (!articleDocument.owner.equals(owner)) {
        throw new ForbidenError(PERMISSION_DENIED);
      }
      Article.deleteOne(articleDocument)
        .then(() => res.send({ message: 'ОК' }))
        .catch(next);
    })
    .catch(next);
};

module.exports = { createArticle, getAllArticles, deleteArticleById };
