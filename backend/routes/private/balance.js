 const express = require('express');
 var balanceRouter=express.Router();
 const ccxt=require("ccxt");
 balanceRouter.get('/',async(req,res)=>{
    try {
        const exchange = new ccxt.ftx({
          headers: {
            "FTX-SUBACCOUNT": process.env.API_SUB_ACCOUNT,
          },
          apiKey: process.env.API_KEY,
          secret: process.env.API_SECRET_KEY,
        });

        const balance = await exchange.fetchBalance();
        console.log(balance);
        res.json(balance);
    } catch (error) {
        console.log(error);
        res.status(503).json({msg:"something error occurred"})
    }

 })
module.exports=balanceRouter