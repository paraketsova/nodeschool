const express = require('express');
const http = require('http');

const morgan = require('morgan'); // добавляем Морган
const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter'); //вводим константу для добавления модуля дишРоутер
const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json()); //говорим бодиПарсеру работать с джейсон форматом и парсить сообщения.

app.use('/dishes', dishRouter);//мы говорим, что любой запрос, приходящий в точку /дишес будет обрабатываться кодом из файла дишРоутер.дс

app.use(express.static(__dirname + '/public')) //ф.2 - обязуем экспресс передавать статические файлы из заданной директории
//при этом говорим, что нужно зайти в корень проекта и там найти папку Паблик, где и лежат файлы

app.use((req, res, next) => { //here we declarate function which set up server 
  //console.log(req.headers);  - в фазе 2 это покажет Морган
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

const server = http.createServer(app);

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});