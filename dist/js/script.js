// Табы
let tabNavs = document.querySelectorAll(".pawnshop__list");
let tabPanes = document.querySelectorAll(".pawnshop__specif");

for (let i = 0; i < tabNavs.length; i++) {

	tabNavs[i].addEventListener("click", function (e) {
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

// Гамбургер
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

// Плавная прокрутка к якорю
const anchors = document.querySelectorAll('a[href*="#"]');

for (let anchor of anchors) {
	anchor.addEventListener('click', function (e) {
		e.preventDefault();

		const blockID = anchor.getAttribute('href').substr(1);

		document.getElementById(blockID).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}


// Кнопка показать больше
let btnMore = document.querySelector(".btn__more");
let more = document.querySelector(".services__wrapper_more");

btnMore.addEventListener("click", function () {
	if (more.classList.contains("more")) {
		btnMore.innerHTML = "Смотреть еще";
		more.classList.remove('more');

	} else {
		btnMore.innerHTML = "Скрыть";
		more.classList.add('more');
	}
});

// Ссылка показать больше
let linkPlus = document.querySelector(".stages__link");
let plus = document.querySelector(".stages__descr_plus");

linkPlus.addEventListener("click", function () {
	if (plus.classList.contains("plus")) {
		linkPlus.innerHTML = "Прочитать больше";
		plus.classList.remove('plus');

	} else {
		linkPlus.innerHTML = "Скрыть";
		plus.classList.add('plus');
	}
});



let channelsLink = document.querySelectorAll(".channels__link");
for (let i = 0; i < channelsLink.length; i++) {
	channelsLink[i].addEventListener("click", function () {
		var channelsTextMore = this.nextElementSibling;
		if (channelsTextMore.classList.contains("channels_more")) {
			this.innerHTML = "Прочитать больше";
			channelsTextMore.classList.remove('channels_more');

		} else {
			this.innerHTML = "Скрыть";
			channelsTextMore.classList.add('channels_more');
		}
	});
}