const Link = require('../models/Link');

//add link and return if not exist
//if link exist return it
//json messaging - add, find, err

module.exports = function (req, res) {
    if (req.body.url) {
        Link.findOne({ url: req.body.url }, (err, link) => {
            if (err){
                console.log(err)
                res.json({ status: 'err', msg: 'smth going wrong...' })
            }
            if (link) {
                res.json({ status: 'find', msg: 'Link finded', link: link });
            } else {
                var newLink = new Link(req.body);
                newLink.save((err) => {
                    if (err) return err;
                    res.json({ status: 'add', msg: 'Link added', link: newLink });
                });
            }
        });
    } else {
        res.json({ status: 'err', msg: 'Data not transfer' });
    }
}

