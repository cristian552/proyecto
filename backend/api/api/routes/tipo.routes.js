const express = require('express');
const tipo = require('../controller/tipo.controller.js');

//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia

app.get("/tipo",   tipo.listar);
app.post("/tipo", tipo.guardar);

module.exports = app;