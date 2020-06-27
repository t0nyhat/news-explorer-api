const { Joi, celebrate } = require('celebrate');
const validator = require('validator');
const {
  FIELD_TYPE_TEXT, REQUIRED_FIELD, PASSWORD_LENGTH_ERROR,
  LENGTH_MIN_ERROR, LENGTH_MAX_ERROR,
  EMPTY, INVALID_LINK, INVALID_EMAIL, ID_VALIDATION_ERROR,
} = require('../constants/constants');

const urlValidate = (link) => {
  if (!validator.isURL(link)) {
    throw new Error();
  }
  return link;
};

const signupValidation = celebrate({
  body: Joi.object().keys({
    name: Joi.string().required().min(2).max(30)
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'string.min': LENGTH_MIN_ERROR,
        'string.max': LENGTH_MAX_ERROR,
        'any.required': REQUIRED_FIELD,
      }),
    email: Joi.string().required().email().messages({
      'string.base': FIELD_TYPE_TEXT,
      'string.empty': EMPTY,
      'any.required': REQUIRED_FIELD,
      'string.email': INVALID_EMAIL,
    }),
    password: Joi.string().required().min(8)
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'string.min': PASSWORD_LENGTH_ERROR,
        'any.required': REQUIRED_FIELD,
      }),
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
    keyword: Joi.string().required()
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'any.required': REQUIRED_FIELD,
      }),
    title: Joi.string().required()
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'any.required': REQUIRED_FIELD,
      }),
    text: Joi.string().required()
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'any.required': REQUIRED_FIELD,
      }),
    date: Joi.string().required()
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'any.required': REQUIRED_FIELD,
      }),
    source: Joi.string().required()
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'any.required': REQUIRED_FIELD,
      }),
    link: Joi.string().required().custom(urlValidate)
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'any.required': REQUIRED_FIELD,
        'any.custom': INVALID_LINK,
      }),
    image: Joi.string().required().custom(urlValidate)
      .messages({
        'string.base': FIELD_TYPE_TEXT,
        'string.empty': EMPTY,
        'any.required': REQUIRED_FIELD,
        'any.custom': INVALID_LINK,
      }),
  }),
});

const deleteArticleValidation = celebrate({
  params: Joi.object().keys({
    articleId: Joi.string().alphanum().length(24)
      .messages({
        'string.length': `{#key} ${ID_VALIDATION_ERROR}`,
      }),
  }),
});

module.exports = {
  signupValidation,
  signinValidation,
  deleteArticleValidation,
  createArticleValidation,

};
