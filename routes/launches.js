/*----------------requiring libs---------------------*/
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

/*----------------setting---------------------*/
router.use(bodyParser.urlencoded({ extended: true }));

/*----------------require util libs---------------------*/
const fetchedData=require('../utils/fetched_data');
const filterData=require('../utils/filter');

/*----------------global variables---------------------*/
let launches;
/*----------------routes---------------------*/
router.get('/',(req,res)=>{

    launches=fetchedData.getLaunches();
    launches=filterData.getFiltered(req.query.mission,req.query.rocket,req.query.year);
    res.render('launches',{launches});
});

router.post('/',(req,res)=>{

    res.redirect('/launches?mission='+req.body.mission+'&rocket='+req.body.rocket+'&year='+req.body.year);
});



module.exports=router;