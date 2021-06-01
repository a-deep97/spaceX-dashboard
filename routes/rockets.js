/*----------------requiring libs---------------------*/
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

/*----------------setting---------------------*/
router.use(bodyParser.urlencoded({ extended: true }));

/*----------------require util libs---------------------*/
const fetchedData=require('../utils/fetched_data');
const fetchApi=require('../utils/fetch_api');

/*----------------global variables---------------------*/


/*----------------routes---------------------*/
router.get('/',async (req,res)=>{

    fetchedData.setRockets( await fetchApi.requestRockets());
    const rockets=fetchedData.getRockets();
    res.render('rockets',{rockets});
});

/*----------------module exports---------------------*/
module.exports=router;