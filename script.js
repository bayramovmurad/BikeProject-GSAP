let Close = document.querySelector(".cross");
let searchSection = document.querySelector(".Soverlay");
let searchIcon = document.querySelector(".search");


var tl = gsap.timeline({ defaults: { ease: Expo.easeInOut } });
tl.paused(true);
tl.to(".icon", 1, {
  scale: 4,
});
tl.to(
  searchSection,
  {
    clipPath: " circle(128.4% at 90% 8%)",
    zIndex: "9999",
  },
  "-=.7"
);

tl.from(
  "input",
  {
    x: -200,
    opacity: 0,
  },
  "start"
);
tl.from(
  ".img",
  {
    x: 200,
    opacity: 0,
  },
  "start"
);
searchIcon.addEventListener("click", () => {
  tl.play();
});
Close.addEventListener("click", () => {
  tl.reverse();
});

// 

gsap.from('.container', 1, {
  x: 1000,
})

gsap.from('.logo', 2, {
  x:-1000,
});

gsap.from('nav ul li a', 2, {
  y: -2000,
  stagger: 0.2,
});

gsap.from('.wrap .elmt', 2, {
  delay: 1.6,
  y: 2000,
  stagger: 0.3,
});

gsap.from('.search', 2, {
  y: -2000,
  delay: 3.6,
});

gsap.from('.search .icon', 1, {
  delay: 5.6,
  scale: 0,
});
gsap.from('.search span' ,1, {
  delay: 5.6,
  y: 6000,
  stagger:0.3,
});