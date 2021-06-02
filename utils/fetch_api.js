
/*----------------requiring libs---------------------*/
const fetch=require('node-fetch');


/*----------------fetch functions---------------------*/
async function requestLaunches(){
    let result;
    var requestOptions={
        method: "GET",
        redirect: "follow"       
    };
    await fetch("https://api.spacexdata.com/v3/launches",requestOptions)
        .then(res=>res.json())
        .then(data=>result=data)
        .catch(error=>console.log(error));
    
    return result;
}

async function requestRockets(){
    let result;
    var requestOptions = {
        method: 'GET',
        redirect: 'follow'
    };
    await fetch("https://api.spacexdata.com/v3/rockets",requestOptions)
        .then(res=>res.json())
        .then(data=>result=data)
        .catch(error=>console.log(error));
    return result;
}


module.exports={requestLaunches,requestRockets};