const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/links');

module.exports = mongoose;

