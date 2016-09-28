var express = require('express'),
    router = express.Router();

router.get('/', require('./mainController'));
router.post('/', require('./addLinkController'));

module.exports = router;

