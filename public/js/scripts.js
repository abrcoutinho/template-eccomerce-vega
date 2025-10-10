

// Scroll event desk
window.addEventListener('scroll', function () {
	const topbar = document.getElementById('topbar');
	const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

	if (scrollTop > 0) {
		topbar.classList.add('scrolled');
	} else {
		topbar.classList.remove('scrolled');
	}
});


// Scroll event mob
function isScrolledMob() {
	const container = document.getElementById('smooth-wrapper');
	const topbar = document.getElementById('topbar');

	if (!container || !topbar) return;

	const estilo = window.getComputedStyle(container);
	const overflowY = estilo.getPropertyValue('overflow-y');
	const scrollTop = container.scrollTop;

	const temScroll = scrollTop > 0;
	const overflowYAuto = overflowY === 'auto';

	if (temScroll && overflowYAuto) {
		topbar.classList.add('scrolled');
	} else {
		topbar.classList.remove('scrolled');
	}
}

document.addEventListener('DOMContentLoaded', () => {
	isScrolledMob();
	const container = document.getElementById('smooth-wrapper');
	if (container) {
		container.addEventListener('scroll', isScrolledMob);
	}



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
