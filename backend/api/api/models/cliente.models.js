const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let clienteSchema = new Schema({

    Cli_Nombre :  { type: String,required: true }, 
    Cli_Documento :{type: String,required: true },
    Cli_Telefono :{ type: String,required: true },
    Cli_Email :  { type: String,required: true }

});

module.exports = mongoose.model("Cliente", clienteSchema);







   



