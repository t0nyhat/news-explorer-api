const mongoose = require('mongoose');
const validate = require('mongoose-validator');

const urlValidator = [
  validate({
    validator: 'isURL',
    message: 'Невалидный URL изображения',
  }),
];

const articleSchema = new mongoose.Schema({
  keyword: {
    type: String,
    required: true,
    minlength: 1,
  },
  title: {
    type: String,
    required: true,
    minlength: 1,
  },
  text: {
    type: String,
    required: true,
    minlength: 1,
  },
  date: {
    type: String,
    required: true,
  },
  source: {
    type: String,
    required: true,
  },
  link: {
    type: String,
    required: true,
    validate: urlValidator,
  },
  image: {
    type: String,
    required: true,
    validate: urlValidator,
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user',
    required: true,
    select: false,
  },
});

articleSchema.methods.omitPrivate = function omitPrivate() {
  const obj = this.toObject();
  delete obj.owner;
  return obj;
};
module.exports = mongoose.model('article', articleSchema);
