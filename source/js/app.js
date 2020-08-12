var nav = document.querySelector('.nav');
var menuButton = document.querySelector('.header__menu-button');

menuButton.classList.remove('header__menu-button--nojs');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('header__menu-button--nav-closed');
});

var sampleButton = document.querySelector('.sample__button');
var sampleImage = document.querySelector('.sample__image');

sampleButton.addEventListener('click', function() {
  sampleButton.classList.toggle('sample__button--after');
  sampleImage.classList.toggle('sample__image--after');

});
