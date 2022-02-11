const Modelo = require("../models/modelo.models");

let listar = (req, res) => {

    Modelo.find({}).exec((err, modeloBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(modeloBD);
    })

}
 
let listar_id = (req, res) => {

    Modelo.findById(req.params.id).exec((err, modeloBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(modeloBD);
    })

}

let guardar = (req, res) => {

    let body = req.body;

    let modelo = new Modelo({

        Mod_Nombre: body.Mod_Nombre
        
    }); 

    modelo.save((err, modeloBD)=>{
        if (err)

            return res.status(550).send(err);

        return res.json({
            ok: true,
            modelo : modeloBD
        });
    });
}

let actualizar = (req, res) =>{
    
    if(Object.keys(req.body).length===0){
        return res.status(400).send({
            message: "Los datos del modelo no pueden estar vacios"
        });
    }
    Modelo.findByIdAndUpdate(req.params.id,{

        Mod_Nombre:req.body. Mod_Nombre,
       

    },{new:true}).then(modelo=>{
        if(!modelo){
            return res.status(404).send({
                message: "Modelo no encontrado con el id: "+req.params.id
            });
        }
        res.status(200).send(modelo);

    }).catch(err => {
        return res.status(500).send({
            message:"Ocurrio un error al actualizar"+req.params.id
        });
    })    
}

let eliminar = (req, res) => {
   
    Modelo.findByIdAndDelete(req.params.id).exec((err, eliminar_modelo)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(eliminar_modelo);
    })
}


module.exports = { listar,listar_id,guardar,actualizar,eliminar };