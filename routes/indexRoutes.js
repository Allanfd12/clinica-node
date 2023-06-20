import express from 'express';
import MedicoController from '../controllers/medicoController.js';

var db = require('../database/connection'); 

const router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
  });

module.exports = router;
