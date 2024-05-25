// Force the page to scroll to the top on load
window.addEventListener("load", function () {
  window.scrollTo(0, 0);
});

// Find the clouds
var cloudIds = [
  "cloud1",
  "cloud2",
  "cloud3",
  "cloud4",
  "cloud5",
  "cloud6",
  "cloud7",
  "cloud8",
  "cloud9",
  "cloud10",
  "cloud11",
  "cloud12",
  "cloud13",
  "cloud14",
  "cloud15",
];
var clouds = cloudIds
  .map((id) => document.getElementById(id))
  .filter((cloud) => cloud !== null);

// Function to set random initial positions for clouds without overlapping
function setRandomPositions() {
  var positions = [];
  clouds.forEach(function (cloud) {
    var randomTop, randomLeft, isOverlap;
    do {
      isOverlap = false;
      randomTop = Math.random() * 100; // Random top position between 0% and 100%
      randomLeft = Math.random() * window.innerWidth; // Random left position within the viewport width
      // Check for overlap with existing positions
      for (var pos of positions) {
        if (
          Math.abs(randomTop - pos.top) < 15 &&
          Math.abs(randomLeft - pos.left) < 150
        ) {
          // Adjust overlap distance as needed
          isOverlap = true;
          break;
        }
      }
    } while (isOverlap);
    positions.push({ top: randomTop, left: randomLeft });
    cloud.style.top = randomTop + "vh";
    cloud.style.left = randomLeft + "px";
  });
}

// Function to update cloud positions
function updateCloudPosition(cloud, speed, baseLeft) {
  var scrollTop = window.scrollY;
  var newLeft = (baseLeft + scrollTop * speed) % window.innerWidth;
  cloud.style.left = newLeft + "px";
}

// Set random initial positions for clouds
setRandomPositions();

// Store the initial left positions
var initialLeftPositions = clouds.map((cloud) => parseFloat(cloud.style.left));

// Add the event listener
window.addEventListener(
  "scroll",
  function () {
    clouds.forEach((cloud, index) => {
      var speed = [
        0.05, 0.075, 0.1, 0.125, 0.15, 0.075, 0.15, 0.1, 0.15, 0.15, 0.125,
        0.125, 0.25, 0.75, 0.1, 0.125,
      ][index];
      updateCloudPosition(cloud, speed, initialLeftPositions[index]);
    });
  },
  false
);

// Navbar Script
const primaryNav = document.querySelector(".primary-nav");
const navToggle = document.querySelector(".mobile-nav-toggle");

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
