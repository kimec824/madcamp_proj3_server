const mongoose = require('mongoose');

const jejuSchema = new mongoose.Schema({
    content: String,
    contentname : String,
    address : String,
    latitude : String,
    longitude : String,
    contentid : String,
    score : String
    
});

module.exports = mongoose.model('Jeju',jejuSchema);