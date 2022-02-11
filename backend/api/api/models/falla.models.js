const mongoose = require('mongoose');

let Schema = mongoose.Schema;

let fallaSchema = new Schema({

    Fal_Nombre :  { type: String,required: true },
});

module.exports = mongoose.model("Falla", fallaSchema);
