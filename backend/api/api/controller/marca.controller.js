const Marca = require("../models/marca.models");

let listar = (req, res) => {

    Marca.find({}).exec((err, marcaBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(marcaBD);
    })

}
let listar_id = (req, res) => {

    Marca.findById(req.params.id).exec((err, marcaBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(marcaBD);
    })

}
           
let guardar = (req, res) => {

    let body = req.body;

    let marca = new Marca({

        Mar_Nombre: body.Mar_Nombre
        
    }); 

    marca.save((err, marcaBD)=>{
        if (err)

            return res.status(550).send(err);

        return res.json({
            ok: true,
            marca : marcaBD
        });
    });
}

let actualizar = (req, res) =>{
    
    if(Object.keys(req.body).length===0){
        return res.status(400).send({
            message: "Los datos del la marca no pueden estar vacios"
        });
    }
    Marca.findByIdAndUpdate(req.params.id,{

        Mar_Nombre: req.body.Mar_Nombre,
       

    },{new:true}).then(marca=>{
        if(!marca){
            return res.status(404).send({
                message: "Marca no encontrado con el id: "+req.params.id
            });
        }
        res.status(200).send(marca);

    }).catch(err => {
        return res.status(500).send({
            message:"Ocurrio un error al actualizar"+req.params.id
        });
    })    
}

let eliminar = (req, res) => {
   
    Marca.findByIdAndDelete(req.params.id).exec((err, eliminar_marca)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(eliminar_marca);
    })
}


module.exports = { listar,listar_id,guardar,actualizar,eliminar };