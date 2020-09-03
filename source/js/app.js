let nav = document.querySelector('.nav');
let menuButton = document.querySelector('.header__menu-button');
let map = document.querySelector('.welcome__map');

menuButton.classList.remove('header__menu-button--nojs');
map.classList.remove('welcome__map--nojs');

menuButton.addEventListener('click', function() {
  menuButton.classList.toggle('header__menu-button--nav-closed');
});

let sampleButton = document.querySelector('.sample__button');
let sampleCatsWrapper = document.querySelector('.sample__cats-wrapper');

sampleButton.addEventListener('click', function() {
  sampleButton.classList.toggle('sample__button--after');
  sampleCatsWrapper.classList.toggle('sample__cats-wrapper--after');
});

let sampleStateTextBefore = document.querySelector('.sample__state-text--before');
let sampleStateTextAfter = document.querySelector('.sample__state-text--after');

sampleStateTextBefore.addEventListener('click', function() {
  sampleButton.classList.remove('sample__button--after');
  sampleCatsWrapper.classList.remove('sample__cats-wrapper--after');
});

sampleStateTextAfter.addEventListener('click', function() {
  sampleButton.classList.add('sample__button--after');
  sampleCatsWrapper.classList.add('sample__cats-wrapper--after');
});


let address = {lat: 59.938635, lng: 30.323118};
let icon = "../img/map-pin.png";

function initMap() {
  map = new google.maps.Map(document.querySelector(".welcome__map"), {
    center: address,
    zoom: 16
  });
  marker = new google.maps.Marker({
	  position: address,
	  map: map,
	  title: 'Привет Кекс!',
	  icon: icon
	});
};