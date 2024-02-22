import { scroll, animate } from "motion";

/*top section appearing*/
animate(".cw-lifeVitaliaHero-heading", { marginLeft: '-1000px', opacity:0 },{ duration:0 });
animate(" .cw-lifeVitaliaHero-textContainer1", { left: '-1000px', marginLeft: '-1000px', opacity:0 },{ duration:0 });
animate(" .cw-lifeVitaliaHero-imageContainer", { marginRight: '-1000px',  opacity:0 },{ duration:0 });

animate(".cw-lifeVitaliaHero-section__bg", { opacity:[1,0.7,1] },{ duration: 2.3, delay: 0 });
animate(".cw-lifeVitaliaHero-heading", { marginLeft: 0, opacity:1 },{ duration: 2.3, delay: 0.1 });
animate(".cw-lifeVitaliaHero-textContainer1", {marginLeft: '0px', left: 0, opacity:1 },{ duration: 2.3, delay: 0.1 });
animate(" .cw-lifeVitaliaHero-imageContainer", { marginRight: 0,  opacity:1 },{ duration:2.3, delay: 0.1 });

/*scrollOptions*/
const scrollOptions = {
  target: document.querySelector(".cw-lifeVitaliaHero-section"),
  offset: ["start start", "end end"]
}
scroll(
  animate(".cw-lifeVitaliaHero-textContainer2", { transform: ['translateX(100%)','translateX(100%)']  },{ duration: 0 }),
  scrollOptions
);

scroll(
  animate(".cw-lifeVitaliaHero-textContainer1", {
     transform: ["none", `translateX(-100%)`],  opacity: [1, 0]
  }),
  scrollOptions
);
scroll(
  animate(".cw-lifeVitaliaHero-textContainer1 h2", {
     x: [0,-300]
  }),
  scrollOptions
);
scroll(
  animate(".cw-lifeVitaliaHero-textContainer1 p", {
     x: [0,-200]
  }),
  scrollOptions
);
scroll(
  animate(".cw-lifeVitaliaHero-textContainer2", {
     transform: ['translateX(100%)', 'translateX(0%)'],  opacity: [0, 1]
  }),
  scrollOptions
);
scroll(
  animate(".cw-lifeVitaliaHero-textContainer2 h2", {
     x: [200,0]
  }),
  scrollOptions
);
scroll(
  animate(".cw-lifeVitaliaHero-textContainer2 p", {
     x: [300,0]
  }),
  scrollOptions
);
scroll(
  animate(".cw-lifeVitaliaHero-heading", {
     y: [0,-500], opacity:[1,0]
  }),
  scrollOptions
);
if (window.innerWidth>768){
  console.log( window.innerWidth )
  scroll(
    animate(".cw-lifeVitaliaHero-imageContainer", {
       transform: ['translateX(0)', 'translateX(-34%)']
    }),
    scrollOptions
  );
}
scroll(
  animate(".cw-lifeVitaliaHero-imageContainer_after", {
     opacity:[0,0,1,1]
  }),
  scrollOptions
);




/*scrollOptions2*/
const scrollOptions2 = {
  target: document.querySelector(".cw-values-section"),
  offset: ["start end", "start start"]
}
scroll(
  animate(".cw-values-tabs", {  opacity: [0,1] }, { delay: 0 }),
  scrollOptions2
);
scroll(
  animate(".cw-values-textContainer h2", {y:[100,0,0], opacity: [0,1] }),
  scrollOptions2
);
scroll(
  animate(".cw-values-textContainer p", {y:[150,0,0], opacity: [0,1] }, { delay: 0.1 }),
  scrollOptions2
);
scroll(
  animate(".cw-values-imagesContainer", {y:[250,0,0], opacity: [0,1] }),
  scrollOptions2
);

/*scrollOptions3*/
const scrollOptions3 = {
  target: document.querySelector(".cw-testimonials-section"),
  offset: ["start end", "start start"]
}
scroll(
  animate(".cw-testimonials-icon", { top: ['-150%', '50%'], opacity: [0,1] }, { delay: 0 }),
  scrollOptions3
);
scroll(
  animate(".cw-testimonials-textContent h2", {y:[50,0,0], opacity: [0,1] }),
  scrollOptions3
);
scroll(
  animate(".cw-testimonials-textContent p", {y:[200,0,0], opacity: [0,1] }),
  scrollOptions3
);
var delay1 = 0.2;
document.querySelectorAll('.cw-testimonials-slide').forEach((element) => {
    scroll(
    animate(element, {y:[100,0,0], opacity: [0,1,1] }, { delay: delay1 }),
    scrollOptions3
  );
    delay1+=0.1;
});

/*scrollOptions4*/
const scrollOptions4 = {
  target: document.querySelector(".cw-workforce-section"),
  offset: ["start end", "start start"]
}

scroll(
  animate(".cw-workforce-section h2", {y:[100,0,0], opacity: [0,1] }),
  scrollOptions4
);
scroll(
  animate(".cw-workforce-dataContainer", {y:[150,0,0], opacity: [0,1] }, { delay: 0.1 }),
  scrollOptions4
);


/*scrollOptions5*/
const scrollOptions5 = {
  target: document.querySelector(".cw-blog-fullWrapper"),
  offset: ["start end", "start start"]
}
scroll(
  animate(".cw-blog-icon", { top: ['-150%', '50%'], opacity: [0,1] }, { delay: 0 }),
  scrollOptions5
);
scroll(
  animate(".cw-blog-main h2", {y:[-200,0,0], opacity: [0,1] }),
  scrollOptions5
);
scroll(
  animate(".cw-blog-carouselMain", { opacity: [0,1] }),
  scrollOptions5
);



//----Values Section ---------

const tabs = document.querySelectorAll(".cw-values-tabs li");
const allValues = document.querySelectorAll(".cw-values-valuesContainer");

tabs.forEach((tab) => {
  tab.addEventListener("click", (e) => {
    tabs.forEach((tab) => {
      tab.classList.contains("active-tab") &&
        tab.classList.remove("active-tab");
    });

    e.target.classList.add("active-tab");
    const activeTab = e.target.innerText;

    allValues.forEach((value) => {
      if (value.classList.contains("cw-values-activeValue")) {
        value.classList.remove("cw-values-activeValue");
      }
      if (value.dataset.name === activeTab) {
        value.classList.add("cw-values-activeValue");
      }
    });
  });
});
///
const btns = document.querySelectorAll(".cw-arrowContainer img");
const tabMenu = document.querySelector(".cw-values-tabs");

const tabWidth = document.querySelector(".cw-values-tabs li").offsetWidth;

btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    tabMenu.scrollLeft += btn.id === "left" ? -tabWidth : tabWidth;
  })
);
