const mongoose = require('mongoose');

const urlSchema = new mongoose.Schema({
    urlCode: String,
    longUrl: String,
    shortUrl: String
    //custom_name: String
});

module.exports = mongoose.model('Url',urlSchema);