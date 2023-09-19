var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DataSchema = new Schema({

    email: {
        type: String,
        required: true
    },
    message: {
        type: String,
        required: true
    }
  
});

module.exports = mongoose.model('data', DataSchema);