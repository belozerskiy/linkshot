const Link = require('../models/Link');

module.exports = (req, res) => {
	if(req.params.hash){
		Link.findOne({ hash: req.params.hash }, function(err, link){
			if(!err) {
				if(link) res.redirect(link.url);
				else res.redirect('/');
			}else{
				res.json({ status: 'err', msg: err });
			}
		});
	}else{
		res.redirect('/');
	}
}

