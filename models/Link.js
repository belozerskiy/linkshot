const db = require('./db'),
    randomString = require('randomstring');

const Schema = db.Schema;

var LinkSchema = new Schema({
    url: { type: String, required: true, unique: true, index: true },
    hash: { type: String, unique: true, index: true },
    createdDate: { type: Date, default: Date.now },
    expiredDate: { type: Date }
});

LinkSchema.pre('save', function(next) {
	this.hash = randomString.generate({
		charset: 'alphabetic',
		length: 6
	});
	next();
});

var LinkModel = db.model('Link', LinkSchema);

module.exports = LinkModel;

