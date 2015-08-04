window.onload = function() {
    // if (Enabler.isInitialized()) {
    //     init()
    // } else {
    //     Enabler.addEventListener(studio.events.StudioEvent.INIT, init);
    // }
    init()
}

var elems = {};

function init() {
  elems.exit = document.getElementById('bg-exit');
  elems.box = document.getElementById('box');


   play();

}

function play() {
  $(elems.box, 2,{x:100, y:100})
  $(elems.box, 2,{delay:2, x:0})
	        console.log(elems.box.translate.y);

}

function doExits() {
    elems.exit.addEventListener('click', bgExitHandler, false);
}
