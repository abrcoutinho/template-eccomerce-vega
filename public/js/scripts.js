

// Scroll event desk
function isScrolledDesk(e) {
	const topbar = document.getElementById("topbar");
	const scrolledDown = document.body.scrollTop > 0 || document.documentElement.scrollTop > 0;

	if (scrolledDown) {
	  topbar.classList.add("scrolled");
	}
	if(!scrolledDown) {
	  topbar.classList.remove("scrolled");
	}
}

// Scroll event mob
function isScrolledMob() {
	const mobScrollContainer = document.getElementById('smooth-wrapper');
	const topbar = document.getElementById("topbar");
	const overflowY = window.getComputedStyle(mobScrollContainer).overflowY;

	if (overflowY === 'auto' && mobScrollContainer.scrollTop > 0) {
		topbar.classList.add('scrolled');
	} else {
		topbar.classList.remove('scrolled');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	isScrolledDesk();
	isScrolledMob();
	const mobScrollContainer = document.getElementById('smooth-wrapper');
	['scroll','resize'].forEach( function(evt) {
		window.addEventListener('evt', isScrolledDesk, false);
		mobScrollContainer.addEventListener('evt', isScrolledMob, false);
	});


	// Product details call
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


