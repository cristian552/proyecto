const Orden = require("../models/orden.models");

let listar = (req, res) => {

    Orden.find({})
    .populate('Cli_Codigo')
    .populate('Mar_Codigo')
    .populate('Mod_Codigo')
    .exec((err, data)=>{
        if(err)
            return res.status(500).json({
               
                err
            }); 

        res.json(data);
    })

}
   
let listar_id = (req, res) => {

    Orden.findById(req.params.id).exec((err, data)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(data);
    })

}

let guardar = (req, res) => {

    let body = req.body;

    let orden = new Orden({

        fecha: body.fecha,
        Cli_Codigo: body.Cli_Codigo,
        Mar_Codigo: body.Mar_Codigo,
        Mod_Codigo: body.Mod_Codigo,
        imei: body.imei,
        falla: body.falla,
        observacion: body.observacion,
        precio: body.precio

    }); 

    orden.save((err, nueva_orden)=>{
        if (err)

            return res.status(550).send(err);

        return res.json({
            ok: true,
            orden: nueva_orden
        });
    });
}

let actualizar = (req, res) =>{
    
    if(Object.keys(req.body).length===0){
        return res.status(400).send({
            message: "Los datos de la Orden no pueden estar vacios"
        });
    }
    Orden.findByIdAndUpdate(req.params.id,{

        fecha:      req.body.fecha,
        Cli_Codigo: req.body.Cli_Codigo,
        Mar_Codigo: req.body.Mar_Codigo,
        Mod_Codigo: req.body.Mod_Codigo,
        iemi:       req.body.imei,
        falla:      req.body.falla,
        observacion:req.body.observacion,
        precio:     req.body.precio

       

    },{new:true}).then(orden=>{
        if(!orden){
            return res.status(404).send({
                message: "Orden no encontrada con el id: "+req.params.id
            });
        }
        res.status(200).send(orden);

    }).catch(err => {
        return res.status(500).send({
            message:"Ocurrio un error al actualizar"+req.params.id
        });
    })    
}

let eliminar = (req, res) => {
   
    Orden.findByIdAndDelete(req.params.id).exec((err, eliminar_Orden)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(eliminar_Orden);
    })
}


module.exports = { listar,listar_id,guardar,actualizar,eliminar };