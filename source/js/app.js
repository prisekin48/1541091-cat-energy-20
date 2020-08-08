var nav = document.querySelector('.nav');
var menuButton = document.querySelector('.header__menu-button');

if (window.innerWidth < 768) {
  nav.classList.add('visually-hidden');
}

menuButton.classList.remove('header__menu-button--nojs');


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


var sampleButton = document.querySelector('.sample__button');
var sampleImage = document.querySelector('.sample__image');

sampleButton.addEventListener('click', function() {
  sampleButton.classList.toggle('sample__button--after');
  sampleImage.classList.toggle('sample__image--after');

});
