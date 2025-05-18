"use strict";

///////////////////////////////////////
// Modal window

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const btnCloseModal = document.querySelector(".btn--close-modal");
const btnsOpenModal = document.querySelectorAll(".btn--show-modal");
const btnScrollTo = document.querySelector(".btn--scroll-to");
const section1 = document.querySelector("#section--1");

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

// Smooth scrolling
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

// Page navigation

/** This will attach multiple eventhandlers on each link thus will
 * cause performance issues. Instead, use event delegation
 */
// document.querySelectorAll(".nav__link").forEach(function (el) {
//   el.addEventListener("click", function (e) {
//     e.preventDefault();
//     const id = this.getAttribute("href");
//     console.log("id", id);
//     document.querySelector(id).scrollIntoView({ behavior: "smooth" });
//   });
// });

// Event delegation
// 1. Add event listener to common parent element
document.querySelector(".nav__links").addEventListener("click", function (e) {
  e.preventDefault();
  // 2. Determine what element originated the event
  if (e.target.classList.contains("nav__link")) {
    // 3. Find the target element
    const id = e.target.getAttribute("href"); // to get relative value
    console.log("id", id);
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// Tabbed component
const tabContainer = document.querySelector(".operations__tab-container");
const tabs = document.querySelectorAll(".operations__tab");
const tabsContent = document.querySelectorAll(".operations__content");

tabContainer.addEventListener("click", (e) => {
  const clicked = e.target.closest(".operations__tab");
  //Guard clause
  if (!clicked) return;
  //Activate tab
  [...tabs].forEach((tab) => tab.classList.remove("operations__tab--active"));
  clicked.classList.add("operations__tab--active");

  //Activate content area
  [...tabsContent].forEach((content) =>
    content.classList.remove("operations__content--active")
  );
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add("operations__content--active");
});

// Adding Animation to the Nav links

const handleHover = function (e) {
  // console.log("opacity", opacity);
  // console.log(this, e.currentTarget);
  if (e.target.classList.contains("nav__link")) {
    const link = e.target;
    const siblings = e.target.closest(".nav").querySelectorAll(".nav__link");
    const logo = e.target.closest(".nav").querySelector("img");
    siblings.forEach((el) => {
      if (el != link) {
        el.style.opacity = this; //opacity;
        logo.style.opacity = this; //opacity;
      }
    });
  }
};

// nav.addEventListener("mouseover", function (e) {
//   handleHover(e, 0.5);
// });

// nav.addEventListener("mouseout", function (e) {
//   handleHover(e, 1);
// });

const nav = document.querySelector(".nav");

//can also be written as  using "bind" method
// Passing "argument" into handler
nav.addEventListener("mouseover", handleHover.bind(0.5));
nav.addEventListener("mouseout", handleHover.bind(1));

// Stick scrolling navigation

/* 
// not so efficient
const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener("scroll", function (e) {
  if (window.scrollY > initialCoords.top) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
});
*/

//Sticky navigation: Intersection Observer ApI.

// const observerCallBack = function (enteries, observer) {
//   /** enteries: threshold enteries... */
//   enteries.forEach((entry) => {
//     console.log(entry);
//   });
// };
// const observerOptions = {
//   root: null, // observer observes intersecting root on entire viewport, else on intersection of root.
//   threshold: 0.1, // (10%) threshold is the percentage threshold at which observerCallback will be called.
// };

// const observer = new IntersectionObserver(observerCallBack, observerOptions);
// observer.observe(section1); //target to observe

const header = document.querySelector(".header");

const stickyNavHandler = function (enteries) {
  const [entry] = enteries;
  // console.log(entry);
  if (!entry.isIntersecting) nav.classList.add("sticky");
  else nav.classList.remove("sticky");
};

const navHeight = nav.getBoundingClientRect().height;
// console.log(navHeight);

const headerObserver = new IntersectionObserver(stickyNavHandler, {
  root: null,
  threshold: 0, // everytime header is out of viewport
  rootMargin: `-${navHeight}px`,
});
headerObserver.observe(header);

// Sections Reveal Scrolling animation

const allSections = document.querySelectorAll(".section");

const revealSectionObserverCallBack = function (enteries, observer) {
  // console.log(enteries);
  enteries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target); // to unobserve the target post action completed
  });
};

const sectionObserver = new IntersectionObserver(
  revealSectionObserverCallBack,
  {
    root: null,
    threshold: 0.15,
  }
);
allSections.forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});

// Lazy Loading images.

const imageTargets = document.querySelectorAll("img[data-src]");

const imageObserverCallBack = (enteries, observer) => {
  const [entry] = enteries;
  // console.log(entry);
  if (!entry.isIntersecting) return;
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener("load", function (e) {
    // console.log("image laoded");
    entry.target.classList.remove("lazy-img");
  });
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(imageObserverCallBack, {
  root: null,
  threshold: 0,
  rootMargin: "200px",
});

imageTargets.forEach((image) => {
  imageObserver.observe(image);
});

// Slider

const slider = document.querySelector(".slider");
const slides = document.querySelectorAll(".slide");
const btnSlideRight = document.querySelector(".slider__btn--right");
const btnSlideLeft = document.querySelector(".slider__btn--left");

// For Developing locally to view all images inline uncomment below 3 lines
// slider.style.transform = "scale(0.4) translateX(-800px)";
// slider.style.overflow = "visible";
// slides.forEach((s, i) => (s.style.transform = `translateX(${i * 100}%)`));

// End of local devlopment  mode modification......

let currentSlide = 0;
let maxSlides = slides.length;

// slide to the given slide
const goToSlide = (slide) => {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${(i - slide) * 100}%)`;
  });
};
//slide left direction
const prevSlide = () => {
  if (currentSlide === 0) {
    currentSlide = maxSlides - 1; //reset back to last if clicked on 0th tile
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

// slide right direction
function nextSlide() {
  if (currentSlide === maxSlides - 1) {
    currentSlide = 0; //reset the slide position back to 0, once end is reached.
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
}

goToSlide(0); //setting slid stack

//event handler for right slide button click
btnSlideRight.addEventListener("click", nextSlide);

//event handler for left slide button click
btnSlideLeft.addEventListener("click", prevSlide);
