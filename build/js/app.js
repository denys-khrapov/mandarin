// Mobile menu

const menu = document.querySelector("#mobile-menu");
const menuLinks = document.querySelector(".navbar__menu");
const navLogo = document.querySelector(".navbar__logo");
const body = document.querySelector("body");

const mobileMenu = () => {
  menu.classList.toggle("active");
  menuLinks.classList.toggle("active");
  body.classList.toggle("active");
};

menu.addEventListener("click", mobileMenu);

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
