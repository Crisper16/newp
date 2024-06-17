document.addEventListener("DOMContentLoaded", function() {
  // Increment visitor count
  function incrementVisitorCount() {
      let visitorCount = localStorage.getItem('visitorCount');
      if (!visitorCount) {
          visitorCount = 0;
      } else {
          visitorCount = parseInt(visitorCount);
      }
      visitorCount += 1;
      localStorage.setItem('visitorCount', visitorCount);
      return visitorCount;
  }

  // Display visitor count
  function displayVisitorCount() {
      const visitorCount = localStorage.getItem('visitorCount') || 0;
      document.getElementById('visitor-count').textContent = `${visitorCount}`;
      document.getElementById('display').textContent=`${visitorCount}`;
  }

  // Initialize visitor count display
  displayVisitorCount();
  
  // Increment and update visitor count on page load
  const newCount = incrementVisitorCount();
  document.getElementById('visitor-count').textContent = `${newCount}visitors`;
  document.getElementById('display').textContent=`${newCount} `;
});

// JavaScript to update the date and time
function updateDateTime() {
  const now = new Date();
  const formattedDate = now.toLocaleDateString();
  const formattedTime = now.toLocaleTimeString();
  document.querySelector('.ticker span').textContent = `Today is ${formattedDate}, ${formattedTime}`;
  // Geolocation to get current location
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    const ticker = document.querySelector('.ticker span');
    ticker.textContent += `, Location: Lat ${latitude}, Long ${longitude}`;
  });
}
}

// Update the date and time every second
setInterval(updateDateTime, 1000);
updateDateTime(); // Initial update



// Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {
  scrollFunction();
};

// Visitor count (example, replace with real implementation)
const visitorCount = document.getElementById('visitorCount');
visitorCount.textContent = Math.floor(Math.random() * 400);

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document smoothly
function topFunction() {
  // Scroll to the top with smooth behavior
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

/*gallery routes*/


function sectionToDisplay(){
  document.getElementsByClassName('hide1').style.display='block';
}