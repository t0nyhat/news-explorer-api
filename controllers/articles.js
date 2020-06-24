const Article = require('../models/article');

const createArticle = (req, res, next) => {
  const {
    keyword, title, text, date, source, link, image,
  } = req.body;
  const owner = '5ef2cab5d1dacf6ac43e5764';

  Article.create({
    keyword, title, text, date, source, link, image, owner,
  })
    .then((article) => res.send({ data: article }))
    .catch(next);
};

module.exports = { createArticle };
