// // initialize splitting
// Splitting();

// // GSAP BABY!
// gsap.from('.char', {
//     rotateY: 180,
//     opacity: 0,
//     stagger: {
//         amount: 1,
//     }, 
//     duration: 1,
//     ease: 'power3.Out',
// })

















const animation = document.getElementById("animation");

animation.addEventListener("animationend", (e) => {
  switch (e.animationName) {
    case "title-scale-out":
      [...document.getElementsByClassName("intro-sf-title-bound")].forEach(
        (element, index, array) => {
          element.classList.add("visible");
        }
      );
      break;
    case "bound-fade-in":
      setTimeout(() => {
        animation.classList.add("outro");
      }, 2000);
      break;
    default:
      break;
  }
});
