$(document).ready(function(){


    $.ajax({
        url: "https://cors-anywhere.herokuapp.com/http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus" ,
        method: "GET",
    }).then(function(response){
        console.log(response[0]);
        // callGiphy(response[0]);

    }).fail(function(){
        console.log("Problem detected")
    })


});

// "http://developer.itsmarta.com/RealtimeTrain/RestServiceNextTrain/GetRealtimeArrivals?apikey=f26968c5-a8fc-4739-b9c5-d842f45b2253"


// http://developer.itsmarta.com/BRDRestService/RestBusRealTimeService/GetAllBus