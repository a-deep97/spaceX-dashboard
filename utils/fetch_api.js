
/*----------------requiring libs---------------------*/
const fetch=require('node-fetch');

var requestOptions={
    method: "GET",
    redirect: "follow"       
};

async function requestLaunches(){
    let result;
    await fetch(process.env.API_LAUNCHES_LINK,requestOptions)
        .then(res=>res.json())
        .then(data=>result=data)
        .catch(error=>console.log(error));
    
    return result;
}

module.exports={requestLaunches};