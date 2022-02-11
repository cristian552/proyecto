const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let modeloSchema = new Schema({

    Mod_Nombre :  { type: String,required: true },
});

module.exports = mongoose.model("Modelo", modeloSchema);