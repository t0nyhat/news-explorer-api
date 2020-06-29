const EMPTY = 'Поле "{#key}" не должно быть пустым.';
const INVALID_LINK = 'Поле {#key} не является валидным URL-адресом';
const INVALID_EMAIL = 'Поле "{#key}" не является валидным адресом';
const SOURCE_NOT_FOUND = 'Запрашиваемый ресурс не найден';
const PERMISSION_DENIED = 'Невозможно удалить ресурс. Отсутсвуют права!';
const USER_NOT_FOUND = 'Пользователь не найден';
const WRONG_MAIL_OR_PASS = 'Неправильная почта или пароль';
const NOT_UNIQUE_EMAIL = 'Пользователь с такими данными уже существует';
const SERVER_ERROR = 'На сервере произошла ошибка';
const ID_VALIDATION_ERROR = 'параметр ID должен быть длинной 24 символа';
const VALIDATION_ERROR = 'Ошибка валидации';
const FIELD_TYPE_TEXT = 'Поле "{#key}" должно быть текстовым';
const REQUIRED_FIELD = 'Отсутствует необходимое поле "{#key}"';
const PASSWORD_LENGTH_ERROR = 'Поле "{#key}" должно быть не меньше {#limit} символов';
const LENGTH_MAX_ERROR = 'Максимальная длина поля "{#key}" не должна превышать {#limit} символов';
const LENGTH_MIN_ERROR = 'Минимальная длина поля "{#key}" не должна быть меньше {#limit} символов';

module.exports = {
  INVALID_LINK,
  USER_NOT_FOUND,
  PERMISSION_DENIED,
  INVALID_EMAIL,
  NOT_UNIQUE_EMAIL,
  SERVER_ERROR,
  WRONG_MAIL_OR_PASS,
  SOURCE_NOT_FOUND,
  EMPTY,
  ID_VALIDATION_ERROR,
  VALIDATION_ERROR,
  FIELD_TYPE_TEXT,
  REQUIRED_FIELD,
  PASSWORD_LENGTH_ERROR,
  LENGTH_MAX_ERROR,
  LENGTH_MIN_ERROR,

};
