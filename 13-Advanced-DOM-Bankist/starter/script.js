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


// Selecting, Creating and Deleting Elements

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


// Styles, Attributes and Classes

// Styles
// Note: 
// 1. styles created on an element in js always inline styles
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
