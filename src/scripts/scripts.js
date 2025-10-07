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





