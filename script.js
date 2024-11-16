function initMap() {
  // Center the map at the specific location in BGC, Taguig
  const mapCenter = { lat: 14.55101347282909, lng: 121.0494586335205 }; // Your custom coordinates
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 16, // Adjust the zoom level as needed
    center: mapCenter,
  });

  // Fetch coffee shop data from JSON file
  fetch('coffeeshops.json') // Make sure this path is correct
    .then(response => response.json())
    .then(data => {
      // Loop through each coffee shop data and place a marker
      data.forEach(shop => {
        const marker = new google.maps.Marker({
          position: { lat: shop.lat, lng: shop.lng },
          map: map,
          title: shop.name,
        });

        // Create an info window for each coffee shop
        const infoWindow = new google.maps.InfoWindow({
          content: `
            <h3>${shop.name}</h3>
            <p>${shop.address}</p>
            <p>Sockets: ${shop.sockets}</p>
            <p>Wi-Fi: ${shop.wifi}</p>
          `,
        });

        // Open the info window when the marker is clicked
        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    })
    .catch(error => console.log('Error fetching data:', error));
}
