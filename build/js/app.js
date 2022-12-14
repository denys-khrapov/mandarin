// Mobile menu

const menu = document.querySelector(".mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector(".navbar__logo");
const body = document.querySelector("body");

const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

// Scroll to Top
const scrollBtn = document.querySelector(".isShowBtn");

window.onscroll = () => {
  if (window.scrollY > 4000) {
    scrollBtn.classList.remove("isShowBtn--hide");
  } else {
    scrollBtn.classList.add("isShowBtn--hide");
  }
  if (window.scrollY > 200) {
    progressBar.classList.remove("progress-bar--hide");
  } else {
    progressBar.classList.add("progress-bar--hide");
  }
};

scrollBtn.onclick = () => {
  window.scrollTo(0, 0);
};

// Progress bar
const progressBar = document.querySelector(".progress-bar");
const progressBarInner = document.querySelector(".progress-bar__inner");

//Show progress bar

window.addEventListener("scroll", function () {
  let h = document.documentElement;
  let st = h.scrollTop || document.body.scrollTop;
  let sh = h.scrollHeight || document.body.scrollHeight;
  let percent = (st / (sh - h.clientHeight)) * 100;
  progressBarInner.style.width = percent + "%";
});

// Animations
gsap.registerPlugin(ScrollTrigger);

gsap.from(".animate-club", {
  duration: 0.6,
  opacity: 0,
  y: -150,
  stagger: 0.3,
});

gsap.from(".animate-services", {
  duration: 0.3,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.4,
  scrollTrigger: {
    trigger: ".animate-services",
  },
});

gsap.from(".animate-img", {
  duration: 0.5,
  opacity: 1,
  x: -200,
  scrollTrigger: {
    trigger: ".animate-services",
  },
});

gsap.from(".animate-membership", {
  scrollTrigger: ".animate-membership",
  duration: 1,
  opacity: 0,
  y: -150,
});

gsap.from(".animate-card", {
  scrollTrigger: ".animate-card",
  duration: 1,
  opacity: 0,
  y: 150,
});

gsap.from(".animate-team", {
  scrollTrigger: ".animate-team",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2,
});

gsap.from(".animate-team-second", {
  scrollTrigger: ".animate-team-second",
  duration: 1,
  opacity: 0,
  y: -150,
  stagger: 0.3,
  delay: 0.2,
});

gsap.from(".animate-email", {
  scrollTrigger: ".animate-email",
  duration: 0.8,
  opacity: 0,
  y: -150,
  stagger: 0.25,
  delay: 0.4,
});
