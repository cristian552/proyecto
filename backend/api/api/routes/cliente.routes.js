const express = require('express');
const cliente = require('../controller/cliente.controller');

//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia

app.get("/cliente",   cliente.listar);
app.get("/cliente/:id",   cliente.listar_id);
app.post("/cliente", cliente.guardar);
app.put("/cliente/:id", cliente.actualizar);
app.delete("/cliente/:id", cliente.eliminar);



module.exports = app;







