/*----------------requiring libs---------------------*/
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

/*----------------setting---------------------*/
router.use(bodyParser.urlencoded({ extended: true }));

/*----------------require util libs---------------------*/
const fetchedData=require('../utils/fetched_data');

/*----------------global variables---------------------*/


/*----------------routes---------------------*/
router.get('/',(req,res)=>{

    res.send('welcome to rockets');
});

/*----------------module exports---------------------*/
module.exports=router;