var nav = document.querySelector('.nav');
var menuButton = document.querySelector('.header__menu-button');

menuButton.classList.remove('header__menu-button--nojs');
nav.classList.add('visually-hidden');

menuButton.addEventListener('click', function() {
  if (menuButton.classList.contains('header__menu-button--nav-closed')) {
    menuButton.classList.remove('header__menu-button--nav-closed');
    menuButton.classList.add('header__menu-button--nav-opened');
    nav.classList.remove('visually-hidden');
  } else {
    menuButton.classList.add('header__menu-button--nav-closed');
    menuButton.classList.remove('header__menu-button--nav-opened');
    nav.classList.add('visually-hidden');
  }
});
