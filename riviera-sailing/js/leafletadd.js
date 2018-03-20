var mymap = L.map('mapid').setView([43.549299, 7.019969], 17);

	L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw', {
		maxZoom: 18,
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
			'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
			'Imagery © <a href="http://mapbox.com">Mapbox</a>',
		id: 'mapbox.streets'
	}).addTo(mymap);

	L.marker([43.549299, 7.019969]).addTo(mymap)
		.bindPopup("<b>Riviera-Sailing</b>").openPopup();

	L.circle([43.549299, 7.019969], 50, {
		color: '#c90',
		fillColor: '#ed4',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("Riviera-Sailing");

	L.circle([43.554248, 7.020264], 50, {
		color: '#c90',
		fillColor: '#ed4',
		fillOpacity: 0.5
	}).addTo(mymap).bindPopup("Gare SNCF de Cannes");

	L.polygon([
		[43.549279, 7.019969],
		[43.549319, 7.019969],
		[43.549319, 7.019969],
		[43.549299, 7.019969]
	]).addTo(mymap).bindPopup("I am a polygon.");


	var popup = L.popup();

	function onMapClick(e) {
		popup
			.setLatLng(e.latlng)
			.setContent("Coordonnée GPS: " + e.latlng.toString())
			.openOn(mymap);
	}

	mymap.on('click', onMapClick);