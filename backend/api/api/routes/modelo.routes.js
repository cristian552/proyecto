const express = require('express');
const modelo = require('../controller/modelo.controller');

//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia

app.get("/modelo",   modelo.listar);
app.get("/modelo/:id", modelo.listar_id);
app.post("/modelo", modelo.guardar);
app.put("/modelo/:id", modelo.actualizar);
app.delete("/modelo/:id", modelo.eliminar);
module.exports = app;