// Adding an event listener to the hamburger button in order to "open" and "close" the menu by changing the display.
let drawer = document.getElementById('drawer');
document.getElementById('hamburger').addEventListener('click', function() {
  if (drawer.style.display === 'none') {
      drawer.style.display = 'block';
  } else {
      drawer.style.display = 'none';
  }
});
