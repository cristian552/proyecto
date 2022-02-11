const Estado = require("../models/estado.models.js");

let listar = (req, res) => {

    Estado.find({}).exec((err, estadoBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(estadoBD);
    })

}
           
let guardar = (req, res) => {

    let body = req.body;

    let estado = new Estado({

        Est_Nombre: body.Est_Nombre
        
    }); 

    estado.save((err, estadoBD)=>{
        if (err)

            return res.status(550).send(err);

        return res.json({
            ok: true,
            estado : estadoBD
        });
    });
}

module.exports = { listar,guardar };