# news-explorer-api v.1.2.1

## Бэкенд к дипломному проекту Яндекс.Практикум.

### Реализация API для сервиса по поиску новостей.

#### Доступен на домене [http://api.news.tonyhat.site/](http://api.news.tonyhat.site/)
#### Таккже оступен по SSL [https://api.news.tonyhat.site/](https://api.news.tonyhat.site/)

  
### Функционал:
```
POST /signup - регистрация нового пользователя
 формат:
{
	"name": "Anton",
	"email": "ya3@mail.ru",
	"password": "12345678"
}
в ответ придет объект пользователя
```
```
POST /signin - авторизация
 формат:
{
	"email": "ya3@mail.ru",
	"password": "12345678"
}
 в ответ придет cookie s jwt
```
```
GET /articles - возвращает список сохраненных статей пользователя
```
```
GET /users/me - возвращает информация о текщем пользователе
```
```
POST /cards - создает карточку на запрос формата 
{
    "keyword": "Ключевые слова",
    "title": "Заголовок статьи.",
    "text": "Текст статьи.",
    "date": "Дата",
    "source": "Источник статьи.",
    "link": "https://example.com/",
    "image": "https://example.com/"
}
```
```
DELETE /articles/id - удаляет статью по id
```


## Установка

Для установки необходимо наличие Node.js, MongoDB и npm

Сохраните проект у себя на компьютере:
```
git clone https://github.com/t0nyhat/back_12.git
```

В корне проекта через консоль/терминал запустите команду:
``` 
npm install
```

#### Доступные команды:  
Запуск локального сервера с хот релоудом:  
```
npm run dev
```  
Запуск продакшн сервера:  
```
npm run start
```
#### Используемы технологии:
- Node JS
- JavaScript
- Express JS
- MongoDB
