const Cliente = require("../models/cliente.models");

//FUNCIONES

let listar = (req, res) => {

    Cliente.find({}).exec((err, clienteBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(clienteBD);
    })

}

let listar_id = (req, res) => {

    Cliente.findById(req.params.id).exec((err, clienteBD)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(clienteBD);
    })

}
           
let guardar = (req, res) => {

    let body = req.body;

    let cliente = new Cliente({

        Cli_Nombre: body.Cli_Nombre,
        Cli_Documento: body.Cli_Documento,
        Cli_Telefono : body.Cli_Telefono,
        Cli_Email : body.Cli_Email
        
    }); 

    cliente.save((err, clienteBD)=>{
        if (err)

            return res.status(550).send(err);

        return res.json({
            ok: true,
             cliente : clienteBD
        });
    });
}

let actualizar = (req, res) =>{
    
    if(Object.keys(req.body).length===0){
        return res.status(400).send({
            message: "Los datos del cliente no pueden estar vacios"
        });
    }
    Cliente.findByIdAndUpdate(req.params.id,{

        Cli_Nombre:req.body. Cli_Nombre,
        Cli_Documento:req.body.Cli_Documento,
        Cli_Telefono:req.body.Cli_Telefono,
        Cli_Email:req.body.Cli_Email,

    },{new:true}).then(cliente=>{
        if(!cliente){
            return res.status(404).send({
                message: "Cliente no encontrado con el id: "+req.params.id
            });
        }
        res.status(200).send(cliente);

    }).catch(err => {
        return res.status(500).send({
            message:"Ocurrio un error al actualizar"+req.params.id
        });
    })    
}

let eliminar = (req, res) => {
   
    Cliente.findByIdAndDelete(req.params.id).exec((err, eliminar_cliente)=>{
        if(err)
            return res.json({
                ok: false,
                err
            }); 

        res.json(eliminar_cliente);
    })
}

module.exports = { listar,listar_id,guardar,actualizar,eliminar };


