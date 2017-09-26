let express = require('express');
let router = express.Router();


router.get('/', function (req, res) {
    return res.render('view');
});
router.get('/', function (req, res) {
    return res.render('terms');
});

module.exports = router;