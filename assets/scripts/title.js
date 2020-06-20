var app = document.getElementById('title');

var typewriter = new Typewriter(app, {
  loop: false,
  delay: 75,
});

typewriter
  .pauseFor(2000)
  .typeString('Hello, I\'m Leuan')
  .pauseFor(300)
  .deleteChars(5)
  .typeString('Ieuan')
  .pauseFor(1000)
  .start();
