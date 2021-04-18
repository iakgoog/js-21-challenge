(() => {
  // startSnowing();
  const konamiPattern = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let patternHit = 0;

  function konamiPatternHandler({ keyCode }) {
    keyCode === konamiPattern[patternHit] ? patternHit++ : patternHit = 0;
    if (patternHit === konamiPattern.length) {
      patternHit = 0;
      startSnowing();
    }
  }

  function run() {
    document.addEventListener('keyup', konamiPatternHandler);
  }

  run();
})();
