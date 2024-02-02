'use strict';
const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

///////////////////////////////////////
// Modal window

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
// BUTTON SCROLLING
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

//////////////////////////////////////////
// Navigation

// document.querySelectorAll('.nav__link').forEach(el => {
//   el.addEventListener('click', function (e) {
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
//   });
// });

// Event delegation
// 1. Add a event listener to common parent element
// 2. Determine what element originated an event

document.querySelector('.nav__links').addEventListener('click', function (e) {
  e.preventDefault();
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//////////////////////////////////////////
//* Building a Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');

  if (!clicked) return;

  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(t => t.classList.remove('operations__content--active'));

  clicked.classList.add('operations__tab--active');
  console.log(clicked.dataset.tab);
  console.log(
    document.querySelector(`operations__content--${clicked.dataset.tab}`)
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//////////////////////////////////////////
//* Menu fade animation - Passing Arguments to Event Handlers

const handleOver = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');

    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) {
        el.style.opacity = this;
      }
    });

    logo.style.opacity = this;
  }
};

nav.addEventListener('mouseover', handleOver.bind(0.5));

nav.addEventListener('mouseout', handleOver.bind(1));
//////////////////////////////////////////
//////////////////////////////////////////
//////////////////////////////////////////

// //* Selecting, creation and delete elements

// // Select Elements
// console.log(document.documentElement);
// console.log(document.head);
// console.log(document.body);

// const header = document.querySelector('.header');
// const allSections = document.querySelectorAll('.section');
// console.log(allSections);

// document.getElementById('section--1');

// const allButtons = document.getElementsByTagName('button');

// console.log(allButtons);

// const classBtn = document.getElementsByClassName('btn');

// console.log(classBtn);

// // Creating and inserting elements
// const message = document.createElement('div');
// message.classList.add('cookie-message');
// // message.textContent =
// //   'We used cookied for impreved functionalit and analytics.';
// message.innerHTML =
//   'We used cookied for impreved functionalit and analytics.<button class="btn btn--close-cookie">Got it!</button>';

// header.append(message);
// // header.prepend(message.cloneNode(true));

// // header.before(message);
// // header.after(message);

// // Delete elements

// document
//   .querySelector('.btn--close-cookie')
//   .addEventListener('click', function () {
//     // message.remove();
//     message.parentElement.removeChild(message);
//   });

// //* Styles, Attributes and Classes

// // Styles

// message.style.backgroundColor = `#37383d`;
// message.style.width = '100%';

// console.log(message.style.color);
// console.log(message.style.backgroundColor);

// console.log(getComputedStyle(message).color);
// console.log(getComputedStyle(message).height);

// message.style.height =
//   Number.parseFloat(getComputedStyle(message).height, 10) + 30 + 'px';

// // Modify css variables
// // document.documentElement.style.setProperty('--color-primary', 'orangered');

// // Attributes

// const logo = document.querySelector('.nav__logo');

// console.log(logo.alt);
// console.log(logo.src);
// console.log(logo.className);

// // Non-standard
// console.log(logo.designer);
// console.log(logo.getAttribute('designer'));
// logo.setAttribute('company', 'Bankist');

// console.log(logo.src);
// console.log(logo.getAttribute('src'));

// const link = document.querySelector('.nav__link--btn');

// console.log(link.href);
// console.log(link.getAttribute('href'));

// // Data attributes

// console.log(logo.dataset.versionNumber);

// // Classes

// logo.classList.add('c', 'j');
// logo.classList.remove('c', 'j');
// logo.classList.toggle('c');
// logo.classList.contains('c');

// // logo.className = 'jonas';

// //* Implementing smooth scrolling

// const btnScrollTo = document.querySelector('.btn--scroll-to');
// console.log(btnScrollTo);
// const section1 = document.querySelector('#section--1');

// btnScrollTo.addEventListener('click', function (e) {
//   const s1Coords = section1.getBoundingClientRect();

//   console.log(window.scrollX, window.scrollY);
//   console.log(s1Coords);

//   // window.scrollTo();
//   // window.scrollTo({
//   //   left: s1Coords.x + window.scrollX,
//   //   top: s1Coords.y + window.scrollY,
//   //   behavior: 'smooth',
//   // });

//   section1.scrollIntoView({ behavior: 'smooth' });
// });

// //* Types of Events and Events Handlers

// const h1 = document.querySelector('h1');

// const alertH1 = function () {
//   alert('addEventListener: Hola, entro el mouse ');
// };
// // h1.addEventListener('mouseenter', alertH1);

// // h1.onmouseenter = function () {
// //   alert('onmousentre: Hola entro el mouse');
// // };

// setTimeout(() => {
//   h1.removeEventListener('mouseenter', alertH1);
// }, 3000);

// //* EVENTS PROPAGATION: Bubbling and Capturing

// const randomInt = (min, max) =>
//   Math.trunc(Math.random() * (max - min + 1) - min);

// const randomColor = () =>
//   `rgb(${randomInt(0, 255)}, ${randomInt(0, 255)} ,${randomInt(0, 255)})`;

// document.querySelector('.nav__link').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target);
//   console.log(e.currentTarget);
//   console.log(e.currentTarget === this);

//   // Stop propagation

//   e.stopPropagation();
// });
// document.querySelector('.nav__links').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target);
//   console.log(e.currentTarget);
// });
// document.querySelector('.nav').addEventListener('click', function (e) {
//   this.style.backgroundColor = randomColor();
//   console.log(e.target);
//   console.log(e.currentTarget);
// });

// //* DOM TRAVERSING
// const h1 = document.querySelector('h1');

// // Goind downwards child:
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
// console.log(h1.firstElementChild);
// console.log(h1.lastElementChild);

// // Going upwards child:
// console.log(h1.parentNode);
// console.log(h1.parentElement);

// // h1.closest('.header').style.background = 'var(--gradient-secondary)';
// // h1.closest('h1').style.background = 'var(--gradient-secondary)';

// // Going sideways: sibling

// console.log(h1.previousElementSibling);
// console.log(h1.nextElementSibling);

// console.log(h1.parentElement.children);
// [...h1.parentElement.children].forEach(el => {
//   if (el !== h1) el.style.transform = 'scale(0.5)';
// });
