//// TODO: Add an if statement that checks viewport size, if larger than 601px, it should remove the button? Add back if lower?
document.getElementByID("hamburger").addEventListener('click', function(e) {
  let drawer = document.getElementByID("drawer");
  if (drawer.style.display === "none") {
      drawer.style.display = "block";
  } else {
      drawer.style.display = "none";
  }
//  e.stopPropagation();
});
