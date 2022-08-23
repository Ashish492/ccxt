var express = require("express");
const path = require("path");

var marketRouter = express.Router();
const ccxt = require("ccxt");

marketRouter.get("/", async function (req, res) {
  let exchange = new ccxt.ftx();
  let price = await exchange.fetchTickers(exchange.symbols);
  let priceArray = Object.values(price);
  console.log(priceArray[0]);
  let result = priceArray.map((market) => ({
    name: market.info.name,
    price: market.info.last,
    percentage: market.percentage,
    vwap: market?.vwap ? market.vwap : "null",
  }));
  res.json(result);
});

module.exports = marketRouter;
