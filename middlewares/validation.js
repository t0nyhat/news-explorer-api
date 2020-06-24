const { Joi, celebrate } = require('celebrate');
const validator = require('validator');

const urlValidate = (link) => {
  if (!validator.isURL(link)) {
    throw new Error('invalid avatar link');
  }
  return link;
};

const signupValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(8),
  }),
});

const signinValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  }),
});

const createArticleValidation = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().min(1).required(),
    title: Joi.string().min(1).required(),
    text: Joi.string().min(1).required(),
    date: Joi.string().min(1).required(),
    source: Joi.string().min(1).required(),
    link: Joi.string().uri().required().custom(urlValidate),
    image: Joi.string().uri().required().custom(urlValidate),
  }),
});

const deleteArticleValidation = celebrate({
  params: Joi.object().keys({
    id: Joi.string().alphanum().length(24),
  }),
});

module.exports = {
  signupValidation,
  signinValidation,
  deleteArticleValidation,
  createArticleValidation,

};
