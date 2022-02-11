const express = require('express');
const responsable = require('../controller/responsable.controller');

//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia

app.get("/responsable",   responsable.listar);
app.post("/responsable", responsable.guardar);

module.exports = app;