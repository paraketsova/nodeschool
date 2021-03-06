//в этом файле мы делаем маршрутизацию с пом Экспросс Роутер 
//только для энд пойтнс: /дишес и /дишесАйДи 
const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req,res,next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    }) // это теперь групповой код для маршрутизации и нет поэтому ;  после отдельных строк
    .get((req,res,next) => {
        res.end('Will send all the dishes to you!');
    })
    .post((req, res, next) => {
        res.end('Will add the dish: ' + req.body.name + ' with details: ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /dishes');
    })
    .delete((req, res, next) => {
        res.end('Deleting all dishes');
    });

module.exports = dishRouter; // экспортирует модуль маршрутизации в индекс.дс