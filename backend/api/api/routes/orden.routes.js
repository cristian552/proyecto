const express = require('express');
const orden = require('../controller/orden.controller');

//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia

app.get("/orden",   orden.listar);
app.get("/orden/:id", orden.listar_id);
app.post("/orden", orden.guardar);
app.put("/orden/:id", orden.actualizar);
app.delete("/orden/:id", orden.eliminar);

module.exports = app;