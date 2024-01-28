'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//////////////////////////////////////////
//////////////////////////////////////////e
//////////////////////////////////////////

//* Selecting, creation and delete elements

// Select Elements
console.log(document.documentElement);
console.log(document.head);
console.log(document.body);

const header = document.querySelector('.header');
const allSections = document.querySelectorAll('.section');
console.log(allSections);

document.getElementById('section--1');

const allButtons = document.getElementsByTagName('button');

console.log(allButtons);

const classBtn = document.getElementsByClassName('btn');

console.log(classBtn);

// Creating and inserting elements
const message = document.createElement('div');
message.classList.add('cookie-message');
// message.textContent =
//   'We used cookied for impreved functionalit and analytics.';
message.innerHTML =
  'We used cookied for impreved functionalit and analytics.<button class="btn btn--close-cookie">Got it!</button>';

header.append(message);
// header.prepend(message.cloneNode(true));

// header.before(message);
// header.after(message);

// Delete elements

document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    // message.remove();
    message.parentElement.removeChild(message);
  });

//* Styles, Attributes and Classes

// Styles

message.style.backgroundColor = `#37383d`;
message.style.width = '100%';

console.log(message.style.color);
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height);

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// Modify css variables
// document.documentElement.style.setProperty('--color-primary', 'orangered');

// Attributes

const logo = document.querySelector('.nav__logo');

console.log(logo.alt);
console.log(logo.src);
console.log(logo.className);

// Non-standard
console.log(logo.designer);
console.log(logo.getAttribute('designer'));
logo.setAttribute('company', 'Bankist');

console.log(logo.src);
console.log(logo.getAttribute('src'));

const link = document.querySelector('.nav__link--btn');

console.log(link.href);
console.log(link.getAttribute('href'));

// Data attributes

console.log(logo.dataset.versionNumber);

// Classes

logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c');

// logo.className = 'jonas';

//* Implementing smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
console.log(btnScrollTo);
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  const s1Coords = section1.getBoundingClientRect();

  console.log(window.scrollX, window.scrollY);
  console.log(s1Coords);

  // window.scrollTo();
  // window.scrollTo({
  //   left: s1Coords.x + window.scrollX,
  //   top: s1Coords.y + window.scrollY,
  //   behavior: 'smooth',
  // });

  section1.scrollIntoView({ behavior: 'smooth' });
});

//* Types of Events and Events Handlers

const h1 = document.querySelector('h1');

const alertH1 = function () {
  alert('addEventListener: Hola, entro el mouse ');
};
h1.addEventListener('mouseenter', alertH1);

// h1.onmouseenter = function () {
//   alert('onmousentre: Hola entro el mouse');
// };

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);
