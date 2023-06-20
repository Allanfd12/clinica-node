var express = require('express');
var db = require('../database/connection'); // Conexão exposta
var router = express.Router();

console.log("Acessando!"); // mensagem para acesso ao banco 

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('layout', { title: 'Express' });
});

module.exports = router;
