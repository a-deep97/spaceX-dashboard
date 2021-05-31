/*----------------requiring libs---------------------*/
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

/*----------------require util libs---------------------*/
const fetchedData=require('../utils/fetched_data');

/*----------------global variables---------------------*/
let launches;
/*----------------routes---------------------*/
router.get('/',(req,res)=>{
    launches=fetchedData.getLaunches();
    res.send('welcome to launches');
});




module.exports=router;