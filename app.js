
/*----------------requiring libs---------------------*/
const express=require('express');
const app=express();
const http=require('http').Server(app);
const bodyParser=require('body-parser');

/*----------------require util libs---------------------*/


/*----------------require routes---------------------*/
const launchesRoute=require('./routes/launches');
const rocketsRoute=require('./routes/rockets');

/*----------------setup properties---------------------*/
require('dotenv').config();
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');


/*----------------routes---------------------*/
app.get('/',async (req,res)=>{
    
    res.redirect('/launches');
});
app.use('/launches',launchesRoute);
app.use('/rockets',rocketsRoute);


/*-----------server listening to specified port--------------------*/
const PORT=process.env.PORT||3000;
http.listen(PORT,()=>{
    console.log('server listening at : '+PORT);
});
/*----------------------------------------------------------------*/