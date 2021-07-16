let express = require('express');
let router = express.Router();
const yahooStockPrices = require('yahoo-stock-prices');
const db = require('../config/database');


router.get('/', async (req, res) => {
  res.send("work");
  console.log(res);
  });
  

// SEARCH STOCK SYMBOL
router.get('/search/:symbol', async (req, res) => {
const data = await yahooStockPrices.getCurrentData(req.params.symbol);
res.send(data);
if(!data){
  res.send("please type in a valid symbol")
}
console.log(data);
});

// LIST OF STOCKS IN PORTFOLIO
  router.get('/portfolio', async (req, res) => {
  const result = await db.promise().query(`SELECT * FROM  portfolio`);
  res.status(200).send(result)
});

//BUY STOCKS
router.post('/buy', async (req, res ) => {
console.log(req.body);
let {symbol, quantity, price} = req.body;
console.log(symbol, quantity, price);
db.promise().query(`INSERT INTO portfolio (symbol, quantity, price) VALUES("${symbol}", ${quantity}, "${price}")`)
});
 

// SELL STOCKS
router.delete('/portfolio/:id', async (req, res ) => {
//let {symbol, quantity, price} = req.params;
//res.send( req , "working")
console.log(" it works " + req.params)
res.send("works");

//db.promise().query(` DELETE FROM portfolio WHERE symbol = '${symbol}' `)

});




module.exports = router;
