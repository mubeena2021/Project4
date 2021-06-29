const { request } = require('express');
var express = require('express');
var router = express.Router();
const yahooStockPrices = require('yahoo-stock-prices');
const db = require('../config/database');



router.get('/search/:symbol_name', async function(req, res) {
const data = await yahooStockPrices.getCurrentData(req.params.symbol_name);
res.json(data);
});






/*
router.get("/search/:symbol", async (req, res)=>{
//res.send("works!");
const result = db.query(`SELECT * FROM  portfolio`);
console.log(result);
res.send(200);

});
*/

//database.connect();

//database.connect((err) => {
 // if (err) throw err;
//});


module.exports = router;
