function showScrollButton() {
  var offset = window.pageYOffset;
  //reference to the inner height of document in pixels
  var documentHeight = document.documentElement.clientHeight;

  if (offset > documentHeight - 50) {
    scrollBtn.classList.add("show");
  }
  if (offset < documentHeight - 50) {
    scrollBtn.classList.remove("show");
  }
}

function scrollToTop() {
  if (window.pageYOffset > 0) {
    //Scrolls the document in the window by the given amount.
    //scrollBy(x-coord, y-coord)
    window.scrollBy(0, -20);
    setTimeout(scrollToTop, 0);
  }
}

var scrollBtn = document.querySelector("#back-to-top");
window.addEventListener("scroll", showScrollButton);
scrollBtn.addEventListener("click", scrollToTop);
