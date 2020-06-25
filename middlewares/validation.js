const { Joi, celebrate } = require('celebrate');
const validator = require('validator');
const {
  EMPTY, INVALID_LINK, INVALID_EMAIL, ID_VALIDATION_ERROR,
} = require('../constants/constants');

const urlValidate = (link) => {
  if (validator.isEmpty(link)) {
    throw new Error(EMPTY);
  }
  if (!validator.isURL(link)) {
    throw new Error(INVALID_LINK);
  }
  return link;
};

const signupValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().trim().min(2)
      .max(30)
      .label(EMPTY),
    email: Joi.string().required().email().label(INVALID_EMAIL),
    password: Joi.string().required().trim().min(8)
      .label(EMPTY),
  }),
});

const signinValidation = celebrate({
  body: Joi.object().keys({
    email: Joi.string().required().email().label(INVALID_EMAIL),
    password: Joi.string().trim().required().min(8)
      .label(EMPTY),
  }),
});

const createArticleValidation = celebrate({
  body: Joi.object().keys({
    keyword: Joi.string().required().trim().label(EMPTY),
    title: Joi.string().required().trim().label(EMPTY),
    text: Joi.string().required().trim().label(EMPTY),
    date: Joi.string().required().trim().label(EMPTY),
    source: Joi.string().required().trim().label(EMPTY),
    link: Joi.custom(urlValidate),
    image: Joi.custom(urlValidate),
  }),
});

const deleteArticleValidation = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().alphanum().length(24).label(ID_VALIDATION_ERROR),
  }),
});

module.exports = {
  signupValidation,
  signinValidation,
  deleteArticleValidation,
  createArticleValidation,

};
