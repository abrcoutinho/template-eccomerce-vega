// import gsap from "gsap";
// import ScrollTrigger from "gsap/ScrollTrigger";
// import ScrollSmoother from "gsap/ScrollSmoother";

// gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

// ScrollSmoother.create({
//   wrapper: "#smooth-wrapper",
//   content: "#smooth-content",
//   smooth: 1.5,
//   effects: true,
// });



// Momentum
if (!/Mobi|Android|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
	// Executa o script apenas em desktops
	const storeApp = document.getElementById('smooth-wrapper');
	const storeContent = document.getElementById('smooth-content');

	let sx = 0, // For scroll positions
			sy = 0;
	let dx = sx, // For container positions
			dy = sy;

	storeApp.style.height = storeContent.clientHeight + 'px';

	storeContent.style.position = 'fixed';
	storeContent.style.top = 0;
	storeContent.style.left = 0;

	// Bind a scroll function
	window.addEventListener('scroll', easeScroll);

	function easeScroll() {
		sx = window.pageXOffset;
		sy = window.pageYOffset;
	}

	window.requestAnimationFrame(render);

	function render(){
		//We calculate our container position by linear interpolation method
		dx = li(dx,sx,0.04);
		dy = li(dy,sy,0.04);

		dx = Math.floor(dx * 100) / 100;
		dy = Math.floor(dy * 100) / 100;
		
		storeContent.style.transform = `translate3d(-${dx}px, -${dy}px, 0px)`;
	 
		window.requestAnimationFrame(render);
	}

	function li(a, b, n) {
		return (1 - n) * a + n * b;
	}
}
