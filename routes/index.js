var express = require('express'),
    router = express.Router();

router.get('/', require('./mainController'));
router.get('/:hash', require('./redirectLinkController'));
router.post('/', require('./addLinkController'));

module.exports = router;

