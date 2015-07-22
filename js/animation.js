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


   play();

}

function play() {
	
}

function doExits() {
    elems.exit.addEventListener('click', bgExitHandler, false);
}
