//// TODO: Add an if statement that checks viewport size, if larger than 601px, it should remove the button? Add back if lower?
let hamburger = $("#hamburger");

hamburger.addEventListener('click', function(e) {
  drawer.classList.toggle('open');
  e.stopPropagation();
});
