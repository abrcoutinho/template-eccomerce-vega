// Scroll event
function isScrolled(e) {
  const topbar = document.getElementById("topbar");
  const scrolledDown = document.body.scrollTop > 1 || document.documentElement.scrollTop > 1;

  if (scrolledDown) {
    topbar.classList.add("scrolled");
  }

  if(!scrolledDown) {
    topbar.classList.remove("scrolled");
  }
}
window.addEventListener('scroll', isScrolled);


// Show/hide navbar
// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     navbar.style.top = "0";
//   } else {
//     navbar.style.top = "-220px";
//   }
//   prevScrollpos = currentScrollPos;
// }


// Product details call
document.addEventListener('DOMContentLoaded', function() {
  const openProductDetails = document.querySelectorAll('.open-product-details');
  const prodDetailsPopup = document.getElementById('product-details');
  const closeProdDetBtn = document.getElementById('closeProdDetBtn');

  openProductDetails.forEach(button => {
    button.addEventListener('click', function() {
      if (button.id !== 'closeProdDetBtn') {
        prodDetailsPopup.classList.add("active");
      }
    });
  });

  closeProdDetBtn.addEventListener('click', function() {
    prodDetailsPopup.classList.remove('active');
  });

  // Close when clicking outside
  prodDetailsPopup.addEventListener('click', function(event) {
    if (event.target === prodDetailsPopup) {
      prodDetailsPopup.classList.remove('active');
    }
  });
});





