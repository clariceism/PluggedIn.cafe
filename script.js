function initMap() {
  const mapCenter = { lat: 14.551900427662131, lng: 121.0516070500038 }; // Geographical center of the Earth
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 17, // Zoom level
    center: mapCenter,
  });

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
