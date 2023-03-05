import "./scss/pages/index.scss";

import gsap from "gsap";
import CSSPlugin from "gsap/CSSPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";

import ScrollMagic from "scrollmagic";

gsap.registerPlugin( CSSPlugin, ScrollTrigger );

// PAGE OBJECTIVES
// create controller
// create scenes 
// set value of scene based on viewport size

// VARIABLES
const MEDIA_QUERIES = {
  "678": window.matchMedia( "(min-width: 678px)" ),
}
// const CONTROLLER = new ScrollMagic.Controller();

const G_MM = gsap.matchMedia();

G_MM.add(
  "(min-width: 678px)",
  ( ctx ) => {
    let image_parallax = gsap.fromTo(
      ".test-image",
      {
        yPercent: -75,
      },
      {
        yPercent: 75,
        ease: "none",
        scrollTrigger: {
          trigger: ".section-2",
          start: "top bottom", // the default values
          end: "bottom top",
          scrub: true
        }, 
      }, 
    )
    return;
  }
)
// gsap.fromTo(
//   ".test-image",
//   {
//     yPercent: 75,
//   },
//   {
//     yPercent: -75,
//     ease: "none",
//     scrollTrigger: {
//       trigger: ".section-2",
//       // start: "top bottom", // the default values
//       // end: "bottom top",
//       scrub: true
//     }, 
//   }
// )



window.addEventListener( "load", init );

/**Runs once, when the page completes loading */
function init(){
  MEDIA_QUERIES[678].addEventListener( "change", pageResizeHandler );
  return;
}

function pageResizeHandler( e ){
  console.log( e.matches );
  return;
}

