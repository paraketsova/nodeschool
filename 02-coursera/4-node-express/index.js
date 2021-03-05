const express = require('express');
const http = require('http');

const morgan = require('morgan'); // фаза 2, добавляем Морган

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));

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