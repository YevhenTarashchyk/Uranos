let burgerMenu = document.querySelector('.burger_btn').children,
	mobileNav = document.getElementsByClassName('mask')[0],
	smDesktop = banner.querySelector('.container'),
	header = document.getElementsByTagName('header')[0],
	rowActive = header.querySelector('.row'),
	menuItem = document.getElementsByClassName('menu_item'),
	headerContent = header_content.querySelector('.navigation'),
	burgerArr = Array.from(burgerMenu);
	




/*Проверка класса на активность*/
function toggleActive(...args) {
	for(let i = 0; i < args.length; i++) {
		let data = args[i].dataset;
		args[i].classList.toggle(`${data.action}--active`);
	}
}

/*Клик по бургеру*/
burger_btn.addEventListener('click', function () {
	let elActive = burgerArr.map(value => toggleActive(value, mobileNav, rowActive, headerContent));
});

// ресайз окна
window.onresize = function () {
	if (window.innerWidth < 992) {
    smDesktop.classList.replace('container', 'container-fluid');
  } else {
    smDesktop.classList.replace('container-fluid', 'container');
  }
	if (window.innerWidth > 768) {
		burgerArr.map(value => removeActive(value, mobileNav, rowActive, headerContent));
	}
}

/*Фиксация по скролу*/
window.addEventListener('scroll', function () {
		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled >= 1) {
		header.classList.add('header--fixed');
		header_content.style.padding = '10px 0 4px 0';
	} else {
		header.classList.remove('header--fixed');
		header_content.style.padding = '';
	}
});

// событие нажатия на элементы маленького меню
for(let i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener('click', function(e) {
		for(let j = 0; j < menuItem.length; j++) {
			let dataChild = menuItem[j].dataset;
			let dataParent = menuItem[j].parentNode.dataset;
			menuItem[j].classList.remove(`${dataChild.action}--active`);
			menuItem[j].parentNode.classList.remove(`${dataParent.action}--active`);
		}
		addActive(this,this.parentNode);
	});
}

// функция сделать элемент активным
function addActive(...args) {
	for (let i = 0; i < args.length; i++) {
		let data = args[i].dataset;
		args[i].classList.add(`${data.action}--active`);
	}
}

// функция убрать активность
function removeActive(...args) {
	for (let i = 0; i < args.length; i++) {
		let data = args[i].dataset;
		args[i].classList.remove(`${data.action}--active`);
	}
}


