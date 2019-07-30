let burgerMenu = document.querySelector('.burger_btn').children,
	mobileNav = document.getElementsByClassName('mask')[0],
	bannerContainer = banner.querySelector('.container'),
	aboutContainer = about.querySelector('.container'),
	header = document.getElementsByTagName('header')[0],
	rowActive = header.querySelector('.row'),
	menuItem = document.getElementsByClassName('menu_item'),
	navContent = header_content.querySelector('.navigation'),
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
	let elActive = burgerArr.map(value => toggleActive(value, mobileNav, rowActive, navContent));
});

// ресайз окна
window.onresize = function () {
	burgerArr.map(value => removeActive(value, mobileNav, rowActive, navContent));
	if (window.innerWidth < 992) {
    bannerContainer.classList.replace('container', 'container-fluid');
  } else {
    bannerContainer.classList.replace('container-fluid', 'container');
  }
	if (window.innerWidth < 768) {
		aboutContainer.classList.replace('container', 'container-fluid');
	} else {
		aboutContainer.classList.replace('container-fluid', 'container');
	}
}

/*Фиксация по скролу*/
window.addEventListener('scroll', function () {
		let scrolled = window.pageYOffset || document.documentElement.scrollTop;
	if (scrolled >= 1) {
		header.classList.add('header--fixed');
		header_content.style.padding = '10px 0 4px 0';
		navContent.style.top = '-7px';
		
	} else {
		header.classList.remove('header--fixed');
		header_content.style.padding = '';
		navContent.style.top = '';
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


