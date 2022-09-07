var tl = anime.timeline({
  easing: 'easeOutBack'
});

tl
  
  .add({
    targets: '#intro2',
    translateX: [100,0],
    translateZ: 0,
    opacity: [0,1],
    easing: "easeOutBack",
    delay: 0
  })
  .add({
    targets: '#intro3',
    opacity: [0,1],
    easing: "easeOutBack",
    delay: 0
  });
