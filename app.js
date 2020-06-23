const express = require('express');
// Слушаем 3000 порт
const { PORT = 3000 } = process.env;

const app = express();

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`App listening on port ${PORT}`);
});
