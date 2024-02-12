// Find the clouds
var cloud1 = document.getElementById('cloud1');
var cloud2 = document.getElementById('cloud2');
var cloud3 = document.getElementById('cloud3');
var cloud4 = document.getElementById('cloud4');
var cloud5 = document.getElementById('cloud5');

// Add the event listener
window.addEventListener('scroll', function() {
    // Get the scroll position
    var scrollTop = window.scrollY;

    // Adjust the top position of each cloud
    cloud1.style.top = (scrollTop * 0.5) + 'px';  // This cloud moves at half the speed of the scroll
    cloud2.style.top = (scrollTop * 0.75) + 'px'; // This cloud moves a bit faster
    cloud3.style.top = (scrollTop * 1) + 'px';    // This cloud moves at the same speed as the scroll
    cloud4.style.top = (scrollTop * 1.25) + 'px'; // This cloud moves a bit slower
    cloud5.style.top = (scrollTop * 1.5) + 'px';  // This cloud moves at one and a half the speed of the scroll
}, false);