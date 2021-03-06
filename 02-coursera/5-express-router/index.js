const express = require('express');
const http = require('http');

const morgan = require('morgan'); // добавляем Морган
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();

app.use(morgan('dev'));
app.use(bodyParser.json()); //говорим бодиПарсеру работать с джейсон форматом и парсить сообщения.

app.all('/dishes', (req, res, next) => { // aii - говорим, что для ВСЕХ типов запросов к этой точке эта функция будет выполнятся в первую очередь
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text-plain'); //пока оправляем клиенту обычный текст, но тут должен быть JSON ответ (научимся позже)
  next();
})

app.get('/dishes', (req, res, next) => { // т.о. в этом запросе мы получим всё через призму того, что написано в get.all функции
  res.end('Will send all dishes to you!')//get smth
})

app.post('/dishes', (req, res, next) => { //с пом боди парсер мы можем извлечь из запроса данные и с их помощью генерим сообщение тут:
  res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
 });

 app.put('/dishes', (req, res, next) => {//не разрешаем редактировать блюда
  res.statusCode = 403;
  res.end('PUT operation not supported on /dishes');
});

app.delete('/dishes', (req, res, next) => { // в учеб программе мы разрешаем юзеру удалять чтото на стороне сервера. В реале - проверять уровень доступа или не разрешать
  res.end('Deleting all dishes');
});

////теперь делаем то же для отдельных блюд (с разными айди):

app.get('/dishes/:dishId', (req,res,next) => {
  res.end('Will send details of the dish: ' + req.params.dishId +' to you!');
});

app.post('/dishes/:dishId', (req, res, next) => { //не разрешаем добавлять блюда
res.statusCode = 403;
res.end('POST operation not supported on /dishes/'+ req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {// например разрешаем обновлять отдельные блюда:
res.write('Updating the dish: ' + req.params.dishId + '\n'); //получаем отредактир инфу из бодипарсера  добавляем новую строку
res.end('Will update the dish: ' + req.body.name + 
      ' with details: ' + req.body.description);
});

app.delete('/dishes/:dishId', (req, res, next) => {// допустим мы разрешим удалить отдельное блюдо
  res.end('Deleting dish: ' + req.params.dishId);
});
/////

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