var app = document.getElementById('contacttitle');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString('Contact')
  .pauseFor(300)
  .start();
