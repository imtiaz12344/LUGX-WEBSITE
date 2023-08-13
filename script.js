// scrolling nav
let header = document.querySelector("header");
window.addEventListener("scroll", function () {
	if (this.window.pageYOffset > 200) {
		header.classList.add("sticky");
	} else {
		header.classList.remove("sticky");
	}
});

// menu-bar

let open = document.querySelector(".open");
let close = document.querySelector(".close");
let menu = document.querySelector(".menu");
let nav = document.querySelector("nav");

menu.addEventListener("click", () => {
	if (open.style.display === "block") {
		open.style.display = "none";
		close.style.display = "block";
		nav.classList.add("trigger");
	} else {
		open.style.display = "block";
		close.style.display = "none";
		nav.classList.remove("trigger");
	}
});

// home page animation
let cl = gsap.timeline();
cl.from(".home-row-list img", {
	opacity: 0,
	duration: 0.5,
	x: 300,
});
cl.from(".relative", {
	opacity: 0,
	duration: 0.5,
	y: 200,
});
gsap.from(".home-row-list h2", {
	opacity: 0,
	duration: 1.5,
	y: -200,
	ease: Bounce.easeOut,
});
cl.from(".home-row-list p", {
	opacity: 0,
	duration: 1.5,
	x: -200,
});
cl.from(".home-row-list h3", {
	opacity: 0,
	duration: 0.5,
	y: -50,
});
gsap.from(".header-container", {
	opacity: 0,
	duration: 1.5,
	delay: 1,
	y: -50,
	ease: Bounce.easeOut,
});
gsap.from("nav ul li a", {
	stagger: 0.3,
	opacity: 0,
	duration: 1.5,
	delay: 2,
	y: -800,
	ease: Bounce.easeOut,
});
// feature
gsap.from(".feature-list", {
	stagger: 0.3,
	opacity: 0,
	duration: 0.5,
	x: -200,
	scrollTrigger: {
		trigger: ".features",
		scroller: "body",
		start: "top 50%",
	},
});

// trending section
gsap.from(".trending-btn", {
	opacity: 0,
	duration: 0.5,
	x: 200,
	scrollTrigger: {
		trigger: ".trending-container",
		scroller: "body",
		start: "top 70%",
	},
});
gsap.from(".up", {
	stagger: 0.3,
	opacity: 0,
	duration: 1.5,
	y: -200,
	ease: Bounce.easeOut,
	scrollTrigger: {
		trigger: ".trending-container",
		scroller: "body",
		start: "top 70%",
	},
});
gsap.from(".trending-list a", {
	stagger: 0.3,
	opacity: 0,
	duration: 0.5,
	ease: "power4.out",
	y: -200,
	scrollTrigger: {
		trigger: ".trending-container",
		scroller: "body",
		start: "top 50%",
	},
});
// gaming section
gsap.from(".gaming-btn", {
	opacity: 0,
	duration: 0.5,
	y: -200,
	scrollTrigger: {
		trigger: ".gaming-container",
		scroller: "body",
		start: "top 70%",
	},
});
gsap.from(".Up", {
	stagger: 0.3,
	opacity: 0,
	duration: 1.5,
	x: 200,
	ease: Bounce.easeOut,
	scrollTrigger: {
		trigger: ".gaming-container",
		scroller: "body",
		start: "top 70%",
	},
});
gsap.from(".gaming-list a", {
	stagger: 0.3,
	opacity: 0,
	duration: 0.5,
	ease: "power4.out",
	y: 200,
	scrollTrigger: {
		trigger: ".gaming-container",
		scroller: "body",
		start: "top 50%",
	},
});
// categories section
gsap.from(".UP", {
	stagger: 0.3,
	opacity: 0,
	duration: 1.5,
	y: -200,
	ease: Bounce.easeOut,
	scrollTrigger: {
		trigger: ".categories-container",
		scroller: "body",
		start: "top 70%",
	},
});
gsap.from(".categories-list a", {
	stagger: 0.3,
	opacity: 0,
	duration: 1.5,
	y: 200,
	ease: Bounce.easeOut,
	scrollTrigger: {
		trigger: ".categories-container",
		scroller: "body",
		start: "top 70%",
	},
});
gsap.from(".categories-list h2", {
	stagger: 0.3,
	opacity: 0,
	duration: 1.5,
	delay: 1,
	y: 200,
	ease: Bounce.easeOut,
	scrollTrigger: {
		trigger: ".categories-container",
		scroller: "body",
		start: "top 70%",
	},
});
// cart section
gsap.from(".cart-list", {
	stagger: 0.3,
	opacity: 0,
	duration: 1.5,
	delay: 1,
	x: -200,
	ease: Bounce.easeOut,
	scrollTrigger: {
		trigger: ".cart-list",
		scroller: "body",
		start: "top 70%",
	},
});
gsap.from(".cart-lists", {
	stagger: 0.3,
	opacity: 0,
	duration: 1.5,
	delay: 1,
	x: 200,
	ease: Bounce.easeOut,
	scrollTrigger: {
		trigger: ".cart-lists",
		scroller: "body",
		start: "top 70%",
	},
});
