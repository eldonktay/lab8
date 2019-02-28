function initMap() {
	L.mapquest.key = 'T8INpTt0RcfYtd7KSBt1GABoO0jbJ1Sn';
	var map = L.mapquest.map('map', {
		center: [32.88, -117.236],
		layers: L.mapquest.tileLayer('map'),
		zoom: 12,
		zoomControl: false
	});

	L.marker([32.88, -117.236]).addTo(map);
}