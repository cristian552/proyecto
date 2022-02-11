const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let estadoSchema = new Schema({

    Est_Nombre :  { type: Boolean,required: true },
});

module.exports = mongoose.model("Estado", estadoSchema);
