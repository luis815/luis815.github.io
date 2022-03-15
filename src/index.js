/*
 * Adapted code from css-trick.com
 * https://css-tricks.com/sticky-smooth-active-nav/
 */

let menu = [];

function MenuItem(elem, top, bottom) {
	this.elem = elem;
	this.top = top;
	this.bottom = bottom;
}

//Matches CSS media query
if (window.innerWidth >= 1024) {
	window.addEventListener("load", function () {
		const menu_links = document.querySelectorAll("aside a");
		const sections = document.querySelectorAll("#main section");

		if (menu_links.length === sections.length) {
			for (let i = 0; i < menu_links.length; ++i) {
				const section = sections[i];
				const menu_item = new MenuItem(
					menu_links[i],
					section.offsetTop,
					section.offsetTop + section.offsetHeight
				);
				menu.push(menu_item);
			}
		}
	});

	setInterval(() => {
		const offset = window.scrollY + window.innerHeight / 2.5;

		for (let i = menu.length - 1; i >= 0; --i) {
			let menu_item = menu[i];
			if (offset >= menu_item.top && offset < menu_item.bottom) {
				menu_item.elem.classList.add("is-active");
			} else {
				menu_item.elem.classList.remove("is-active");
			}
		}
	}, 500);
} else {
}
