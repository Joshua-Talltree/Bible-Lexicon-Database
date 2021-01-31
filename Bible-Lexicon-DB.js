$(document).ready(function(){

    // AJAX request:

    $.get("http://api.openweathermap.org/data/2.5/forecast", {
        APPID: OPEN_WEATHER_APPID,
        lat:    29.423017,
        lon:   -98.48527,
        units: "imperial"
    }).done(function(data) {
        var lexObject = [];
        var dateCount = 0;
        for (var i = 0; i < 40; i++) {
            if (i % 8 === 0) {
                lexObject[dateCount] = {},
                lexObject[dateCount].tempMin = data.list[i].main.temp_min,
                lexObject[dateCount].tempMax = data.list[i].main.temp_max,
                lexObject[dateCount].description = data.list[i].weather[0].description,
                lexObject[dateCount].humidity = data.list[i].main.humidity,
                lexObject[dateCount].wind = data.list[i].wind.speed,
                lexObject[dateCount].pressure = data.list[i].main.pressure,
                lexObject[dateCount].data = data.list[i].dt_txt,
                lexObject[dateCount].icon = data.list[i].weather[0].icon
                dateCount++;
            }
        }

        // For loop to .append() elements and data to HTML:

        console.log(lexObject);
        var deckOfCards = $("#cards").children()
        for (var i = 0; i < deckOfCards.length; i++) {
            var card = deckOfCards[i];
            console.log(lexObject[i]);
            console.log(i);
            $(card).append('<div class="card-header">' + lexObject[i].data + '</div>' + '<p class="card-title" style="text-align: center;">' + lexObject[i].tempMin +  '/' + lexObject[i].tempMax + '</p>' + '<p class="card-text">' + '<img style="margin: 0 auto;" src="http://openweathermap.org/img/wn/' + lexObject[i].icon + '@2x.png"></p>' + '<p className="list-group list-group-flush">' + '<p className="list-group-item1">' + 'Description: ' + lexObject[i].description + '</p>' + '<hr>' + '<p class="list-group-item2">' + 'Humidity: ' + lexObject[i].humidity + '</p>' + '<hr>' + '<p class="list-group-item3">' + 'Wind: '+ lexObject[i].wind + '</p>' + '<hr>' + '<p class="list-group-item4">' + 'Pressure: ' + lexObject[i].pressure + '</p>' + '</p>' + '</div>');
        }

        // Search Button:

        $(".btn").click(function(e){
            e.preventDefault();
            geocode($('#geocoder').val(), mapboxToken).then(function(result){
            });
        });

    });
});