var apiKey = '8ddd48929a37115dc77fee6865b3699e';

//current date decloration
var today = moment();

//var cityName = 'Chicago';
var units = 'imperial';

//Search button
var searchButtonClick = document.getElementById("searchButton");

//Current Date weather information
var currentCity = document.getElementById("currentCity");
var currentTemp = document.getElementById("currentTemp");
var currentWind = document.getElementById("currentWind");
var currentHumidity = document.getElementById("currentHumidity");
var currentUv = document.getElementById("currentUv");

//First of 5 day weather
var oneDate = document.getElementById("oneDate")
var oneTemp = document.getElementById("oneTemp");
var oneWind = document.getElementById("oneWind");
var oneHumid = document.getElementById("oneHumid")

//Second of 5 day weather
var twoDate = document.getElementById("twoDate")
var twoTemp = document.getElementById("twoTemp");
var twoWind = document.getElementById("twoWind");
var twoHumid = document.getElementById("twoHumid")

//Third of 5 day weather
var threeDate = document.getElementById("threeDate")
var threeTemp = document.getElementById("threeTemp");
var threeWind = document.getElementById("threeWind");
var threeHumid = document.getElementById("threeHumid")

//Fourth of 5 day weather
var fourDate = document.getElementById("fourDate")
var fourTemp = document.getElementById("fourTemp");
var fourWind = document.getElementById("fourWind");
var fourHumid = document.getElementById("fourHumid")

//Fifth of 5 day weather
var fiveDate = document.getElementById("fiveDate")
var fiveTemp = document.getElementById("fiveTemp");
var fiveWind = document.getElementById("fiveWind");
var fiveHumid = document.getElementById("fiveHumid")

//Return current weather
function getCurrentWeather(cityName, units){

    var url = 'https://api.openweathermap.org/data/2.5/weather?q='+cityName+'&units='+units+'&appid=8ddd48929a37115dc77fee6865b3699e';

    fetch(url)
    .then(response => {
        return response.json();
    })

    .then(weather => {
        console.log("Whole thing ", weather);
        //console.log("Current Temp " + weather.main.temp);

       var date = moment().format('MM/DD/YYYY');

        currentCity.innerHTML = weather.name+" ("+date+")";
        currentTemp.innerHTML = "Temp: "+ weather.main.temp+"°F";
        currentWind.innerHTML = "Wind Speed: "+weather.wind.speed+" MPH";
        currentHumidity.innerHTML = "Humidity: "+weather.main.humidity+"%";
        
        var lat = weather.coord.lat;
        var lon = weather.coord.lon;

        getAdvancedWeather(lat, lon);
        save(weather.name);
    })
 }

 function getAdvancedWeather(lat, lon){

    var url = 'https://api.openweathermap.org/data/2.5/onecall?lat='+lat+'&lon='+lon+'&units=imperial&exclude=minutelt,hourly&appid=8ddd48929a37115dc77fee6865b3699e';

    fetch(url)
    .then(response => {
        return response.json();
    })

    .then(weather => {
        console.log("Whole thing (advanced) ", weather);
        //console.log("Current Temp " + weather.main.temp);

        currentUv.innerHTML = "UV Index: "+weather.current.uvi;
        
        //1 of 5 day forcast
        oneDate.innerHTML= moment().add(1, 'days').format('MM/DD/YYYY');
        oneTemp.innerHTML= "Temp: "+weather.daily[1].temp.day+"°F";
        oneWind.innerHTML= "Wind: "+weather.daily[1].wind_speed+" MPH";
        oneHumid.innerHTML="Humidity: "+weather.daily[1].humidity+" %";

        //2 of 5 day forcast
        twoDate.innerHTML= moment().add(2, 'days').format('MM/DD/YYYY');
        twoTemp.innerHTML= "Temp: "+weather.daily[2].temp.day+"°F";
        twoWind.innerHTML= "Wind: "+weather.daily[2].wind_speed+" MPH";
        twoHumid.innerHTML="Humidity: "+weather.daily[2].humidity+" %";

        //3 of 5 day forcast
        threeDate.innerHTML= moment().add(3, 'days').format('MM/DD/YYYY');
        threeTemp.innerHTML= "Temp: "+weather.daily[3].temp.day+"°F";
        threeWind.innerHTML= "Wind: "+weather.daily[3].wind_speed+" MPH";
        threeHumid.innerHTML="Humidity: "+weather.daily[3].humidity+" %";

        //4 of 5 day forcast
        fourDate.innerHTML= moment().add(4, 'days').format('MM/DD/YYYY');
        fourTemp.innerHTML= "Temp: "+weather.daily[4].temp.day+"°F";
        fourWind.innerHTML= "Wind: "+weather.daily[4].wind_speed+" MPH";
        fourHumid.innerHTML="Humidity: "+weather.daily[4].humidity+" %";

        //5 of 5 day forcast
        fiveDate.innerHTML= moment().add(5, 'days').format('MM/DD/YYYY');
        fiveTemp.innerHTML= "Temp: "+weather.daily[5].temp.day+"°F";
        fiveWind.innerHTML= "Wind: "+weather.daily[5].wind_speed+" MPH";
        fiveHumid.innerHTML="Humidity: "+weather.daily[5].humidity+" %";

    })
 }

//Activate current weather search when search button is clicked
searchButtonClick.addEventListener("click", function(){

    let city = document.getElementById("cityInput").value;

    if(city){
        getCurrentWeather(city, units);
    }
    else{
        alert("Please enter a valid city")
    }

});

function save(data){



}

function loadSavedCities(){


}