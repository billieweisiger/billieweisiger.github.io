var tl = anime.timeline({
  easing: 'easeOutBack',
  // duration: 1000,
  // delay: 1000
});

tl
  .add({
    targets: '#intro',
    translateY: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutBack",
    duration: 1000,
    delay: 0
  })
  .add({
    targets: '#intro2',
    translateX: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutBack",
    delay: 500
  });
