const headerMenu = () => {
	const burger = document.querySelector('.burger_menu');
	const headers = document.querySelector('.header_menu')
	burger.addEventListener('click', () => {
        headers.classList.toggle('active');
        burger.classList.toggle('toggle')
	});
}

headerMenu();