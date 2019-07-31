const burgerMenu = document.querySelector('.burger_btn').children;
const mobileNav = document.getElementsByClassName('mask')[0];
const about = document.getElementById('about');
const aboutContainer = about.querySelector('.container');
const header = document.getElementsByTagName('header')[0];
const rowActive = header.querySelector('.row');
const menuItem = document.getElementsByClassName('menu_item');
const headerContent = document.getElementById('header_content');
const navContent = headerContent.querySelector('.navigation');
const burgerArr = Array.from(burgerMenu);
const burgerBtn = document.getElementById('burger_btn');
const banner = document.getElementById('banner');
const bannerContainer = banner.querySelector('.container');

/* Проверка класса на активность */
function toggleActive(...args) {
  for (let i = 0; i < args.length; i++) {
    const data = args[i].dataset;
    args[i].classList.toggle(`${data.action}--active`);
  }
}

/* Клик по бургеру */
burgerBtn.addEventListener('click', function() {
  const elActive = burgerArr.map(value =>
    toggleActive(value, mobileNav, rowActive, navContent)
  );
});

/* Фиксация по скролу */
window.addEventListener('scroll', function() {
  const scrolled = window.pageYOffset || document.documentElement.scrollTop;
  if (scrolled >= 1) {
    header.classList.add('header--fixed');
    headerContent.style.padding = '10px 0 4px 0';
    navContent.style.top = '-7px';
  } else {
    header.classList.remove('header--fixed');
    headerContent.style.padding = '';
    navContent.style.top = '';
  }
});

// функция сделать элемент активным
function addActive(...args) {
  for (let i = 0; i < args.length; i++) {
    const data = args[i].dataset;
    args[i].classList.add(`${data.action}--active`);
  }
}

// событие нажатия на элементы маленького меню
for (let i = 0; i < menuItem.length; i++) {
  menuItem[i].addEventListener('click', function() {
    for (let j = 0; j < menuItem.length; j++) {
      const dataChild = menuItem[j].dataset;
      const dataParent = menuItem[j].parentNode.dataset;
      menuItem[j].classList.remove(`${dataChild.action}--active`);
      menuItem[j].parentNode.classList.remove(`${dataParent.action}--active`);
    }
    addActive(this, this.parentNode);
  });
}

// функция убрать активность
function removeActive(...args) {
  for (let i = 0; i < args.length; i++) {
    const data = args[i].dataset;
    args[i].classList.remove(`${data.action}--active`);
  }
}

// ресайз окна
window.onresize = function() {
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
};
