"use strict";
// HEADER
(function () {
	let headerPage = document.querySelector(".header-page");

	window.addEventListener("scroll", function () {
		if (window.pageYOffset > 0) {
			headerPage.classList.add("is-active");
		} else {
			headerPage.classList.remove("is-active");
		}
	});
})();
// HEADER

// MODAL
(function () {
	let body = document.querySelector("body");

	let closetsItemByClass = function (item, className) {
		let node = item;

		while (node) {
			if (node.classList.contains(className)) {
				return node;
			}

			node = node.parentElement;
		}
		return null;
	};

	let closetsAttr = function (item, attr) {
		let node = item;

		while (node) {
			let attrValue = node.getAttribute(attr);
			if (attrValue) {
				return attrValue;
			}

			node = node.parentElement;
		}

		return null;
	};

	let showModal = function (target) {
		target.classList.add("is-active");
	};

	let closeModal = function (target) {
		target.classList.remove("is-active");
	};

	let toggleScroll = function () {
		body.classList.toggle("no-scroll");
	};

	body.addEventListener("click", function (e) {
		let target = e.target;
		let modalClass = closetsAttr(target, "data-modal");

		if (modalClass === null) {
			return;
		}

		e.preventDefault();
		let modal = document.querySelector("." + modalClass);

		if (modal) {
			showModal(modal);
			toggleScroll();
		}
	});

	body.addEventListener("click", function (e) {
		let target = e.target;

		if (
			target.classList.contains("btn-close") ||
			target.classList.contains("modal__wrapper")
		) {
			let modal = closetsItemByClass(target, "modal");

			closeModal(modal);
			toggleScroll();
		}
	});

	body.addEventListener("keydown", function (e) {
		if (e.keyCode !== 27) {
			return;
		}

		let modal = document.querySelector(".modal.is-active");

		if (modal) {
			closeModal(modal);
			toggleScroll();
		}
	});
})();
// MODAL

// SCROLL
(function () {
	let body = document.querySelector("body");

	let closetsAttr = function (item, attr) {
		let node = item;

		while (node) {
			let attrValue = node.getAttribute(attr);
			if (attrValue) {
				return attrValue;
			}

			node = node.parentElement;
		}

		return null;
	};

	let linear = function (t, b, c, d) {
		return (c * t) / d + b;
	};

	let isAnimatedScroll = false;

	let smoothScroll = function (target, duration) {
		isAnimatedScroll = true;

		let startPosition = window.pageYOffset;
		let targetPosition = startPosition + target.getBoundingClientRect().top;
		let distance = targetPosition - startPosition;
		let startTime = null;

		let animation = function (currentTime) {
			if (startTime === null) {
				startTime = currentTime;
			}

			let timeElapsed = currentTime - startTime;
			let scrollY = distance * (timeElapsed / duration) + startPosition; // linear

			window.scrollTo(0, scrollY);

			console.log(
				"Distance: " +
				distance +
				". TimeElapsed: " +
				timeElapsed +
				". duration: " +
				duration +
				". StartPosition: " +
				startPosition +
				". ScrollY: " +
				scrollY
			);

			if (timeElapsed < duration) {
				requestAnimationFrame(animation);
			} else {
				isAnimatedScroll = false;
			}
		};

		requestAnimationFrame(animation);
	};

	body.addEventListener("click", function (e) {
		let target = e.target;
		let scrollToItemClass = closetsAttr(target, "data-scroll-to");

		if (scrollToItemClass === null || isAnimatedScroll) {
			return;
		}

		e.preventDefault();
		let scrollToItem = document.querySelector("." + scrollToItemClass);

		if (scrollToItem) {
			smoothScroll(scrollToItem, 1000);
		}
	});
})();
// SCROLL

// CATALOG
(function () {
	let closetsItemByClass = function (item, className) {
		let node = item;

		while (node) {
			if (node.classList.contains(className)) {
				return node;
			}

			node = node.parentElement;
		}
		return null;
	};

	let removeChildren = (item) => {
		while (item.firstChild) {
			item.removeChild(item.firstChild);
		}
	};

	let updateChildren = (item, children) => {
		removeChildren(item);
		for (let i = 0; i < children.length; i++) {
			item.appendChild(children[i]);
		}
	};

	let catalogSection = document.querySelector(".catalog");
	if (catalogSection === null) {
		return;
	}

	let catalog = catalogSection.querySelector(".catalog__product");
	let catalogNav = catalogSection.querySelector(".catalog__nav");
	let catalogWrap = catalogSection.querySelectorAll(".catalog__wrapper");

	catalogNav.addEventListener("click", function (e) {
		let target = e.target;
		let item = closetsItemByClass(target, "catalog__nav-btn");

		if (item === null || item.classList.contains("is-active")) {
			return;
		}

		e.preventDefault();
		let filterValue = item.getAttribute("data-filter");
		let previousBtnActive = catalogNav.querySelector(
			".catalog__nav-btn.is-active"
		);

		previousBtnActive.classList.remove("is-active");
		item.classList.add("is-active");

		if (filterValue === "all") {
			updateChildren(catalog, catalogWrap);
			return;
		}

		let filterItems = [];
		for (let i = 0; i < catalogWrap.length; i++) {
			let current = catalogWrap[i];
			if (current.getAttribute("data-category") === filterValue) {
				filterItems.push(current);
			}
		}

		updateChildren(catalog, filterItems);
	});
})();
// CATALOG

// PRODUCT
(function () {
	let closetsItemByClass = function (item, className) {
		let node = item;

		while (node) {
			if (node.classList.contains(className)) {
				return node;
			}

			node = node.parentElement;
		}
		return null;
	};

	let product = document.querySelector(".product");

	if (product === null) {
		return;
	}

	let changeProductSize = (target) => {
		let catalog = closetsItemByClass(target, "catalog__item");
		let previousBtnActive = catalog.querySelector(
			".catalog__size.is-active"
		);
		previousBtnActive.classList.remove("is-active");
		target.classList.add("is-active");
	};

	let changeProducOrderInfo = (target) => {
		let catalog = closetsItemByClass(target, "catalog__item");
		let order = document.querySelector(".modal-order");

		let catalogTitle = catalog.querySelector(".catalog__title").textContent;
		let catalogSize = catalog.querySelector(".catalog__size.is-active")
			.textContent;
		let catalogPrice = catalog.querySelector(".catalog__price-value")
			.textContent;
		let catalogImgSrc = catalog
			.querySelector(".catalog__img")
			.getAttribute("src");
		order
			.querySelector(".order-info-title")
			.setAttribute("value", catalogTitle);
		order
			.querySelector(".order-info-size")
			.setAttribute("value", catalogSize);
		order
			.querySelector(".order-info-price")
			.setAttribute("value", catalogPrice);

		order.querySelector(".order-product-title").textContent = catalogTitle;
		order.querySelector(".order-product-price").textContent = catalogPrice;
		order.querySelector(".order__size").textContent = catalogSize;
		order.querySelector(".order__img").setAttribute("src", catalogImgSrc);
	};

	product.addEventListener("click", function (e) {
		let target = e.target;

		if (
			target.classList.contains("catalog__size") &&
			!target.classList.contains("is-active")
		) {
			e.preventDefault();
			changeProductSize(target);
		}

		if (target.classList.contains("catalog__btn")) {
			e.preventDefault();
			changeProducOrderInfo(target);
		}
	});
})();
// PRODUCT