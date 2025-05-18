"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");

const openModal = function (e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};

const closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};

btnsOpenModal.forEach((btn) => btn.addEventListener("click", openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !modal.classList.contains("hidden")) {
    closeModal();
  }
});

// Selecting Elements
const docElement = document.documentElement;
console.log(docElement);

const header = document.querySelector(".header");
const allSections = document.querySelectorAll(".section");
console.log(allSections);

const sectionElementById = document.getElementById("section--1");

const allButtons = document.getElementsByTagName("button");
console.log(allButtons);

const allBtnByClass = document.getElementsByClassName("btn");
console.log(allBtnByClass);

// .insertAdjacentHTML --> before or after the selected element
// creating and inserting elements
const message = document.createElement("div");
message.classList.add("cookie-message");
// message.textContent = 'We use cookies for improved functionality and analytics.';
message.innerHTML = `We use cookies for improved functionality and analytics. 
<button class='btn btn--close-cookie'>Got it!</button>`;

// header.prepend(message); // attaches the message as the first child of the header
header.append(message); // attaches the message as the last child of the header
// header.append(message.cloneNode(true)); // clones the message and attaches it as the last child of the header
// header.before(message); // attaches the message before the header
// header.after(message); // attaches the message after the header

const closeCookieBtn = document.querySelector(".btn--close-cookie");
//Deleting elements
closeCookieBtn.addEventListener("click", function () {
  message.remove();
});

// CSS STYLES (inline styles)
message.style.backgroundColor = "#37383d";
message.style.width = "120%";

console.log(message.style.color); // returns nothing because it is not an inline style
console.log(message.style.backgroundColor); // returns the background color

console.log(getComputedStyle(message).colore); // returns the computed style of the element
console.log(getComputedStyle(message).height); // returns the computed height of the element

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 30 + "px";

// Css custom properties (variables)
/*
 as custom properties are attached to the :root or the document element, they can be accessed from any element in the document
*/
document.documentElement.style.setProperty("--color-primary", "orangered"); // sets the value of the custom property

// Attributes
const logo = document.querySelector(".nav__logo");
console.log(logo.alt); // returns the value of the alt attribute
console.log(logo.className); // returns the value of the class attribute

logo.alt = "Beautiful minimalist logo"; // sets the value of the alt attribute

// Non-standard attributes
console.log("accessing non-standard attributes", logo.designer); // returns undefined because it is not a standard attribute
console.log("to get non standard attributes: ", logo.getAttribute("designer")); // returns the value of the attribute

console.log("this will return FQDN path: ", logo.src); // returns the value of the src attribute
console.log("this will return relative path: ", logo.getAttribute("src")); // returns the value of the src attribute

const link = document.querySelector(".nav__link--btn");
console.log("FQDN Path: ", link.href); // returns the value of the href attribute
console.log("Relative path: ", link.getAttribute("href")); // returns the value of the href attribute

// Data attributes
console.log("data-version-number: ", logo.dataset.versionNumber); // returns the value of the data-version-number attribute (mention camelCase)

// Classes
logo.classList.add("c", "j");
logo.classList.remove("c", "j");
logo.classList.toggle("c");
logo.classList.contains("c");
// Do not user
logo.className = "Vikki"; // this will override all the classes attached to the element

// Smooth scrolling
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

btnScrollTo.addEventListener("click", function (e) {
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords); //section1 cordiantes as per the viewport

  console.log(e.target.getBoundingClientRect()); // returns the coordinates of the target element (learn more about getBoundingClientRect)

  console.log("Current scroll (X/Y)", window.scrollX, window.scrollY); // returns the current scroll position

  console.log(
    "current viewport height/width",
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  ); // returns the current viewport height and width

  //Scrolling
  // window.scrollTo(s1cords.left + window.scrollX, s1cords.top + window.scrollY); // scrolls to the top of the section

  // window.scrollTo({
  //   left: s1cords.left + window.scrollX,
  //   top: s1cords.top + window.scrollY,
  //   behavior: "smooth"
  // }); // scrolls to the top of the section smoothly

  section1.scrollIntoView({ behavior: "smooth" }); // scrolls to the top of the section smoothly
  // modern way of scrolling to an element
});

/////
// EVENTS AND EVENT HANDLERS
const h1 = document.querySelector("h1");

const alertH1 = function (e) {
  alert("addEventListener: Great! You are reading the heading");
  // h1.removeEventListener("mouseenter", alertH1); //works only with named functions and can be placed inside the function
};
h1.addEventListener("mouseenter", alertH1);
setTimeout(() => h1.removeEventListener("mouseenter", alertH1), 3000);

// @deprecated way
// h1.onmouseenter = function (e) {
//   alert("onmouseenter: Great! You are reading the heading");
// };
// cannot be removed using removeEventListener

// Event Propagation: Bubbling and Capturing
// Capture phase: the event goes down to the target element
// Target phase: the event reaches the target element
// Bubbling phase: the event bubbles up to the root element

// Event Propagation in Practice
// rgb(255, 255, 255)
const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomRGBColorGenerator = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;

document.querySelector(".nav__link").addEventListener("click", function (e) {
  this.style.backgroundColor = randomRGBColorGenerator();
  console.log("LINK", e.target, e.currentTarget);

  // To Stop propagation to the parent element
  // e.stopPropagation();
  e.stopImmediatePropagation();
});
document.querySelector(".nav").addEventListener("click", function (e) {
  alert("Another event listener propogating at parent");
  console.log("nav", e.target, e.currentTarget);
});

document.querySelector(".nav__links").addEventListener("click", function (e) {
  this.style.backgroundColor = randomRGBColorGenerator();
  console.log("CONTAINER", e.target, e.currentTarget);
});

document.querySelector(".nav").addEventListener("click", function (e) {
  this.style.backgroundColor = randomRGBColorGenerator();
  console.log("HEADER", e.target, e.currentTarget);
});
