'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');
const nav = document.querySelector('.nav');

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

// Selecting, Creating and Deleting Elements
/*
// Selecting Elements
console.log(document.documentElement); // selects the entire html element <html></html>
console.log(document.head); // selects the head element <head></head>
console.log(document.body); // selects the entire body element <body></body>
const header = document.querySelector(".header");
console.log(document.querySelectorAll(".section")); // returns a NodeList i.e. remains the same even if the DOM changes
console.log(document.getElementById("section--1"));
console.log(document.getElementsByTagName("button")); // returns an html collection i.e. if DOM changes, the collection gets updated as well
console.log(document.getElementsByClassName("btn"));

// Creating and Inserting Elements
// Creating Elements
const message = document.createElement("div"); // creating a new html div element
message.classList.add("cookie-message"); // adding a class name to the element
// message.textContent = "We used cookies for improved functionality and analytics.";
message.innerHTML = 'We used cookies for improved functionality and analytics. <button class="btn btn--close-cookie">Got it!</button>';

// Inserting Elements
// header.prepend(message); // append the element as the first in the parent element
header.append(message); // append the element as the last in the parent element. Note: does not create a replicate in the DOM but move the element from being the first to the last
// header.append(message.cloneNode(true)); // creates a replicate of the message div
// header.before(message); // adds the element before the header container
// header.after(message); // adds the element after the header container

// Deleting Elements
document.querySelector('.btn--close-cookie').addEventListener('click', function(){
  // message.remove(); // new way
  message.parentElement.removeChild(message); 
})

*/

// Styles, Attributes and Classes
/*

// Styles
// Note: 
// 1. styles created on an element in js are always inline styles
// 2. We cannot log styles from a css file or that are not defined to the console except with getComputedStyle
message.style.backgroundColor = "#37383d";
message.style.width = "110%";
console.log(message.style.height); // undefined
console.log(message.style.backgroundColor);

console.log(getComputedStyle(message)); // log all css styles applicable to this element to the console
console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); // height was not defined but the browser needed to calculate it

// Changing CSS values from CSS :root
console.log(document.documentElement.style.setProperty("--color-primary", "orangered"));


// Attributes
// Attributes that are not meant to be on an element would not be read by js if present in html
const logo = document.querySelector(".nav__logo");
console.log(logo.alt);
console.log(logo.src); // get absolute source
console.log(logo.getAttribute("src")); // get relative source
console.log(logo.className); // prints the class name of the element to d console

console.log(logo.designer); // Not valid .: designer is not a valit attribute
console.log(logo.getAttribute("designer")); // Method to get it

// Setting value for an html element attribute
logo.alt = 'Beautiful Minimalist Logo'
console.log(logo.alt);

// Setting a new attribute to an html element
logo.setAttribute('company', 'Bankist');

// Attributes on Links (<a></a>)
const link = document.querySelector(".nav__link--btn");
console.log(link.href); // absolute
console.log(link.getAttribute("href")); // relative

// Data Attributes
console.log(logo.dataset.versionNumber);


// Classes
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c', 'j');
logo.classList.contains('c', 'j');

*/

// Implementing Smooth Scrolling
/*

// BoundingClientRect is relative to the visible viewport of the browser
btnScrollTo.addEventListener('click', function (e) {
  // Getting the coordinates of section 1
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  // Getting the coordinates of the button i.e. Learn more
  console.log(e.target.getBoundingClientRect());

  // Getting the amount of pixels `scrolled` away from the left and top of the browser
  console.log('Current scroll (X/Y): ', window.pageXOffset, window.pageYOffset);

  // Getting the current height and width of the browser
  console.log(
    'height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  // Now implementing Scrolling
  // We add the amount of pixels scrolled away + the distance of section1 to the top of the browser
  // window.scrollTo(
  //   s1coords.left + window.pageXOffset,
  //   s1coords.top + window.pageYOffset
  // );

  // Now implementing Smooth Scrolling
  // OLD WAY/METHOD
  // We pass in our cordinates in an object
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });

  // NEW WAY
  section1.scrollIntoView({ behavior: 'smooth' });
});

*/

// Types of Event and Event Handlers
/*

let h1 = document.querySelector('h1');
const alertH1 = function () {
  alert('addEventListener: You are reading the heading :D');

  // Remove event listener at this point allows the event to happen just once
  h1.removeEventListener('mouseenter', alertH1);
};
h1.addEventListener('mouseenter', alertH1);

// Method 2
h1.onmouseenter = function () {
  alert('mouseenter: You are reading the heading :D');
};

setTimeout(() => {
  h1.removeEventListener('mouseenter', alertH1);
}, 3000);

*/

