
const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let ordenSchema = new Schema({
    
    fecha:       {type: Date},
    Cli_Codigo:  { type: Schema.Types.ObjectId,ref : "Cliente"},
    Mar_Codigo:  { type: Schema.Types.ObjectId,ref : "Marca"},
    Mod_Codigo:  { type: Schema.Types.ObjectId,ref : "Modelo"},
    imei:        { type: String,required: true },
    falla:       { type: String,required: true },
    observacion: { type: String,required: true},
    precio:      { type: String,required: true}


});

module.exports = mongoose.model("Orden", ordenSchema);
