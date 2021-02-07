const headers = {
    'Authorization': "Bearer " + DROPBOX_API_KEY,
    'Content-Type': "application/json",
    'X-Requested-With': "acr.browser.lightning",
    'credentials': "include"
};
const params = JSON.stringify({"title": "file request title", "destination": "/file request destination"});

fetch('https://cors-anywhere.herokuapp.com/https://api.dropboxapi.com/2/file_requests/create', {
    method: 'GET',
    headers: headers,
})
    .then(res => res.json())
    .then(data => console.log('access data =>', data))
    .catch(err => console.error(err));




// fetch('https://www.dropbox.com/oauth2/authorize?client_id=DROPBOX_API_KEY&redirect_uri=MY_REDIRECT_URI&response_type=code', {
//     method: 'GET',
//     code: DROPBOX_API_KEY,
//     grant_type: 'authorization_code',
//     redirect_uri: `${`http://localhost:63342/Bible-Lexicon-Database/Bible-Lexicon-DB.html?_ijt=i2sufs4o83f3cjlpqp1o7gj2rp`}${window.location.pathname}`,
//     headers: {
//         'Content-Type': "no-cors"
//     },
//     CLIENT_ID: 'DROPBOX_API_KEY'
// })
//     .then(res => res.json())
//     .then(data => console.log('access data =>', data))
//     .catch(err => console.log('access err =>',err));



// fetch(`https://www.dropbox.com/oauth2/authorize?client_id=${DROPBOX_API_KEY}&response_type=code`)
//     .then(response => console.log(response))
//     .catch(error => console.error(error))

// function geocode(search, token) {
//     var baseUrl = 'https://api.mapbox.com';
//     var endPoint = '/geocoding/v5/mapbox.places/';
//     return fetch(baseUrl + endPoint + encodeURIComponent(search) + '.json' + "?" + 'access_token=' + token)
//         .then(function(res) {
//             return res.json();
//             // to get all the data from the request, comment out the following three lines...
//         }).then(function(data) {
//             return data.features[0].center;
//         });
// }
// geocoder.on("result", onSearchResult);
//
//
// $(document).ready(function(){
//
//     // AJAX request:
//
//     $.get("http://api.openweathermap.org/data/2.5/forecast", {
//         APPID: OPEN_WEATHER_APPID,
//         lat:    29.423017,
//         lon:   -98.48527,
//         units: "imperial"
//     }).done(function(data) {
//         var lexObject = [];
//         var dateCount = 0;
//         for (var i = 0; i < 40; i++) {
//             if (i % 8 === 0) {
//                 lexObject[dateCount] = {},
//                 lexObject[dateCount].tempMin = data.list[i].main.temp_min,
//                 lexObject[dateCount].tempMax = data.list[i].main.temp_max,
//                 lexObject[dateCount].description = data.list[i].weather[0].description,
//                 lexObject[dateCount].humidity = data.list[i].main.humidity,
//                 lexObject[dateCount].wind = data.list[i].wind.speed,
//                 lexObject[dateCount].pressure = data.list[i].main.pressure,
//                 lexObject[dateCount].data = data.list[i].dt_txt,
//                 lexObject[dateCount].icon = data.list[i].weather[0].icon
//                 dateCount++;
//             }
//         }
//
//         // For loop to .append() elements and data to HTML:
//
//         console.log(lexObject);
//         var deckOfCards = $("#cards").children()
//         for (var i = 0; i < deckOfCards.length; i++) {
//             var card = deckOfCards[i];
//             console.log(lexObject[i]);
//             console.log(i);
//             $(card).append('<div class="card-header">' + lexObject[i].data + '</div>' + '<p class="card-title" style="text-align: center;">' + lexObject[i].tempMin +  '/' + lexObject[i].tempMax + '</p>' + '<p class="card-text">' + '<img style="margin: 0 auto;" src="http://openweathermap.org/img/wn/' + lexObject[i].icon + '@2x.png"></p>' + '<p className="list-group list-group-flush">' + '<p className="list-group-item1">' + 'Description: ' + lexObject[i].description + '</p>' + '<hr>' + '<p class="list-group-item2">' + 'Humidity: ' + lexObject[i].humidity + '</p>' + '<hr>' + '<p class="list-group-item3">' + 'Wind: '+ lexObject[i].wind + '</p>' + '<hr>' + '<p class="list-group-item4">' + 'Pressure: ' + lexObject[i].pressure + '</p>' + '</p>' + '</div>');
//         }
//
//         // Search Button:
//
//         $(".btn").click(function(e){
//             e.preventDefault();
//             geocode($('#geocoder').val(), mapboxToken).then(function(result){
//             });
//         });
//     });
// });
//
