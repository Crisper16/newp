document.addEventListener('DOMContentLoaded', () => {
 

  window.addEventListener('hashchange', () => loadContent(window.location.hash));
  loadContent(window.location.hash);

  // Visitor count (example, replace with real implementation)
  const visitorCount = document.getElementById('visitorCount');
  visitorCount.textContent = Math.floor(Math.random() * 10000);

  // Geolocation for ticker
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(position => {
      const { latitude, longitude } = position.coords;
      const Latitude = document.getElementById('date');
      Latitude.innerHTML =  `location: Lat ${latitude}, Long ${longitude}`;
    });
  }
});