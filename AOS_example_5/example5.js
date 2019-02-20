
//On-click Event listener that scrolls down a number of pixels per every click

var lastclick = 1;

window.addEventListener("click", function(){
    lastclick = 800;
    console.log(lastclick);
    window.scrollBy(0, (lastclick));
  });