//Cargar pagina
	function loadPage(page){
	  $('#contenedor').load(page + ".html");
	  var el = document.getElementById("navigation");
	  el.style.display = (el.style.display == 'none') ? 'block' : 'none';
	  var quitar = document.getElementsByClassName("navbar-toggle");
	  for (var i = 0; i<quitar.length; i++){
	  	quitar[i].classList.remove("open");
	  }
}

//Google Maps
	function mostrarMapPunto(latitud,longitud){
		var myLatLng = {lat: latitud, lng: longitud};
		var map = new google.maps.Map(document.getElementById('gmaps-basic'),{
			zoom: 16,
			center: myLatLng,
			panControl: false,
	  		zoomControl: true,
	  		mapTypeControl: false,
	  		scaleControl: false,
	  		streetViewControl: true,
	  		overviewMapControl: false
		});
		var marker = new google.maps.Marker({
			position: myLatLng,
			map: map,
			title: ''
		});
	}