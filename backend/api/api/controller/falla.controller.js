const Falla = require("../models/falla.models");

let listar = (req, res) => {

    Falla.find({}).exec((err, fallaBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(fallaBD);
    })

}
           
let guardar = (req, res) => {

    let body = req.body;

    let falla = new Falla({

        Fal_Nombre: body.Fal_Nombre
        
    }); 

    falla.save((err, fallaBD)=>{
        if (err)

            return res.status(550).send(err);

        return res.json({
            ok: true,
            falla : fallaBD
        });
    });
}

module.exports = { listar,guardar };