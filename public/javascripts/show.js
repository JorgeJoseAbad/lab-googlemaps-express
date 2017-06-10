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
	let title = myRestaurant.name;
	let position = {
		lat: myRestaurant.location.coordinates[1],
		lng: myRestaurant.location.coordinates[0]
	};
	var pin = new google.maps.Marker({ position, map, title  });
	map.setCenter(position);

});

/*
	var titleTag = document.getElementById('restaurantName');
	var url = 'http://localhost:3000/api/' + titleTag.dataset.id;

	$.ajax({
    url: url,
    method: 'GET',
    success: printMapAndMarker,
    error: function(error) {
      console.log('error');
    }
  });

  function printMapAndMarker(restaurant){
  	var position = {
  	  lat: restaurant.location.coordinates[1],
  	  lng: restaurant.location.coordinates[0]
  	};

  	var map = new google.maps.Map(document.getElementById('map'), {
  	  zoom: 15,
  	  center: position
  	});

  	var marker = new google.maps.Marker({
      position: position,
      map: map,
      title: restaurant.name
    });
  }*/
