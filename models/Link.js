const db = require('./db');
const Schema = db.Schema;

var LinkSchema = new Schema({
    link: { type: String, required: true, unique: true, index: true },
    shortLink: { type: String },
    createdDate: { type: Date, default: Date.now },
    expiredDate: { type: Date }
});

var LinkModel = db.model('Link', LinkSchema);

module.exports = LinkModel;

