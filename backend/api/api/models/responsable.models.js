const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let responsableSchema = new Schema({

    Res_Nombre :  { type: String,required: true },
});

module.exports = mongoose.model("Responsable", responsableSchema);







   






