let size;
(function () {
  size = {}
  setProperties()
  window.addEventListener('resize', setProperties)
  function setProperties() {
    size.screenWidth = roundify(window.screen.width)
    size.screenHeight = roundify(window.screen.height)
    size.pageWidth = roundify(document.body.clientWidth)
    size.pageHeight = roundify(document.body.clientHeight)
    size.windowWidth = roundify(window.innerWidth)
    size.windowHeight = roundify(window.innerHeight)
    function roundify(n) {
      return Math.round(n * window.devicePixelRatio)
    }
  }
})();
function displaySize() {
  console.clear()
  console.log(size)
  document.querySelector("#screenSize").innerHTML = `${size.pageWidth}px,${size.pageHeight}px`;
}
displaySize()
window.addEventListener('resize', displaySize)
