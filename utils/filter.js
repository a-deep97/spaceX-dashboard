
/*----------------require util libs---------------------*/
const fetchedData=require('../utils/fetched_data');



/*----------------functions---------------------*/
function getFiltered(mission,rocket,year){
    var launchesData=fetchedData.getLaunches();
    
    if(mission!=''&&mission!=undefined){
        launchesData=launchesData.filter(launch=>(launch.mission_name===mission||launch.mission_name.toLowerCase()===mission));
    }
    if(rocket!=''&&rocket!=undefined){
        launchesData=launchesData.filter(launch=>(launch.rocket.rocket_name===rocket||launch.rocket.rocket_name.toLowerCase()===rocket));
    }
    if(year!=''&&year!=undefined){
        launchesData=launchesData.filter(launch=>launch.launch_year===year);
    }
    return launchesData;
}



/*----------------export modules---------------------*/
module.exports={getFiltered};
