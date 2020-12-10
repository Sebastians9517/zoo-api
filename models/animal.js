const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const animalSchema = new Schema({
    species: {type: String,
              required: true},
    habitat: {type: String},
    priceToPet: {type: Number,
                default: 100}
}, {
    timestamps: true
})


module.exports = mongoose.model("Animal", animalSchema)
