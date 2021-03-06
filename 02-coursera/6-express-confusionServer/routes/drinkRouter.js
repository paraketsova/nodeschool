//в этом файле мы делаем маршрутизацию с пом Экспросс Роутер 
//только для энд пойтнс: /drink 
const express = require('express');
const bodyParser = require('body-parser');

const drinkRouter = express.Router();

drinkRouter.use(bodyParser.json());

drinkRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }) // это теперь групповой код для маршрутизации и нет поэтому ;  после отдельных строк
    .get((req,res,next) => {
        res.end('Will send all the drinks to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the drink: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /drinks');
    })
    .delete((req, res, next) => {
        res.end('Deleting all drinks');
    });

module.exports = drinkRouter; // экспортирует модуль маршрутизации в индекс.дс