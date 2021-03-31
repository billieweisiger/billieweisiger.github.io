var tl = anime.timeline({
  easing: 'easeOutExpo',
  duration: 1000,
  delay: 1000
});

tl
  .add({
    targets: '#intro1',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutBack",
    delay: 0
  })
  .add({
    targets: '#intro2',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutBack",
    delay: 0
  })
  .add({
    targets: '.work',
    translateY: [-100, 0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutBack"
  });
