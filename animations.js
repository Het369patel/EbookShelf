document.addEventListener('DOMContentLoaded', function () {
    // Smooth scroll function
    function scrollToTarget(target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  
    // Find the "Discover" link in the navbar
    const discoverLink = document.querySelector('a[href="#discover"]');
  
    // Scroll to the "Discover" section when the link is clicked
    if (discoverLink) {
      discoverLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default behavior of jumping to the section
        const targetSection = document.getElementById('discover');
        scrollToTarget(targetSection);
      });
    }
  });