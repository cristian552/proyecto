const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let tipoSchema = new Schema({

    Tip_Nombre :  { type: String,required: true },
});

module.exports = mongoose.model("Tipo", tipoSchema);