const Tipo = require("../models/tipo.models");

let listar = (req, res) => {

    Tipo.find({}).exec((err, tipoBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(tipoBD);
    })

}
           
let guardar = (req, res) => {

    let body = req.body;

    let tipo = new Tipo({

        Tip_Nombre: body.Tip_Nombre
        
    }); 

    tipo.save((err, tipoBD)=>{
        if (err)

            return res.status(550).send(err);

        return res.json({
            ok: true,
            tipo : tipoBD
        });
    });
}

module.exports = { listar,guardar };