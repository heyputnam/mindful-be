const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const medSchema = new Schema({
        user: String,
        name: String,
        dose: String,
        dateFill: Date,
        morning: String,
        afternoon: String,
        night: String
    
    }, {timestamps:true})


module.exports = mongoose.model('Med', medSchema)