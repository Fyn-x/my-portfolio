const nav = document.querySelector("nav");

window.addEventListener("scroll", function () {
  position = window.scrollY;

  if (position >= 150) {
    nav.classList.add("bg-nav", 'shadow');
  } else {
    nav.classList.remove("bg-nav", 'shadow');
  }
});

// AOS Skill Section
const aosImage = document.querySelectorAll("#skill img");
aosImage.forEach((img, i) => {
  img.dataset.aos = "flip-left";
  img.dataset.aosDuration = 2000;
  img.dataset.aosDelay = i * 250;
  img.dataset.aosOffset = 50;
});

// GASP
gsap.registerPlugin(TextPlugin);

gsap.from(".navbar", {
  duration: 1,
  opacity: 0,
  y: -100,
  ease: "sine",
});
gsap.from(".btn-custom", {
  delay: 10.7,
  duration: 3.5,
  opacity: 0,
  x: 0,
});
gsap.from("#hero img", {
  duration: 2,
  delay: 0.5,
  x:0,
  opacity:0,
  scale:0.5,
});
gsap.from("#hero h1 span", {
  duration: 2.5,
  delay: 4,
  text: "",
  opacity: 0,
});
gsap.from("#hero h1", {
  duration: 2.5,
  delay: 2,
  x: -100,
  opacity: 0,
});
gsap.from("#hero h2", {
  duration: 2.5,
  delay: 1.1,
  x: -100,
  opacity: 0,
});

gsap.from("#hero p", {
  duration: 5,
  delay: 6,
  text: "",
  opacity: 0,
});
