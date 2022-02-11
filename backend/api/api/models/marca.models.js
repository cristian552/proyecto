const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let marcaSchema = new Schema({

    Mar_Nombre :  { type: String,required: true },
});

module.exports = mongoose.model("Marca", marcaSchema);