$(document).ready(function(){


    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=f26968c5-a8fc-4739-b9c5-d842f45b2253" ,
        method: "GET",
    }).then(function(response){
        console.log(response);
        for (var i = 0; i < response.length; i++) {
            
            var thisStation = "BUCKHEAD STATION";
            var stationName = response[i].STATION;
            var trainDirection = response[i].DIRECTION;
            var waitTime = response[i].WAITING_TIME;

            if (stationName === thisStation && trainDirection === "N") {
                console.log(response[i]);
                console.log("Next northbound train in approx " + waitTime);
            } else if (stationName === thisStation && trainDirection === "W") {
                console.log(response[i]);
                console.log("Next southbound train in approx " + waitTime);                

            } else if (stationName === thisStation && trainDirection === "W") {
                console.log(response[i]);
                console.log("Next westbound train in approx " + waitTime);
            } else if (stationName === thisStation && trainDirection === "E") {
                console.log(response[i]);
                console.log("Next eastbound train in approx " + waitTime);
            }
        }
    }).fail(function(){
        console.log("Problem detected")
    })




});

// "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=f26968c5-a8fc-4739-b9c5-d842f45b2253"


// http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus