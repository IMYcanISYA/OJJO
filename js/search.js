
const filterBtn = document.querySelectorAll('.filter-main__btn');

filterBtn.forEach(item => {
	item.addEventListener('click', () => {
		filterBtn.forEach(e => {
			if (item !== e) {
				e.parentElement.classList.remove('_active');
			};			
		});
		if (item.parentElement.classList.contains('_active')) {
			item.parentElement.classList.remove("_active");
		} else item.parentElement.classList.add("_active");
	})
})
const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".nav-menu__list");

burgerBtn.addEventListener("click", () => {
	burgerMenu.classList.toggle("_active");
	burgerBtn.classList.toggle("_active");
	document.body.classList.toggle('_lock');
})