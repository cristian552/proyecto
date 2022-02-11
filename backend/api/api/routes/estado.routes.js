const express = require('express');
const estado = require('../controller/estado.controller');

//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia

app.get("/estado",   estado.listar);
app.post("/estado", estado.guardar);

module.exports = app;