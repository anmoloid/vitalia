import { scroll, animate } from "motion"




if (window.innerWidth>=1200){
  var top1 = document.querySelector('.cw-hero2-textContainer').offsetTop - document.querySelector('.cw-hero1-img.cw-hero1-img2').offsetTop + 52 ;
  var marginTop1 = ['50vh','3vh','3vh'];
  var marginTop3 = ['10vh','53.5vh','53.5vh'];
  var top4 = top1 - 120;
  var cw_hero2_textCTA_marg = ['-5vh','18vh','18vh'];
} else if (window.innerWidth>=768){
  var top1 =  document.querySelector('.cw-hero1-img.cw-hero1-img2').offsetTop + 52 ;
  var marginTop1 = ['36vh','3vh','3vh'];
  var marginTop3 = ['10vh','35vh','35vh'];
  var cw_hero2_textCTA_marg = ['-5vh','18vh','18vh'];
  var top4 = top1 - 120;
} else {
  var top1 =  document.querySelector('.cw-hero1-img.cw-hero1-img2').offsetTop - 100 ;
  var marginTop1 = ['35vh','13vh','13vh'];
  var marginTop3 = ['10vh','32vh','32vh'];
  var cw_hero2_textCTA_marg = ['-5vh','0vh','0vh'];
  var top4 = top1;
}


/*top section appearing*/

animate(".cw-hero1-img1, .cw-hero1-img2, .cw-hero1-img3", { top: '-2000px', opacity:0 },{ duration: 0 });
animate(".cw-hero1-img3", { top: 0, opacity:1 },{ duration: 2.6, delay: 0 });
animate(".cw-hero1-img2", { top: 0, opacity:2 },{ duration: 2.3, delay: 0.3 });
animate(".cw-hero1-img1", { top: 0, opacity:3 },{ duration: 2.0, delay: 0.6 });

animate(".cw-hero1-textContainer h2, .cw-hero1-textContainer h3, .cw-hero1-textContainer p, .cw-hero1-textContainer button", { y: -1000, opacity:0 },{ duration: 0 });

animate(".cw-hero1-textContainer button", { y: 0, opacity:1 },{ duration: 2.3, delay: 0.3 });
animate(".cw-hero1-textContainer p", { y: 0, opacity:1 },{ duration: 2.2, delay: 0.4 });
animate(".cw-hero1-textContainer h3", { y: 0, opacity:1 },{ duration: 2.1, delay: 0.5 });
animate(".cw-hero1-textContainer h2", { y: 0, opacity:1 },{ duration: 2.0, delay: 0.6 });

/*scrollOptions*/
const scrollOptions = {
  target: document.querySelector(".cw-hero1-section"),
  offset: ["start start", "end end"]
}

scroll(
  animate(".cw-hero1-img1", { y: [0, top1, top1 ], marginTop:marginTop1 }, { delay: 0 }),
  scrollOptions
);

scroll(
  animate(".cw-hero1-img2", { y: [0, top1, top1 ] }, { delay: 0 }),
  scrollOptions
);
scroll(
  animate(".cw-hero1-img3", { y: [0, top1, top1 ], marginTop:marginTop3 }, { delay: 0}),
  scrollOptions
);

scroll(
  animate(".cw-hero1-img1_after", { opacity:[0,1,1] }, { delay: 0 }),
  scrollOptions
);
scroll(
  animate(".cw-hero1-img2_after", { opacity:[0,1,1] }, { delay: 0 }),
  scrollOptions
);
scroll(
  animate(".cw-hero1-img3_after", { opacity:[0,1,1] }, { delay: 0 }),
  scrollOptions
);
scroll(
  animate(".cw-hero2-textContainer h3", { y: [100, 0, 0 ], opacity: [0,1,1] }),
  scrollOptions
);
scroll(
  animate(".cw-hero2-textContainer p", { y: [200, 0, 0 ], opacity: [0,1,1] }),
  scrollOptions
);


scroll(
  animate(".cw-hero2-textCTA", { y: [0, top4, top4 ], marginTop:cw_hero2_textCTA_marg, opacity: [0,1,1] }, { delay:0.05 }),
  scrollOptions
);
scroll(
  animate(".cw-hero2-textCTA .cw-hero2-button", { x: [500, 0, 0 ]  }, { delay:0.02 }),
  scrollOptions
);


/*scrollOptions2*/
const scrollOptions2 = {
  target: document.querySelector(".cw-departments-section"),
  offset: ["start end", "start start"]
}
scroll(
  animate(".cw-departments-icon", { top: ['-150%', '50%'], opacity: [0,1] }, { delay: 0 }),
  scrollOptions2
);

scroll(
  animate(".cw-hero1-img1", {  opacity: [1,0] }),
  scrollOptions2
);
scroll(
  animate(".cw-hero1-img2", {  opacity: [1,0] }),
  scrollOptions2
);
scroll(
  animate(".cw-hero1-img3", {  opacity: [1,0] }),
  scrollOptions2
);
scroll(
  animate(".cw-departments-textContent h2", {y:[50,0,0], opacity: [0,1] }),
  scrollOptions2
);
scroll(
  animate(".cw-departments-textContent p", {y:[150,0,0], opacity: [0,1] }),
  scrollOptions2
);

/*scrollOptions3*/
const scrollOptions3 = {
  target: document.querySelector(".cw-latestJobs-section"),
  offset: ["start end", "start start"]
}
scroll(
  animate(".cw-latestJobs-icon", { top: ['-150%', '50%'], opacity: [0,1] }, { delay: 0 }),
  scrollOptions3
);
scroll(
  animate(".cw-latestJobs-textContent h2", {y:[50,0,0], opacity: [0,1] }),
  scrollOptions3
);
scroll(
  animate(".cw-latestJobs-textContent p", {y:[150,0,0], opacity: [0,1] }),
  scrollOptions3
);
var delay1 = 0.1;
document.querySelectorAll('.cw-latestJobs-slide').forEach((element) => {
    scroll(
    animate(element, {y:[100,0,0], opacity: [0,1,1] }, { delay: delay1 }),
    scrollOptions3
  );
    delay1+=0.1;
});

/*scrollOptions4*/
const scrollOptions4 = {
  target: document.querySelector(".cw-social-section"),
  offset: ["start end", "start start"]
}

scroll(
  animate(".cw-social-iframe", { y: [200, 0] }, { delay: 0 }),
  scrollOptions4
);
scroll(
  animate(".cw-social-textContainer h2", {y:[50,0], opacity: [0,1] }),
  scrollOptions4
);
scroll(
  animate(".cw-social-textContainer p", {y:[200,0], opacity: [0,1] }, { delay: 0.1 }),
  scrollOptions4
);
scroll(
  animate(".cw-social-textContainer img", {y:[200,0], opacity: [0,1] }, { delay: 0.3 }),
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
