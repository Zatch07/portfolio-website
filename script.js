// script.js

// Force the page to scroll to the top on load
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

// Stars
// Change this value to adjust the number of stars
const numberOfStars = 100;

// Function to create a star
function createStar() {
  const star = document.createElement('div');
  star.innerText = '★';
  star.className = 'star';
  document.querySelector('.starry-background').appendChild(star);
  positionStar(star);
  animateStar(star);
}

// Function to randomly position a star
function positionStar(star) {
  const x = Math.random() * window.innerWidth;
  const y = Math.random() * window.innerHeight;
  star.style.left = `${x}px`;
  star.style.top = `${y}px`;
}

// Function to animate a star
function animateStar(star) {
  const duration = Math.random() * 5 + 3; // Change this range for different speeds
  const delay = Math.random() * 5; // Randomize delay
  const size = Math.random() * 10 + 5; // Randomize size between 5px and 15px
  star.style.fontSize = `${size}px`;
  star.style.animationDuration = `${duration}s`;
  star.style.animationDelay = `${delay}s`;
  star.style.animationTimingFunction = 'ease-in-out';
  setInterval(() => {
    positionStar(star);
  }, duration * 1000); // Move the star at the end of its duration
}

// Create the stars
for (let i = 0; i < numberOfStars; i++) {
  createStar();
}

// Find the clouds
var cloudIds = [
  "cloud1", "cloud2", "cloud3", "cloud4", "cloud5", "cloud6", "cloud7",
  "cloud8", "cloud9", "cloud10", "cloud11", "cloud12", "cloud13",
  "cloud14", "cloud15", "cloud16", "cloud17", "cloud18"
];
var clouds = cloudIds.map((id) => document.getElementById(id)).filter((cloud) => cloud !== null);

// Function to set random initial positions for clouds without overlapping
function setRandomPositions() {
  var positions = [];
  clouds.forEach(function (cloud, index) {
    var randomTop, randomLeft, isOverlap;
    do {
      isOverlap = false;
      randomTop = Math.random() * 100; // Random top position between 0% and 100%
      randomLeft = Math.random() * window.innerWidth; // Random left position within the viewport width
      // Check for overlap with existing positions
      for (var pos of positions) {
        if (Math.abs(randomTop - pos.top) < 15 && Math.abs(randomLeft - pos.left) < 150) {
          // Adjust overlap distance as needed
          isOverlap = true;
          break;
        }
      }
    } while (isOverlap);
    positions.push({ top: randomTop, left: randomLeft });
    cloud.style.top = randomTop + "vh";
    cloud.style.left = randomLeft + "px";
    // Set opacity based on cloud index
    var maxOpacity = 1.0;
    if (index < 6) {
      cloud.style.opacity = maxOpacity / 4; // Clouds 1-6 at 1/4 of max opacity
    } else if (index < 11) {
      cloud.style.opacity = maxOpacity / 3; // Clouds 7-11 at 1/3 of max opacity
    } else {
      cloud.style.opacity = maxOpacity / 2; // Clouds 12-15 at 1/2 of max opacity
    }
  });
}

// Function to update cloud positions
function updateCloudPosition(cloud, speed, baseLeft) {
  var scrollTop = window.scrollY;
  var newLeft = (baseLeft + scrollTop * speed) % window.innerWidth;
  cloud.style.left = newLeft + "px";
}

// Set random initial positions for clouds
if (window.innerWidth > 600) { // Only execute if screen width is greater than 600px
  setRandomPositions();

  // Store the initial left positions
  var initialLeftPositions = clouds.map((cloud) => parseFloat(cloud.style.left));

  // Define the maximum speed
  var maxSpeed = 0.3;

  // Add the event listener
  window.addEventListener("scroll", function () {
    clouds.forEach((cloud, index) => {
      var speed;
      if (index < 8) {
        speed = maxSpeed / 3; // Clouds 1-8 at 1/3 of max speed
      } else if (index < 13) {
        speed = (maxSpeed * 2) / 3; // Clouds 8-13 at 2/3 of max speed
      } else {
        speed = maxSpeed; // Clouds 13-18 at max speed
      }
      updateCloudPosition(cloud, speed, initialLeftPositions[index]);
    });
  }, false);
}

// Navbar Script
const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

// Scroll events
const handleScroll = () => {
  if (window.innerWidth >= 1432) { // Adjusted to the same breakpoint as CSS
    if (window.scrollY > 0) {
      primaryNav.classList.add('slid-out');
      primaryNav.classList.add('visible');
    } else {
      primaryNav.classList.remove('visible');
      primaryNav.classList.remove('slid-out');
    }
  }
};

// Event listener for scroll events
window.addEventListener('scroll', handleScroll);

navToggle.addEventListener("click", () => {
  const visibility = primaryNav.getAttribute("data-visible");

  if (visibility === "false") {
    primaryNav.setAttribute("data-visible", true);
    navToggle.setAttribute("aria-expanded", true);
  } else if (visibility === "true") {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  }
});

// Add event listener to each nav item to close the nav on click
const navItems = document.querySelectorAll(".primary-nav a");
navItems.forEach(item => {
  item.addEventListener("click", () => {
    primaryNav.setAttribute("data-visible", false);
    navToggle.setAttribute("aria-expanded", false);
  });
});

// Scroll to Top Button Script
let mybutton = document.getElementById("myBtn");
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
