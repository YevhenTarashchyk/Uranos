let burgerMenu = document.querySelector('.burger_btn').children,
	mobileNav = document.getElementById('header_content').getElementsByClassName('navigation')[0],
  smDesktop = banner.querySelector('.container');




/*Проверка класса на активность*/
function toggleActive(...args) {
	for(let i = 0; i < args.length; i++) {
		let data = args[i].dataset;
		args[i].classList.toggle(`${data.action}--active`);
	}
}

/*Клик по бургеру*/
burger_btn.addEventListener('click', function () {
	let arr = Array.from(burgerMenu);
	let elActive = arr.map(value => toggleActive(value,mobileNav));
});

// ресайз окна
window.onresize = function () {
	if (window.innerWidth < 992) {
    smDesktop.classList.replace('container', 'container-fluid');
  } else {
    smDesktop.classList.replace('container-fluid', 'container');
  }
}


