$(document).ready(function(){
  const sol = {
    lat: 40.417080,
    lng: -3.703612
  };

const map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: sol
  });

  // Add restaurant markers to map
    let markers = [];
    myRestaurants.forEach(function(restaurant){
      let title = restaurant.name;
      let position = {
        lat: restaurant.location.coordinates[1],
        lng: restaurant.location.coordinates[0]
      };
      var pin = new google.maps.Marker({ position, map, title  });
      markers.push(pin);
    });


});



/* Retiramos esta parte
$(document).ready(function(){
  var ironhackBCN = {
    lat: 41.3977381,
    lng: 2.090471916
  };

  var markers = [];

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 15,
    center: ironhackBCN
  });

  var center = {
    lat: undefined,
    lng: undefined
  };


  if (navigator.geolocation) {

    navigator.geolocation.getCurrentPosition(function (position) {

      center = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      map.setCenter(center);
      getRestaurant();
    }, function () {
      console.log('Error in the geolocation service.');
    });
  } else {
    console.log('Browser does not support geolocation.');
  }

  document.getElementById('submit').addEventListener('click', function() {
    $.ajax({
      url: "http://localhost:3000/api/search?lat=" + center.lat + "&lng=" + center.lng + "&dis=" + document.getElementById('maxDistance').value,
      method: 'GET',
      success: function(restaurants) {
        console.log('restaurants', restaurants);
        deleteMarkers();
        placeRestaurants(restaurants);
      },
      error: function(error) {
        console.log('error');
      }
    });
  });

  function deleteMarkers() {
    markers.forEach(function(marker) {
      marker.setMap(null);
      marker = null;
    });
    markers = [];
  }

  function getRestaurant() {
    $.ajax({
      url: "http://localhost:3000/api",
      method: 'GET',
      success: placeRestaurants,
      error: function(error) {
        console.log('error');
      }
    });
  }

  function placeRestaurants(restaurants){
    restaurants.forEach(function(restaurant){
      var center = {
        lat: restaurant.location.coordinates[1],
        lng: restaurant.location.coordinates[0]
      };
      var pin = new google.maps.Marker({
        position: center,
        map: map,
        title: restaurant.name
      });
      markers.push(pin);
    });
  }

});
*/
