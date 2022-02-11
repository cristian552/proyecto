require("./config/config");

const express = require('express');//libreria
const mongoose = require('mongoose');
const cors = require('cors')

const app = express();//segundo instancia
app.use(express.json());
app.use(cors());

//configuracion global de rutas
app.use(require("./routes/index.routes"));   

//middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");//peticiones de ip
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');//se puedan hacer estos metodos
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept,Authorization");//manda parametros
    next();
});

//conexion bd
mongoose.connect('mongodb://localhost/proyecto-app', (err, res) => {
    if (err) throw err;
    console.log('Conexión a la base de datos');
});


app.listen(process.env.PORT, (err) => {
    console.log("Escuchando Peticiones Por EL Puerto "+process.env.PORT);
});