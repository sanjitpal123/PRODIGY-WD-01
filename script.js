window.addEventListener('scroll', function() {
    var navbar = document.getElementById('navbar');
    if (window.scrollY > 0) {
      navbar.classList.add('bg-gray-900');
    } else {
      navbar.classList.remove('bg-gray-900');
    }
  });
  
  var navLinks = document.querySelectorAll('.nav-link');
  
  navLinks.forEach(function(navLink) {
    navLink.addEventListener('mouseenter', function() {
      this.classList.add('text-yellow-400');
    });
    navLink.addEventListener('mouseleave', function() {
      this.classList.remove('text-yellow-400');
    });
  });
  
