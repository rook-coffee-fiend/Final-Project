<script>
    import { onMount } from 'svelte';
    //from: https://leafletjs.com/examples/quick-start/
    import L from 'leaflet';
    import 'leaflet/dist/leaflet.css';

    let map;
    
    
    onMount(() => {
    // Create map instance
    map = L.map('map').setView([42.313, -71.114], 15); // Set initial center and zoom

    // Add OpenStreetMap tile layer
    L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=t9bkmd7qurzKztaOujrN', {
        maxZoom: 18,
        minZoom: 15,
        attribution: '&copy; <a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
    }).addTo(map);

// Add a marker
    //L.marker([42.3132, 71.1141]).addTo(map)
      //.bindPopup('A simple marker.')
      //.openPopup();

     // Recalculate map size whenever it is resized
     window.addEventListener('resize', () => map.invalidateSize());

  });
</script>


<div id="map">
  
</div>



<style>
  #map {
    height: 500px; /* Set the height of the map */
    width: 50vw; /* Set the width of the map */
  }
</style>