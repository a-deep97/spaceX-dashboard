/*----------------fetched Data---------------------*/
let launchData=[];


/*----------------functions---------------------*/
function setLaunches(data){
    launchData=data;
}
function getLaunches(){
    return launchData;
}


module.exports={setLaunches,getLaunches};