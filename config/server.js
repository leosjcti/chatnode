//Importar o modulo do framework express
var express = require('express');

//Importar o Consign
var consign = require('consign');

//Importar o body-parser
var bodyParser = require('body-parser');

//Importar o express-validator
var expressValidator = require('express-validator');

//Iniciar objeto do express
var app = express();

//Configurando o express
//Setar as variaveis view engine e views do express
app.set('view engine', 'ejs');
app.set('views', './app/views');

//Configurar middleware express.static
app.use(express.static('./app/public'));

//Configurar middleware body-parser
//Quando houver uma requisição via post conseguimos pegar os dados via json
//a patir da propriedade body do request
app.use(bodyParser.urlencoded({extended: true}));

//Configurar o express-validator
app.use(expressValidator());

//Configurar o consign que fará o autoload dos modulos, controllers e rotas
//e vao ser inseridos no objeto app
consign()
    .include('app/routes')
    .then('app/models')
    .then('app/controllers')
    .into(app)

//Exportar o objeto app
module.exports = app;
