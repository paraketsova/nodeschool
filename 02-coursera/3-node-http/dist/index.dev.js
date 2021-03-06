"use strict";

//создаем страницу сайта Хелло Уорлд и получаем в консоль логе строку 17 и характеристику реквеста со всеми подробностями
var http = require('http');

var fs = require('fs');

var path = require('path');

var hostname = 'localhost';
var port = 3000;
var server = http.createServer(function (req, res) {
  console.log("Request for " + req.url + " by method " + req.method);

  if (req.method == 'GET') {
    // для ГЕТ запросов мы определяем файл, который будем отдавать, в зависимости от урл реквеста
    var fileUrl;

    if (req.url == '/') {
      fileUrl = '/index.html';
    } else {
      fileUrl = req.url;
    }

    var filePath = path.resolve('./public' + fileUrl); // модуль path поддерживает метод ресолв, который позволяет нам конкатинировать линк для адресной строки

    var fileExt = path.extname(filePath); //используя метод extname проверяем расширение файла и далее пишем if else блок ветвления

    if (fileExt == '.html') {
      fs.exists(filePath, function (exists) {
        //первым параметром подаём найденное расширение файла, вторым - колбек функцию, которая должна проверять на ошибки и говорить что делать, если ошибки нет
        if (!exists) {
          //пишем условия что делать если файл  не существует (проверка на ошибку)
          res.statusCode = 404;
          res.setHeader('Content-Type', 'text/html');
          res.end('<html><body><h1>Error 404: ' + fileUrl + ' not found</h1></body></html>'); //отправляем сообщение об ошибке

          return;
        } else {
          res.statusCode = 200;
          res.setHeader("Content-Type", "text/html");
          fs.createReadStream(filePath).pipe(res); // createReadStream метод читает получаемый файл и преобразует в поток байтов и с помощью pipe передаём респонс ответ
        }
      });
    } else {
      //пишем условия что делать если файл имеет расширение отличное от html (  для нас тут это проверка на ошибку)
      res.statusCode = 404;
      res.setHeader('Content-Type', 'text/html');
      res.end('<html><body><h1>Error 404: ' + fileUrl + ' file is not HTML file </h1></body></html>'); //отправляем сообщение об ошибке

      return;
    }
  } else {
    // если реквест не GET  метода, то выдадим ошибку (мы решили сейчас только на гет реагировать сайту)
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>Error 404: ' + req.method + ' not supported</h1></body></html>');
    return;
  }
  /* statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end('<html><body><h1>Hello World!<h1></body></html>'); */

});
server.listen(port, hostname, function () {
  console.log("Server running at http://".concat(hostname, ":").concat(port));
});