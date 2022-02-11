const Responsable = require("../models/responsable.models");

let listar = (req, res) => {

    Responsable.find({}).exec((err, responsableBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(responsableBD);
    })

}
           
let guardar = (req, res) => {

    let body = req.body;

    let responsable = new Responsable({

        Res_Nombre: body.Res_Nombre
        
    }); 

    responsable.save((err, responsableBD)=>{
        if (err)

            return res.status(550).send(err);

        return res.json({
            ok: true,
            responsable : responsableBD
        });
    });
}

module.exports = { listar,guardar };