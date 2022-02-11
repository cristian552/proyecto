const express = require('express');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const Usuario = require('../models/usuario.models');



//const { auth }  = require("./../middleware/autenticacion");

var  app = express(); //segundo instancia
 
app.post('/login'), (req, res) => {

    let body = req.body;
    Usuario.findOne({Usu_Email: body.Usu_Email},(err, usuarioBD) => {

       if(err){
           return res.status(500).json({
                ok:false,
                err
           });
       } 

        if(usuarioBD.length == 0){
            return res.status(404).json({
                ok:false,
                err: "Usuario No Encontrado"
            });
        } 

        if(!bcrypt.compareSync(body.Usu_password, usuarioBD,Usu_password) ){
            return res.status(400).json({
                ok:false,
                err: "Contraseña Erronea"
            });
        }


        let token = jwt.sing({
            exp: Math.floor(Date.now() / 1000) + (60 * 60),
            data: usuarioBD
        },'llave-secreta-con-la-que-se-encripta');
        return res.status(200).json({
            ok:true,
            usuarioBD,
            token
        });    


    });

};

module.exports = app;