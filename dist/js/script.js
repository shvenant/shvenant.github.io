let slideIndex = 1;
showSlides(slideIndex);

function plusSlide() {
	showSlides(slideIndex += 1);
}

function minusSlide() {
	showSlides(slideIndex -= 1);
}

function currentSlide(n) {
	showSlides(slideIndex = n);
}

function showSlides(n) {
	let i;
	let slides = document.getElementsByClassName("item");
	let dots = document.getElementsByClassName("slider-dots_item");
	if (n > slides.length) {
		slideIndex = 1;
	}
	if (n < 1) {
		slideIndex = slides.length;
	}
	for (i = 0; i < slides.length; i++) {
		slides[i].style.display = ("none");
	}
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" active", "");
	}
	slides[slideIndex - 1].style.display = "block";
	dots[slideIndex - 1].className += " active";
}





let tabNavs = document.querySelectorAll(".pawnshop__list");
let tabPanes = document.querySelectorAll(".pawnshop__specif");

for (let i = 0; i < tabNavs.length; i++) {

	tabNavs[i].addEventListener("click", function(e) {
		e.preventDefault();
		let activeTabAttr = e.target.getAttribute("data-tab");

		for (let j = 0; j < tabNavs.length; j++) {
			let contentAttr = tabPanes[j].getAttribute("data-tab-content");

			if (activeTabAttr === contentAttr) {
				tabNavs[j].classList.add("is-active");
				tabPanes[j].classList.add("is-active");
			} else {
				tabNavs[j].classList.remove("is-active");
				tabPanes[j].classList.remove("is-active");
			}
		}
	});
}

window.addEventListener("DOMContentLoaded", () => {
	const menu = document.querySelector(".header__nav"),
		menuItem = document.querySelectorAll(".menu__link"),
		hamburger = document.querySelector(".hamburger"),
		body = document.querySelector("body");
	hamburger.addEventListener("click", () => {
		hamburger.classList.toggle("hamburger_active");
		menu.classList.toggle("menu_active");
		body.classList.toggle("no-scroll");
	});

	menuItem.forEach((item) => {
		item.addEventListener("click", () => {
			hamburger.classList.toggle("hamburger_active");
			menu.classList.toggle("menu_active");
		});
	});
});