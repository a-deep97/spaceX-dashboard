
/*----------------requiring libs---------------------*/
const fetch=require('node-fetch');


/*----------------fetch functions---------------------*/
async function requestLaunches(){
    let result;
    var requestOptions={
        method: "GET",
        redirect: "follow"       
    };
    await fetch(process.env.API_LAUNCHES_LINK,requestOptions)
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
    await fetch(process.env.API_ROCKETS_LINK,requestOptions)
        .then(res=>res.json())
        .then(data=>result=data)
        .catch(error=>console.log(error));
    return result;
}


module.exports={requestLaunches,requestRockets};