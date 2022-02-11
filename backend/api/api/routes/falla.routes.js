const express = require('express');
const falla = require('../controller/falla.controller');

//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia

app.get("/falla",   falla.listar);
app.post("/falla", falla.guardar);

module.exports = app;