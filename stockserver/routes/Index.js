let express = require('express');
let router = express.Router();




/* GET home page. */
router.get('/', function(req, res, next) {
  res.send("you are on the index page");
});

module.exports = router;
