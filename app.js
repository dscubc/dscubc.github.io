
// The canvas sometimes initially loads in smaller than it should be and ends up stretching the animation.
window.addEventListener('load', function() {
      setTimeout(function(){
          particlesJS.load('particles-js', "particles.json");
      }, 500);
})
