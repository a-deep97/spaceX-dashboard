
/*----------------requiring libs---------------------*/
const express=require('express');
const app=express();
const http=require('http').Server(app);
const bodyParser=require('body-parser');

/*----------------setup properties---------------------*/
app.use(bodyParser.urlencoded({extended:true}));
app.use(express.static('public'));
app.set('view engine','ejs');




/*----------------routes---------------------*/
app.get('/',(req,res)=>{

});




/*-----------server listening to specified port--------------------*/
const PORT=process.env.PORT||3000;
http.listen(PORT,()=>{
    console.log('server listening at : '+PORT);
});
/*----------------------------------------------------------------*/