// Event Propagation, Bubbling and Capturing
/*

// Note; Capturing is listening to event as it is coming down to the target from the DOM
// Bubbling is listening to event as it is going back to the DOM when it reaches the target i.e. on every parent element
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);
const randomColor = () => `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log("LINK", e.target, e.currentTarget);

  // Stop Propagation
  // e.stopPropagation();
});
document.querySelector(".nav__links").addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log("CONTAINER", e.target, e.currentTarget);
});
document.querySelector(".nav").addEventListener('click', function(e){
  this.style.backgroundColor = randomColor();
  console.log("NAV", e.target, e.currentTarget);
});

*/

// Event Delegation: Implementing Page Navigation
/*

// Old Method
/* document.querySelectorAll('.nav__link').forEach(el =>
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  })
); 

// New Method: Using Event Propagation
// 1. Add event listener to the common parent element
// 2. Determine what element originated the event
document.querySelector(".nav__links").addEventListener('click', function(e){
  e.preventDefault();
  if(e.target.classList.contains("nav__link")){
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
})

*/

// DOM Traversing
/*

const h1 = document.querySelector('h1');

// Going downwards: child
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes); // list every single different thing present inside the h1 element
console.log(h1.children); // list every single different elements present inside d h1
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'orangered';

// Going upwards: parents
console.log(h1.parentNode);
console.log(h1.parentElement);
h1.closest('.header').style.background = 'var(--gradient-secondary)'; // style the closest element with the class name of header
h1.closest('h1').style.background = 'var(--gradient-primary)';

// Going sideways: siblings
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);
console.log(h1.parentElement.children); // accessing all the sibling element through the parent
[...h1.parentElement.children].forEach(el => {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

*/

// Tabbed Component
const tabs = document.querySelectorAll('.operations__tab');
const tabsContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabsContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  // console.log(clicked);

  // Guard clause
  if (!clicked) return;

  // Remove active classes
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));

  // Activate tabs
  clicked.classList.add('operations__tab--active');

  // Activate content area
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add(`operations__content--active`);
});

// Menu fade animation
const handleHover = function (e) {
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opacity = this;
    });
    logo.style.opacity = this;
  }
};

// Passing "argument" into handler
nav.addEventListener('mouseover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

// Implementing a sticky navigation bar: The scroll event
const initialCoords = section1.getBoundingClientRect();
window.addEventListener('scroll', function (e) {
  // console.log(window.scrollY);

  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});

// Implementing a sticky navigation bar: The Intersection Observer API
const header = document.querySelector('.header');
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = function (entries) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

// Revealing Section: Elements on Scroll
const allSections = document.querySelectorAll('.section');
const revealSection = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  else entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(section => {
  sectionObserver.observe(section);
  // section.classList.add('section--hidden');
});

// Lazy Loading Image
const imgTargets = document.querySelectorAll(`img[data-src]`);
const loadImg = function (entries, observer) {
  const [entry] = entries;
  // console.log(entry);

  if (!entry.isIntersecting) return;
  // else replace src with data-src
  else entry.target.src = entry.target.dataset.src;

  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
    // entry.target.style.filter = "blur(0px)";
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
  rootMargin: '200px',
});
imgTargets.forEach(img => {
  imgObserver.observe(img);
});

// Building a slider component part 1

const slides = document.querySelectorAll('.slide');
const btnLeft = document.querySelector('.slider__btn--left');
const btnRight = document.querySelector('.slider__btn--right');
let curSlide = 0;

const dotContainer = document.querySelector('.dots');
const createDots = function () {
  slides.forEach(function (_, i) {
    dotContainer.insertAdjacentHTML(
      'beforeend',
      `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
};
createDots();
  
dotContainer.addEventListener('click', function (e) {
  if (e.target.classList.contains('dots__dot')) {
    const slide = e.target.dataset.slide;
    goToSlide(slide);
    activateDot(slide);
  }
});

const activateDot = function (slide) {
  document
    .querySelectorAll('.dots__dot')
    .forEach(dot => dot.classList.remove('dots__dot--active'));
  document
    .querySelector(`.dots__dot[data-slide="${slide}"]`)
    .classList.add('dots__dot--active');
};
activateDot(0);

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translate(${100 * (i - slide)}%)`;
  });
};
goToSlide(0);

const nextSlide = function () {
  curSlide === slides.length - 1 ? (curSlide = 0) : curSlide++;
  goToSlide(curSlide);
  activateDot(curSlide);
};

const prevSlide = function () {
  curSlide === 0 ? (curSlide = slides.length - 1) : curSlide--;
  goToSlide(curSlide);
  activateDot(curSlide);
};

btnRight.addEventListener('click', nextSlide);
btnLeft.addEventListener('click', prevSlide);

// Building a slider component part 2

// Handling keyboard event
document.addEventListener('keydown', function (e) {
  // console.log(e);
  if (e.key === 'ArrowRight') nextSlide();
  e.key === 'ArrowLeft' && prevSlide(); // short circuting
});
