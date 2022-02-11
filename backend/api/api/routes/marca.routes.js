const express = require('express');
const marca = require('../controller/marca.controller');

//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia

app.get("/marca",   marca.listar);
app.get("/marca/:id",   marca.listar_id);
app.post("/marca", marca.guardar);
app.put("/marca/:id", marca.actualizar);
app.delete("/marca/:id", marca.eliminar);

module.exports = app;