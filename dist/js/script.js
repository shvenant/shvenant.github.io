// Показ и скрытие меню
const hamburger = document.querySelector('.hamburger'),
	menu = document.querySelector('.header'),
	closeElem = document.querySelector('.header__close'),
	menuItem = document.querySelectorAll(".header__item"),
	body = document.querySelector('body'),
	social = document.querySelector('.header__social');

hamburger.addEventListener('click', () => {
	menu.classList.add('active');
	hamburger.classList.add('none');
	body.classList.add('no-scroll');
	closeElem.classList.add('active');
	social.classList.add('active');
});

closeElem.addEventListener('click', () => {
	menu.classList.remove('active');
	hamburger.classList.remove('none');
	body.classList.remove('no-scroll');
	social.classList.remove('active');
});

menuItem.forEach((item) => {
	item.addEventListener("click", () => {
		hamburger.classList.remove("none");
		menu.classList.remove("active");
		body.classList.remove('no-scroll');
	});
});

// Плавный скролл к якорю
const smoothLinks = document.querySelectorAll('a[href^="#"]');
for (let smoothLink of smoothLinks) {
	smoothLink.addEventListener('click', (e) => {
		e.preventDefault();
		const id = smoothLink.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	});
}

// Полоса рейтинга
const counters = document.querySelectorAll('.skills__rating-counter'),
	lines = document.querySelectorAll('.skills__rating-line span');

counters.forEach((item, i) => {
	lines[i].style.width = item.innerHTML;
});

// Прокрутка вверх
const scrollTop = this.document.querySelector(".scroll-top");
window.onscroll = () => {
	if (window.pageYOffset > 750) {
		scrollTop.classList.add("scroll-top_fixed");
	} else {
		scrollTop.classList.remove("scroll-top_fixed");
	}
};

// Анимация при скролле
const animItems = document.querySelectorAll('.anim-items');

if (animItems.length > 0) {

	window.addEventListener('scroll', animOnScroll);

	function animOnScroll() {
		for (let i = 0; i < animItems.length; i++) {
			const animItem = animItems[i];
			const animItemHeight = animItem.offsetHeight;
			const animItemOffset = offset(animItem).top;
			const animStart = 4;

			let animItemPoint = window.innerHeight - animItemHeight / animStart;

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart;
			}

			if ((pageYOffset > animItemOffset - animItemPoint) && pageYOffset < (animItemOffset + animItemHeight)) {
				animItem.classList.add('active');
			} else {
				if (!animItem.classList.contains('anim-no-hide')) {
					animItem.classList.remove('active');
				}
			}
		}
	}

	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop;
		return {
			top: rect.top + scrollTop,
			left: rect.left + scrollLeft
		};
	}
	setTimeout(() => {
		animOnScroll();
	}, 400);
}



window.onload = function () {
	document.body.classList.add('loaded_hiding');
	window.setTimeout(function () {
		document.body.classList.add('loaded');
		document.body.classList.remove('loaded_hiding');
	}, 500);
}