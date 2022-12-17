const input = document.querySelector('.form-block__input');

input.addEventListener('change', () => {
	if (input.value !== "") {
		input.classList.add('_active');
	} else input.classList.remove('_active');
})

const burgerBtn = document.querySelector(".burger-btn");
const burgerMenu = document.querySelector(".nav-menu__list");

burgerBtn.addEventListener("click", () => {
	burgerMenu.classList.toggle("_active");
	burgerBtn.classList.toggle("_active");
	document.body.classList.toggle('_lock');
})