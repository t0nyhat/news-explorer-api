const Article = require('../models/article');
const NotFoundError = require('../errors/not-found-err');
const ForbidenError = require('../errors/forbiden-err');

const createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;
  const owner = '5ef30481b10d1776e9fb2558';
  Article.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .then((article) => res.send({ article: article.omitPrivate() }))
    .catch(next);
};

const getAllArticles = (req, res, next) => {
  const owner = '5ef30481b10d1776e9fb2558';
  Article.find({ owner })
    .then((articles) => res.send({ articles }))
    .catch(next);
};

const deleteArticleById = (req, res, next) => {
  const { articleId } = req.params;
  const owner = '5ef2cab5d1dacf6ac43e5764';
  Article.findOne({ _id: articleId })
    .orFail(() => {
      throw new NotFoundError(`Карточки с id : ${articleId} не существует!`);
    })
    .then((cardDocument) => {
      if (!cardDocument.owner.equals(owner)) {
        throw new ForbidenError('У вас нет прав для удаления карточки');
      }
      Article.findByIdAndRemove(articleId)
        .then((article) => res.send({ article }))
        .catch(next);
    })
    .catch(next);
};

module.exports = { createArticle, getAllArticles, deleteArticleById };
