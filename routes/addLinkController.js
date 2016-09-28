const Link = require('../models/Link');

//add link and return if not exist
//if link exist return it
//json messaging - add, find, err

module.exports = function (req, res) {
    if (req.body.link) {
        Link.findOne({ link: req.body.link }, (err, link) => {
            if (err) return err;
            if (link) {
                res.json({ status: 'find', msg: 'Link finded', link: link });
            } else {
                let newLink = new Link(req.body);
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

