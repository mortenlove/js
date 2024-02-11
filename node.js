const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Позволяет парсить данные из тела POST-запроса
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Обработка POST-запроса
app.post('/receive-post', (req, res) => {
  console.log('Received POST request:');
  console.log('Body:', req.body);
  res.send('POST request received successfully!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
