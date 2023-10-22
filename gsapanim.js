let g = gsap;

g.from('.f1,.f2,.f3,.f4,.firsttext', {
  y: 50,
  opacity: 0,
  duration: 1.5,
  stagger: 0.5,
});

g.from('.autochoice,.cabchoice', {
  x: -150,
  duration: 1,
  stagger: 1,
  opacity: 0,
});

g.from('.secondhead', {
  x: -150,
  duration: 1,
  delay: 1,
  opacity: 0,
});

g.from('.category1,.category2,.category3,.category4,.category5,.category6', {
  x: 50,
  stagger: 0.5,
  opacity: 0,

  pin: true,
});

g.from(
  '.card1,.card2,.card3,.card4,.card5,.card6,.card7,.card8,.card9,.card10',
  {
    x: 50,
    opacity: 0,
    duration: 1,
  }
);
