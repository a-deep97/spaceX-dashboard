/*----------------fetched Data---------------------*/
let launchData=[];
let rocketData=[];

/*----------------functions---------------------*/
function setLaunches(data){
    launchData=data;
}
function getLaunches(){
    return launchData;
}

function setRockets(data){
    rocketData=data;
}
function getRockets(){
    return rocketData;
}

module.exports={setLaunches,getLaunches,setRockets,getRockets};