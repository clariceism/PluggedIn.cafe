function initMap() {
  // Initialize the map with a zoomed-out view
  const map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 0, lng: 0 },  // Centered at the Equator, the world map center
  });

  // Check if geolocation is available
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        // Get the user's current position
        const userLocation = {
          lat: position.coords.latitude,
          lng: position.coords.longitude,
        };

        // Center the map on the user's location
        map.panTo(userLocation);

        // Gradually zoom in (from 2 to 15, over 3 seconds)
        let zoomLevel = 10;  // Start from the initial zoom level
        const targetZoom = 15;  // Final zoom level
        const zoomInterval = 10;  // Interval in milliseconds
        const zoomStep = 1;  // Zoom step (increases zoom by 1 per interval)

        const zoomIn = setInterval(() => {
          zoomLevel++;
          if (zoomLevel <= targetZoom) {
            map.setZoom(zoomLevel);  // Update the zoom level
          } else {
            clearInterval(zoomIn);  // Stop the zooming when the target is reached
          }
        }, zoomInterval);

      },
      () => {
        console.error("Geolocation failed.");
        alert("Unable to retrieve your location.");
      }
    );
  } else {
    alert("Geolocation is not supported by your browser.");
  }

  // Fetch coffee shop data from JSON file
  fetch('coffeeshops.json')
    .then(response => response.json())
    .then(data => {
      data.forEach(shop => {
        const marker = new google.maps.Marker({
          position: { lat: shop.lat, lng: shop.lng },
          map: map,
          title: shop.name,
        });

        const infoWindow = new google.maps.InfoWindow({
          content: `
            <h3>${shop.name}</h3>
            <p>No. of sockets: ${shop.sockets}</p>
            <p>Wi-Fi: ${shop.wifi}</p>
          `,
        });

        marker.addListener("click", () => {
          infoWindow.open(map, marker);
        });
      });
    })
    .catch(error => console.log('Error fetching data:', error));
}

// Accordion functionality
document.addEventListener("DOMContentLoaded", () => {
  const accordions = document.querySelectorAll('.accordion');
  accordions.forEach(accordion => {
    accordion.addEventListener('click', () => {
      const panel = accordion.nextElementSibling;
      const isOpen = panel.style.display === 'block';

      // Close all other panels
      document.querySelectorAll('.panel').forEach(p => (p.style.display = 'none'));

      // Toggle the clicked panel
      panel.style.display = isOpen ? 'none' : 'block';
    });
  });
});