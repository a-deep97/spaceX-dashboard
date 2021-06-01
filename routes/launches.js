/*----------------requiring libs---------------------*/
const express = require('express')
const bodyParser = require('body-parser')
const router = express.Router();

/*----------------setting---------------------*/
router.use(bodyParser.urlencoded({ extended: true }));

/*----------------require util libs---------------------*/
const fetchedData=require('../utils/fetched_data');
const fetchApi=require('../utils/fetch_api');
const filterData=require('../utils/filter');


/*----------------routes---------------------*/
router.get('/',async(req,res)=>{

    fetchedData.setLaunches(await fetchApi.requestLaunches());
    launches=filterData.getFiltered(req.query.mission,req.query.rocket,req.query.year);
    res.render('launches',{launches});
});

router.post('/',(req,res)=>{

    res.redirect('/launches?mission='+req.body.mission+'&rocket='+req.body.rocket+'&year='+req.body.year);
});



module.exports=router;