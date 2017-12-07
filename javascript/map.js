/*java code for responsiveness*/
(function(){

/* Nottingham Map and bradford map*/

window.initMap = function initMap() {
  var mapCanvas1 = document.getElementById("NottinghamMap");
var mapCanvas2 = document.getElementById("BradfordMap");

  var myCenter1 = new google.maps.LatLng(52.960696, -1.168905);
var myCenter2 = new google.maps.LatLng(53.787062, -1.774534);


  var mapOptions1 = {
      center: myCenter1,
      zoom: 17
  };
var mapOptions2 = {
      center: myCenter2,
      zoom: 17
  };


  var map1 = new google.maps.Map(mapCanvas1, mapOptions1);
var map2 = new google.maps.Map(mapCanvas2, mapOptions2);

  var marker1 = new google.maps.Marker({
      position: myCenter1,
             animation: google.maps.Animation.BOUNCE
  });

var marker2 = new google.maps.Marker({
      position: myCenter2,
            animation: google.maps.Animation.BOUNCE
  });


  marker1.setMap(map1);
marker2.setMap(map2);


  var infowindow1 = new google.maps.InfoWindow({
      content: "Midnight Pharmacy <br> 194 Alfreton Rd <br> Nottingham <br> NG7 3PE <br> UK"
  });
  infowindow1.open(map1, marker1);

var infowindow2 = new google.maps.InfoWindow({
      content: "Midnight Pharmacy <br> 354 Great Horton Road <br> Bradford <br> BD7 1QJ <br> UK"
  });

  infowindow2.open(map2, marker2);
}


    })();
