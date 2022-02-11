const express = require('express');

const app = express();


app.use("/backend", require('./cliente.routes'));
app.use("/backend", require('./marca.routes'));
app.use("/backend", require('./modelo.routes'));
app.use("/backend", require('./responsable.routes'));
app.use("/backend", require('./falla.routes'));
app.use("/backend", require('./estado.routes'));
app.use("/backend", require('./tipo.routes'));
app.use("/backend", require('./orden.routes'));

module.exports = app;


