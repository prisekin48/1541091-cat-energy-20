var nav = document.querySelector('.nav');
var menuButton = document.querySelector('.header__menu-button');

menuButton.classList.remove('header__menu-button--nojs');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('header__menu-button--nav-closed');
});

var sampleButton = document.querySelector('.sample__button');
var sampleCatsWrapper = document.querySelector('.sample__cats-wrapper');

sampleButton.addEventListener('click', function() {
  sampleButton.classList.toggle('sample__button--after');
  sampleCatsWrapper.classList.toggle('sample__cats-wrapper--after');
});

var sampleStateTextBefore = document.querySelector('.sample__state-text--before');
var sampleStateTextAfter = document.querySelector('.sample__state-text--after');

sampleStateTextBefore.addEventListener('click', function() {
  sampleButton.classList.remove('sample__button--after');
  sampleCatsWrapper.classList.remove('sample__cats-wrapper--after');
});

sampleStateTextAfter.addEventListener('click', function() {
  sampleButton.classList.add('sample__button--after');
  sampleCatsWrapper.classList.add('sample__cats-wrapper--after');
});
